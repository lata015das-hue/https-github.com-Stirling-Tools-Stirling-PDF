#!/usr/bin/env python3
"""Internal-linking audit.

Scans content/blog/**/*.mdx and src/routes/tools/*.tsx, builds a directed
link graph, and writes a Markdown report to reports/internal-linking-audit.md.

Definitions
-----------
* Page = a publishable URL on the site:
  - Blog: content/blog/<rel>.mdx -> /blog/<rel>
  - Tool stub: src/routes/tools/<slug>.tsx -> /tools/<slug>
* Internal link = any of:
  - [text](/blog/<rel>)              -> resolves to the blog page with that slug
  - [text](/tools/<slug>)            -> resolves to the tool stub with that filename
  - [text](/index.html#/tool/<id>)   -> bridges to the tool stub whose meta.toolId == <id>
                                        (if any). If no stub exists with that id but the
                                        id is in js/tools-data.js, the link is VALID but
                                        does not count as an incoming link to any
                                        static page (the destination is the SPA only).
                                        If the id is not in tools-data.js, the link is BROKEN.
* Outgoing count = unique destination pages per page (not raw link count).

Outputs reports/internal-linking-audit.md (overwrites).
"""
import os, re, json, sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# ---------- 1. Load canonical tool ids from tools-data.js ----------
tools_js = open(os.path.join(ROOT, "js/tools-data.js"), encoding="utf-8").read()
TOOL_IDS = set(re.findall(r"id:\s*'([a-z0-9-]+)'", tools_js))

# ---------- 2. Enumerate pages ----------
def split_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m:
        return {}, text
    fm_text, body = m.group(1), m.group(2)
    fm = {}
    for line in fm_text.splitlines():
        mm = re.match(r"^([a-zA-Z_]+):\s*(.*)$", line)
        if not mm:
            continue
        k, v = mm.group(1), mm.group(2).strip()
        if v.startswith('"') and v.endswith('"'):
            v = v[1:-1]
        elif v.startswith('[') and v.endswith(']'):
            v = [t.strip().strip('"') for t in v[1:-1].split(",") if t.strip()]
        elif v in ("true", "false"):
            v = (v == "true")
        fm[k] = v
    return fm, body

pages = {}  # url -> { kind, file, title, keyword, tags, tool_id, body }

# Blog
blog_root = os.path.join(ROOT, "content", "blog")
for dirpath, _, filenames in os.walk(blog_root):
    for fn in filenames:
        if not fn.endswith(".mdx"):
            continue
        full = os.path.join(dirpath, fn)
        rel = os.path.relpath(full, blog_root).replace("\\", "/")[:-len(".mdx")]
        url = "/blog/" + rel
        text = open(full, encoding="utf-8").read()
        fm, body = split_frontmatter(text)
        pages[url] = {
            "kind": "blog",
            "file": os.path.relpath(full, ROOT),
            "title": fm.get("title", ""),
            "keyword": fm.get("keyword", ""),
            "tags": fm.get("tags", []) or [],
            "lang": fm.get("lang", "en"),
            "tool_id": None,
            "body": body,
            "draft": fm.get("draft", False),
            "published": fm.get("published", True),
        }

# Tool stubs
tools_dir = os.path.join(ROOT, "src", "routes", "tools")
for fn in sorted(os.listdir(tools_dir)):
    if not fn.endswith(".tsx") or fn.startswith("_"):
        continue
    full = os.path.join(tools_dir, fn)
    slug = fn[:-len(".tsx")]
    url = "/tools/" + slug
    text = open(full, encoding="utf-8").read()
    # Pull meta.* literally from the file
    def meta(name, default=""):
        m = re.search(name + r':\s*"([^"]*)"', text)
        return m.group(1) if m else default
    pages[url] = {
        "kind": "tool",
        "file": os.path.relpath(full, ROOT),
        "title": meta("title"),
        "keyword": meta("keyword"),
        "tags": [meta("category")] if meta("category") else [],
        "lang": "en",
        "tool_id": meta("toolId"),
        "body": text,
        "draft": False,
        "published": True,
    }

# ---------- 3. Map tool_id -> static tool page url (for SPA-link bridging) ----------
tool_id_to_page = {p["tool_id"]: url for url, p in pages.items() if p["kind"] == "tool" and p["tool_id"]}

# ---------- 4. Extract internal links ----------
LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)\s]+)\)")

def is_internal(url):
    return (url.startswith("/blog/")
            or url.startswith("/tools/")
            or url.startswith("/index.html#/tool/")
            or url.startswith("/index.html#/")  # the home/category root
            or url == "/")

# Edges: source_url -> list of (raw_target, resolved_target_url_or_None, status)
# status: "ok" | "broken" | "spa-only"  (spa-only = valid SPA url but no static page)
edges = defaultdict(list)
broken = []  # list of dicts

for src_url, p in pages.items():
    seen_targets = set()
    for m in LINK_RE.finditer(p["body"]):
        target = m.group(2).strip()
        if not is_internal(target):
            continue
        # strip trailing # / ? fragments after path for /blog and /tools
        clean = target.split("?")[0]
        # blog
        if clean.startswith("/blog/"):
            slug = clean[len("/blog/"):]
            tgt_url = "/blog/" + slug.rstrip("/")
            if tgt_url in pages:
                edges[src_url].append((target, tgt_url, "ok"))
            else:
                edges[src_url].append((target, None, "broken"))
                broken.append({"from": src_url, "from_file": p["file"], "target": target, "reason": "no blog page with that slug"})
        # tools static
        elif clean.startswith("/tools/"):
            slug = clean[len("/tools/"):].rstrip("/")
            tgt_url = "/tools/" + slug
            if tgt_url in pages:
                edges[src_url].append((target, tgt_url, "ok"))
            else:
                edges[src_url].append((target, None, "broken"))
                broken.append({"from": src_url, "from_file": p["file"], "target": target, "reason": "no tool stub with that filename"})
        # SPA tool deep link
        elif clean.startswith("/index.html#/tool/"):
            tid = clean[len("/index.html#/tool/"):].rstrip("/")
            if tid not in TOOL_IDS:
                edges[src_url].append((target, None, "broken"))
                broken.append({"from": src_url, "from_file": p["file"], "target": target, "reason": f"tool id '{tid}' not in js/tools-data.js"})
            elif tid in tool_id_to_page:
                edges[src_url].append((target, tool_id_to_page[tid], "ok"))
            else:
                # Valid SPA target, but no static stub exists. Don't flag broken.
                edges[src_url].append((target, None, "spa-only"))
        elif clean.startswith("/index.html#/") or clean == "/":
            # Home / category landing in the SPA -- valid but not a static page.
            edges[src_url].append((target, None, "spa-only"))

# ---------- 5. Compute incoming counts ----------
incoming = defaultdict(set)  # url -> set of source urls
outgoing_unique = defaultdict(set)  # url -> set of resolved target urls

for src, es in edges.items():
    for raw, resolved, status in es:
        if status == "ok" and resolved:
            incoming[resolved].add(src)
            outgoing_unique[src].add(resolved)

# ---------- 6. Suggestion engine for orphans ----------
def page_tokens(p):
    blob = " ".join([p.get("title", ""), p.get("keyword", ""), " ".join(p.get("tags", []))]).lower()
    toks = set(re.findall(r"[a-z][a-z0-9-]+", blob))
    # drop very generic stop-words
    stop = {"pdf", "the", "and", "for", "how", "to", "with", "a", "of", "in", "on", "your", "is", "it"}
    return toks - stop

def suggest_links_for(orphan_url, k=3):
    target = pages[orphan_url]
    target_toks = page_tokens(target)
    # If it's a tool stub, also seed with its tool id
    if target["kind"] == "tool" and target["tool_id"]:
        target_toks.add(target["tool_id"])
    candidates = []
    for url, p in pages.items():
        if url == orphan_url:
            continue
        # skip if already linking
        if url in incoming[orphan_url]:
            continue
        # skip drafts
        if p.get("draft") and not p.get("published"):
            # blog drafts are still candidates as link sources once published; allow.
            pass
        score = 0
        toks = page_tokens(p)
        # token overlap
        overlap = target_toks & toks
        score += 3 * len(overlap)
        # if the candidate's body literally references our tool_id or our slug, big bonus
        if target["kind"] == "tool" and target["tool_id"]:
            if f"/index.html#/tool/{target['tool_id']}" in p["body"]:
                # already linking via SPA; skip suggesting since they effectively reach it
                continue
            # text mention of the tool name's slug-ish form
            if target["tool_id"].replace("-", " ") in p["body"].lower():
                score += 4
        if target["kind"] == "blog":
            slug = orphan_url[len("/blog/"):]
            if slug in p["body"]:
                continue  # already mentions
        if score <= 0:
            continue
        # rationale
        why_bits = []
        if overlap:
            why_bits.append("shared terms: " + ", ".join(sorted(overlap)[:4]))
        if target["kind"] == "tool" and target["tool_id"] and target["tool_id"].replace("-", " ") in p["body"].lower():
            why_bits.append(f"already mentions \"{target['tool_id'].replace('-', ' ')}\" in prose")
        candidates.append((score, url, p, "; ".join(why_bits) or "topic affinity"))
    candidates.sort(key=lambda x: (-x[0], x[1]))
    return candidates[:k]

# ---------- 7. Render report ----------
def fmt_url(u):
    return f"`{u}`"

orphans = [u for u in pages if not incoming[u]]
under_linked = [u for u in pages if len(outgoing_unique[u]) < 3]

# Stable orderings
all_pages = sorted(pages.keys())
orphans.sort()
under_linked.sort()

lines = []
lines.append("# Internal-linking audit")
lines.append("")
lines.append(f"_Generated: 2026-05-18 by `.kiro/scripts/audit_internal_links.py`._")
lines.append("")
lines.append("## Scope")
lines.append("")
lines.append("- Sources scanned: `content/blog/**/*.mdx`, `src/routes/tools/*.tsx`")
lines.append(f"- Pages discovered: **{len(pages)}** ({sum(1 for p in pages.values() if p['kind']=='blog')} blog, {sum(1 for p in pages.values() if p['kind']=='tool')} tool stubs)")
lines.append(f"- Canonical tool ids loaded from `js/tools-data.js`: **{len(TOOL_IDS)}**")
lines.append("")
lines.append("## Methodology")
lines.append("")
lines.append("Internal links count toward the graph when they resolve to a page that exists in this repo:")
lines.append("")
lines.append("- `[text](/blog/<slug>)` resolves to a blog `.mdx` file with that slug.")
lines.append("- `[text](/tools/<slug>)` resolves to a tool stub `.tsx` with that filename.")
lines.append("- `[text](/index.html#/tool/<id>)` resolves to the tool stub whose `meta.toolId === <id>`. If `<id>` is in `js/tools-data.js` but no static stub exists yet, the link is recorded as `spa-only` (valid but not a static destination, so it does not count toward incoming).")
lines.append("")
lines.append("Out-degree is counted by **unique resolved destinations** per page, not raw link count.")
lines.append("")
lines.append("## Summary")
lines.append("")
lines.append(f"| Metric | Count |")
lines.append(f"|---|---:|")
lines.append(f"| Pages | {len(pages)} |")
lines.append(f"| Internal edges (resolved, ok) | {sum(1 for src in edges for _,r,s in edges[src] if s=='ok')} |")
lines.append(f"| Edges to SPA-only destinations | {sum(1 for src in edges for _,_,s in edges[src] if s=='spa-only')} |")
lines.append(f"| Broken internal links | {len(broken)} |")
lines.append(f"| Orphan pages (0 incoming) | {len(orphans)} |")
lines.append(f"| Pages with <3 unique outgoing | {len(under_linked)} |")
lines.append("")

# ----- Page table -----
lines.append("## All pages")
lines.append("")
lines.append("| Page | Kind | In | Out (unique) | Title |")
lines.append("|---|---|---:|---:|---|")
for u in all_pages:
    p = pages[u]
    lines.append(f"| {fmt_url(u)} | {p['kind']} | {len(incoming[u])} | {len(outgoing_unique[u])} | {p['title']} |")
lines.append("")

# ----- Orphans + suggestions -----
lines.append("## Orphan pages (0 incoming internal links)")
lines.append("")
if not orphans:
    lines.append("_None._")
else:
    lines.append(f"{len(orphans)} pages have no other page linking to them.")
    lines.append("")
    lines.append("> **Note on the tool stubs.** All 10 stubs under `src/routes/tools/` are orphans by design today: the blog articles link into the SPA via `/index.html#/tool/<id>` rather than the static `/tools/<slug>` URL, because the static-page layer is not yet wired into routing (see `.kiro/specs/content-pipeline/`). Once the migration lands, the suggested edges below should be applied so the static pages inherit link equity from the blog content.")
    lines.append("")
    for u in orphans:
        p = pages[u]
        lines.append(f"### {fmt_url(u)}  _(`{p['file']}`)_")
        lines.append("")
        lines.append(f"- Title: {p['title']}")
        lines.append(f"- Keyword: `{p.get('keyword','')}`")
        lines.append(f"- Kind: {p['kind']}" + (f", toolId `{p['tool_id']}`" if p.get('tool_id') else ""))
        lines.append("")
        sugg = suggest_links_for(u, 3)
        if not sugg:
            lines.append("_No clear linking opportunities found from current pages._")
        else:
            lines.append("**Suggested incoming links (3):**")
            lines.append("")
            for score, src_url, src_p, why in sugg:
                anchor_hint = p.get("keyword") or p.get("title", "").split(" — ")[0]
                anchor = f'[{anchor_hint}]({u})' if u.startswith("/blog/") else f'[{p.get("title","").split(" — ")[0]}]({u})'
                lines.append(f"- From {fmt_url(src_url)} (`{src_p['file']}`)  ")
                lines.append(f"  - **Anchor to insert:** {anchor}")
                lines.append(f"  - **Why:** {why}  (score {score})")
            lines.append("")

# ----- Under-linked -----
lines.append("## Pages with fewer than 3 unique outgoing internal links")
lines.append("")
if not under_linked:
    lines.append("_None._")
else:
    lines.append("| Page | Out (unique) | Resolved destinations |")
    lines.append("|---|---:|---|")
    for u in under_linked:
        dests = sorted(outgoing_unique[u])
        lines.append(f"| {fmt_url(u)} | {len(dests)} | {', '.join(fmt_url(d) for d in dests) or '_(none)_'} |")
    lines.append("")
    lines.append("> Tool stubs all currently link only to their own SPA `appUrl`; they predate the static-page network. The `Optimize Article` hook (or a future `Optimize Tool Stub`) should fill these in once the static layer exists.")
    lines.append("")

# ----- Broken -----
lines.append("## Broken internal links")
lines.append("")
if not broken:
    lines.append("_None found._")
else:
    lines.append("| From | Target | Reason |")
    lines.append("|---|---|---|")
    for b in broken:
        lines.append(f"| {fmt_url(b['from'])} (`{b['from_file']}`) | `{b['target']}` | {b['reason']} |")
    lines.append("")

# ----- Edge listing for debug -----
lines.append("## Resolved edge list")
lines.append("")
lines.append("<details><summary>Show all ok edges</summary>")
lines.append("")
lines.append("| From | To |")
lines.append("|---|---|")
ok_edges = []
for src in sorted(edges):
    seen = set()
    for raw, resolved, status in edges[src]:
        if status == "ok" and resolved and resolved not in seen:
            ok_edges.append((src, resolved))
            seen.add(resolved)
for s, t in sorted(set(ok_edges)):
    lines.append(f"| {fmt_url(s)} | {fmt_url(t)} |")
lines.append("")
lines.append("</details>")
lines.append("")

# ----- SPA-only outgoing summary -----
spa_only_counts = defaultdict(int)
for src in edges:
    for raw, _, status in edges[src]:
        if status == "spa-only":
            spa_only_counts[raw] += 1
lines.append("## SPA-only destinations referenced (no static page yet)")
lines.append("")
if not spa_only_counts:
    lines.append("_None._")
else:
    lines.append("These links resolve in the SPA but have no static `/tools/<slug>` counterpart yet. Each is a candidate to promote into a stub under `src/routes/tools/`.")
    lines.append("")
    lines.append("| SPA URL | Times referenced |")
    lines.append("|---|---:|")
    for u, c in sorted(spa_only_counts.items(), key=lambda x: (-x[1], x[0])):
        lines.append(f"| `{u}` | {c} |")
    lines.append("")

# Write report
report_dir = os.path.join(ROOT, "reports")
os.makedirs(report_dir, exist_ok=True)
report_path = os.path.join(report_dir, "internal-linking-audit.md")
with open(report_path, "w", encoding="utf-8") as f:
    f.write("\n".join(lines) + "\n")

# Also print a short console summary
print(f"Pages: {len(pages)} | Edges (ok): {sum(1 for s in edges for _,r,st in edges[s] if st=='ok')} | "
      f"SPA-only: {sum(1 for s in edges for _,_,st in edges[s] if st=='spa-only')} | "
      f"Broken: {len(broken)} | Orphans: {len(orphans)} | Under-linked: {len(under_linked)}")
print(f"Wrote {os.path.relpath(report_path, ROOT)}")
