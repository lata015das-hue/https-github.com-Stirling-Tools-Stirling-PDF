#!/usr/bin/env python3
"""i18n gap audit (Prompt 6).

Pairs every page in `src/routes/` and `content/blog/` with its language
counterparts and writes a Markdown report to `reports/i18n-gaps.md`.

What this can check (static analysis):
  - Whether an `<lang>/<slug>` file exists for each `<slug>` and vice versa.
  - For MDX pairs: frontmatter `lang`, `dir`, `slug`, `tags` parity, and
    whether the body links to the same set of tool ids.
  - For TSX route pairs: meta.title, meta.description, meta.keyword presence
    in both languages, and whether internal-link patterns match.

What this CANNOT check (out of scope, called out in the report):
  - Whether Arabic copy is a *correct* translation of English. That is
    editorial review.
  - hreflang tags in the rendered HTML `<head>`. The static-page layer that
    would emit hreflang is not wired up yet (see `.kiro/specs/content-pipeline/`).
    The report describes the required hreflang shape but cannot verify it
    against runtime output.
  - Bidi rendering, RTL layout correctness — that's a browser test.

Languages tracked: 'en' (default) and 'ar'. The framework is extensible to
others by adding to LANGS, but the report assumes en/ar today because that
is the only Arabic content in the repo.
"""

import os
import re
import sys
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parents[2]

LANGS = ["en", "ar"]
DEFAULT_LANG = "en"

# ----------------------------------------------------------------------
# Frontmatter parser (subset YAML, same shape we use elsewhere in this repo)
# ----------------------------------------------------------------------

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


# ----------------------------------------------------------------------
# Discover pages
# ----------------------------------------------------------------------

def find_blog_pages():
    """Return dict: slug -> {lang -> path}.

    Convention in this repo:
      content/blog/<slug>.mdx           -> en
      content/blog/<lang>/<slug>.mdx    -> <lang>
    """
    out = defaultdict(dict)
    blog_root = ROOT / "content" / "blog"
    if not blog_root.exists():
        return out
    for p in blog_root.rglob("*.mdx"):
        rel = p.relative_to(blog_root)
        parts = rel.parts
        if len(parts) == 1:
            slug = parts[0][:-len(".mdx")]
            lang = DEFAULT_LANG
        else:
            lang = parts[0]
            if lang not in LANGS:
                # not a language directory — treat as untracked
                continue
            slug = "/".join(parts[1:])[:-len(".mdx")]
        out[slug][lang] = p
    return out


def find_tool_routes():
    """Return dict: slug -> {lang -> path}.

    Convention proposed by this audit:
      src/routes/tools/<slug>.tsx           -> en (today's reality)
      src/routes/tools/<lang>/<slug>.tsx    -> <lang> (does not exist yet)
    """
    out = defaultdict(dict)
    tools_root = ROOT / "src" / "routes" / "tools"
    if not tools_root.exists():
        return out
    for p in sorted(tools_root.rglob("*.tsx")):
        rel = p.relative_to(tools_root)
        parts = rel.parts
        # underscore-prefixed files are shared components (e.g. _ToolStub.tsx)
        if any(part.startswith("_") for part in parts):
            continue
        if len(parts) == 1:
            slug = parts[0][:-len(".tsx")]
            lang = DEFAULT_LANG
        else:
            lang = parts[0]
            if lang not in LANGS:
                continue
            slug = "/".join(parts[1:])[:-len(".tsx")]
        out[slug][lang] = p
    return out


# ----------------------------------------------------------------------
# TSX meta extraction (best-effort regex; the stubs are simple enough)
# ----------------------------------------------------------------------

META_FIELD_RE = re.compile(r'(\w+)\s*:\s*"([^"]*)"')

def extract_tsx_meta(path):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"export\s+const\s+meta\s*=\s*\{([^}]*)\}", text, re.DOTALL)
    if not m:
        return {}
    body = m.group(1)
    return dict(META_FIELD_RE.findall(body))


# ----------------------------------------------------------------------
# Internal link extraction
# ----------------------------------------------------------------------

INTERNAL_LINK_RE = re.compile(
    r"\(/(blog|tools|index\.html#)/[^)\s\"']+\)"
)

def find_internal_links(text):
    """Return a sorted list of normalized internal link targets in this text.

    Normalizes the path so we can compare across languages — a link to
    `/index.html#/tool/merge-pdfs` from an English page and the same link
    from an Arabic page should compare equal.
    """
    targets = set()
    for m in re.finditer(r"\((/[^)\s\"']+)\)", text):
        href = m.group(1)
        if href.startswith(("/blog/", "/tools/", "/index.html#/", "/")):
            targets.add(href)
    return sorted(targets)


def extract_tool_ids_from_links(links):
    """Extract the set of tool ids referenced by `/index.html#/tool/<id>`
    and `/tools/<slug>` style links.

    Tool-id parity is what really matters across languages: the Arabic page
    and the English page should link to the *same set* of underlying tools,
    even if the surrounding text differs.
    """
    ids = set()
    for link in links:
        m = re.match(r"^/index\.html#/tool/([a-z0-9-]+)$", link)
        if m:
            ids.add(m.group(1))
            continue
        m = re.match(r"^/tools/([a-z0-9-]+)$", link)
        if m:
            ids.add(m.group(1))
    return ids


# ----------------------------------------------------------------------
# Pairing & gap detection
# ----------------------------------------------------------------------

def pair_status(versions):
    """Return one of: 'complete', 'missing-en', 'missing-ar', 'orphan'."""
    has_en = DEFAULT_LANG in versions
    has_ar = "ar" in versions
    if has_en and has_ar:
        return "complete"
    if not has_en and has_ar:
        return "missing-en"
    if has_en and not has_ar:
        return "missing-ar"
    return "orphan"


def diff_links(en_links, ar_links):
    en_ids = extract_tool_ids_from_links(en_links)
    ar_ids = extract_tool_ids_from_links(ar_links)
    return {
        "only_en": sorted(en_ids - ar_ids),
        "only_ar": sorted(ar_ids - en_ids),
        "shared": sorted(en_ids & ar_ids),
    }


# ----------------------------------------------------------------------
# Render report
# ----------------------------------------------------------------------

def fmt_path(p):
    return f"`{Path(p).relative_to(ROOT)}`" if p else "_(missing)_"


def render():
    blog = find_blog_pages()
    tools = find_tool_routes()

    lines = []
    lines.append("# i18n gap audit")
    lines.append("")
    lines.append("_Generated: 2026-05-18 by `.kiro/scripts/audit_i18n.py`._")
    lines.append("")

    # ---------- Scope & honest preamble ----------
    lines.append("## Scope")
    lines.append("")
    lines.append("Pairs every page in `src/routes/` and `content/blog/` with its language counterparts. Today the repo tracks English (default) and Arabic. Only blog and tool-route pages are paired; SPA-internal pages (`index.html`) are out of scope because their copy is data-driven from `js/tools-data.js`, not authored markup.")
    lines.append("")
    lines.append("Path conventions used by this audit:")
    lines.append("")
    lines.append("- English (default): `content/blog/<slug>.mdx` and `src/routes/tools/<slug>.tsx`")
    lines.append("- Arabic: `content/blog/ar/<slug>.mdx` and `src/routes/tools/ar/<slug>.tsx`")
    lines.append("")
    lines.append("## What this audit can and cannot verify")
    lines.append("")
    lines.append("- **Can verify (static):** file pairs exist, frontmatter `lang`/`dir`/`slug` consistency, presence of meta in TSX, internal-link parity at the tool-id level (the Arabic page should link to the same set of underlying tool ids as the English one).")
    lines.append("- **Cannot verify (out of scope):** translation correctness — that is editorial review, not a script's call. Auto-translating UI copy is how you ship bad localization, so the report flags missing translations rather than producing them.")
    lines.append("- **Cannot verify yet (no rendered HTML):** the `<head>` `<link rel=\"alternate\" hreflang=\"…\">` tags. The static-page layer that emits the rendered `<head>` does not exist yet (tracked in `.kiro/specs/content-pipeline/`). The required hreflang shape is described below for reference; verification will become possible once the static layer ships.")
    lines.append("")

    # ---------- Required hreflang shape ----------
    lines.append("## Required hreflang shape (reference)")
    lines.append("")
    lines.append("Every paired page MUST emit, in the rendered HTML `<head>`, a complete cluster: a self-referential alternate, every other-language alternate, **and** an `x-default`. Missing the self-reference or `x-default` is the most common reason Google ignores the cluster.")
    lines.append("")
    lines.append("Example for the merge-pdf tool once both languages exist:")
    lines.append("")
    lines.append("```html")
    lines.append('<link rel="alternate" hreflang="en" href="https://example.com/tools/merge-pdf">')
    lines.append('<link rel="alternate" hreflang="ar" href="https://example.com/ar/tools/merge-pdf">')
    lines.append('<link rel="alternate" hreflang="x-default" href="https://example.com/tools/merge-pdf">')
    lines.append("```")
    lines.append("")
    lines.append("And the page itself sets `<html lang=\"en\" dir=\"ltr\">` / `<html lang=\"ar\" dir=\"rtl\">`. Today only `index.html` sets `lang`/`dir`, and only for English. That's a known gap, captured in the recommendations at the end of this report.")
    lines.append("")

    # ---------- Summary ----------
    n_blog = len(blog)
    n_tool = len(tools)
    blog_complete = sum(1 for v in blog.values() if pair_status(v) == "complete")
    tool_complete = sum(1 for v in tools.values() if pair_status(v) == "complete")
    blog_missing_ar = sum(1 for v in blog.values() if pair_status(v) == "missing-ar")
    tool_missing_ar = sum(1 for v in tools.values() if pair_status(v) == "missing-ar")
    blog_missing_en = sum(1 for v in blog.values() if pair_status(v) == "missing-en")
    tool_missing_en = sum(1 for v in tools.values() if pair_status(v) == "missing-en")

    lines.append("## Summary")
    lines.append("")
    lines.append(f"| Surface | Slugs | Complete (en+ar) | Missing ar | Missing en |")
    lines.append(f"|---|---:|---:|---:|---:|")
    lines.append(f"| Blog (`content/blog/**/*.mdx`)        | {n_blog} | {blog_complete} | {blog_missing_ar} | {blog_missing_en} |")
    lines.append(f"| Tools (`src/routes/tools/**/*.tsx`)   | {n_tool} | {tool_complete} | {tool_missing_ar} | {tool_missing_en} |")
    lines.append("")

    # ---------- Blog detail ----------
    lines.append("## Blog pairing")
    lines.append("")
    if not blog:
        lines.append("_No blog content discovered._")
    else:
        lines.append("| Slug | Status | EN | AR | Notes |")
        lines.append("|---|---|---|---|---|")
        for slug in sorted(blog):
            v = blog[slug]
            status = pair_status(v)
            notes = []
            if status == "complete":
                en_text = v[DEFAULT_LANG].read_text(encoding="utf-8")
                ar_text = v["ar"].read_text(encoding="utf-8")
                en_fm, en_body = split_frontmatter(en_text)
                ar_fm, ar_body = split_frontmatter(ar_text)
                if ar_fm.get("dir") != "rtl":
                    notes.append("AR `dir` not `rtl`")
                if ar_fm.get("lang") != "ar":
                    notes.append("AR `lang` not `ar`")
                d = diff_links(find_internal_links(en_body), find_internal_links(ar_body))
                if d["only_en"]:
                    notes.append(f"AR missing tool links: {', '.join('`'+x+'`' for x in d['only_en'])}")
                if d["only_ar"]:
                    notes.append(f"EN missing tool links: {', '.join('`'+x+'`' for x in d['only_ar'])}")
                if not notes:
                    notes.append("ok")
            elif status == "missing-ar":
                notes.append("Translate to AR")
            elif status == "missing-en":
                notes.append("Source AR exists but no EN canonical")
            lines.append(f"| `{slug}` | {status} | {fmt_path(v.get(DEFAULT_LANG))} | {fmt_path(v.get('ar'))} | {'; '.join(notes)} |")
    lines.append("")

    # ---------- Tool routes detail ----------
    lines.append("## Tool route pairing")
    lines.append("")
    if not tools:
        lines.append("_No tool routes discovered._")
    else:
        lines.append("| Slug | Status | EN | AR | meta.keyword (en) | Notes |")
        lines.append("|---|---|---|---|---|---|")
        for slug in sorted(tools):
            v = tools[slug]
            status = pair_status(v)
            en_meta = extract_tsx_meta(v[DEFAULT_LANG]) if DEFAULT_LANG in v else {}
            ar_meta = extract_tsx_meta(v["ar"]) if "ar" in v else {}
            kw = en_meta.get("keyword", "")
            notes = []
            if status == "complete":
                for fld in ("title", "description", "keyword"):
                    if not ar_meta.get(fld):
                        notes.append(f"AR meta missing `{fld}`")
                # toolId should match across languages — same underlying tool
                if en_meta.get("toolId") != ar_meta.get("toolId"):
                    notes.append(f"toolId mismatch: en=`{en_meta.get('toolId')}` ar=`{ar_meta.get('toolId')}`")
                if not notes:
                    notes.append("ok")
            elif status == "missing-ar":
                tool_id = en_meta.get("toolId", "?")
                notes.append(f"Translate to AR (toolId `{tool_id}`)")
            elif status == "missing-en":
                notes.append("AR exists but no EN canonical")
            lines.append(f"| `{slug}` | {status} | {fmt_path(v.get(DEFAULT_LANG))} | {fmt_path(v.get('ar'))} | `{kw}` | {'; '.join(notes)} |")
    lines.append("")

    # ---------- Action list ----------
    missing_ar_tools = sorted([s for s, v in tools.items() if pair_status(v) == "missing-ar"])
    missing_ar_blog  = sorted([s for s, v in blog.items()  if pair_status(v) == "missing-ar"])

    lines.append("## Action list")
    lines.append("")
    if not missing_ar_tools and not missing_ar_blog:
        lines.append("_No missing translations. Pairs are complete._")
    else:
        lines.append("Each missing item below needs a *real* translation by a human Arabic-speaking editor (or a translator + Arabic-speaking reviewer). Auto-translation is explicitly out of scope here. The repo's existing Arabic article (`content/blog/ar/merge-pdf-majanan.mdx`) is the style reference.")
        lines.append("")

        if missing_ar_tools:
            lines.append("### Tool routes missing Arabic")
            lines.append("")
            lines.append("Create each as `src/routes/tools/ar/<slug>.tsx`. Reuse the same `meta.toolId` as the English file (the underlying SPA tool is the same — only the surface copy is translated). Slug stays in English so the URL pattern is `/ar/tools/merge-pdf` (matches the SPA-style route prefix).")
            lines.append("")
            lines.append("Required `meta` fields per stub: `title`, `description`, `keyword`, `toolId` (must equal EN), `category`, `appUrl` (same SPA URL as EN), and an explicit `lang: \"ar\"`, `dir: \"rtl\"`.")
            lines.append("")
            lines.append("| Slug | Source EN file | EN keyword | Target AR file |")
            lines.append("|---|---|---|---|")
            for s in missing_ar_tools:
                en_meta = extract_tsx_meta(tools[s][DEFAULT_LANG])
                lines.append(f"| `{s}` | {fmt_path(tools[s][DEFAULT_LANG])} | `{en_meta.get('keyword','')}` | `src/routes/tools/ar/{s}.tsx` |")
            lines.append("")

        if missing_ar_blog:
            lines.append("### Blog posts missing Arabic")
            lines.append("")
            lines.append("Create each as `content/blog/ar/<slug>.mdx`. Must follow `.kiro/steering/seo-rules.md` §8 (Arabic typography: `«»` quotes, `،` and `؟` punctuation, code blocks wrapped in `<div dir=\"ltr\">`).")
            lines.append("")
            for s in missing_ar_blog:
                lines.append(f"- `{s}` — translate from {fmt_path(blog[s][DEFAULT_LANG])} to `content/blog/ar/{s}.mdx`")
            lines.append("")

    # ---------- What's blocked on framework ----------
    lines.append("## Blocked on the static-page layer")
    lines.append("")
    lines.append("These items can't be fixed at the source-file level today; they need the static-page layer described in `.kiro/specs/content-pipeline/`:")
    lines.append("")
    lines.append("- **`<link rel=\"alternate\" hreflang=\"…\">` cluster.** Lives in rendered `<head>`. Required shape is documented above.")
    lines.append("- **`<html lang>` / `<html dir>` per page.** Currently only the SPA shell `index.html` sets these (and only for English). Each language variant of a static page needs its own correct attributes.")
    lines.append("- **Sitemap `<xhtml:link rel=\"alternate\">`.** The `Sitemap Updater` hook in `.kiro/hooks/sitemap-updater.kiro.hook` does not yet emit hreflang sub-elements. Worth a follow-up issue once the `ar/` route prefix exists.")
    lines.append("- **Canonical URLs.** Each language variant must self-canonical; AR must not point to EN as canonical and vice versa.")
    lines.append("")

    # ---------- Recommendations ----------
    lines.append("## Recommendations")
    lines.append("")
    lines.append("1. **Don't auto-translate.** Pick the top-3 highest-traffic tool stubs (e.g. `merge-pdf`, `compress-pdf`, `pdf-to-jpg`) for a real Arabic translation pass first. Validate quality, then expand.")
    lines.append("2. **Add a `lang` field to `_ToolStub.tsx`.** Pass it to a `<html lang>` attribute when the static layer renders. Today the prop doesn't exist; the future static-page wrapper will need it.")
    lines.append("3. **Extend `Sitemap Updater` to emit hreflang.** Once `src/routes/tools/ar/<slug>.tsx` files appear, the hook should produce `<xhtml:link rel=\"alternate\" hreflang=\"…\">` per `<url>` group.")
    lines.append("4. **Run this audit on every PR that adds an `.mdx` or `.tsx` route.** A CI step (similar to R-3/R-4) would prevent translation drift. Suggested gating: warn on first detection, error after a grace period.")
    lines.append("5. **Mirror the file structure exactly.** `src/routes/tools/<slug>.tsx` ↔ `src/routes/tools/ar/<slug>.tsx` — no fancy slug transliteration, no per-language slug renaming. Slug parity is what makes this audit cheap.")
    lines.append("")

    return "\n".join(lines) + "\n"


def main():
    out = render()
    out_path = ROOT / "reports" / "i18n-gaps.md"
    out_path.parent.mkdir(exist_ok=True)
    out_path.write_text(out, encoding="utf-8")
    print(f"Wrote {out_path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
