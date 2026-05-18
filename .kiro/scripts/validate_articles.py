#!/usr/bin/env python3
"""Inline SEO validator that mirrors the rules in .kiro/steering/seo-rules.md.
This is NOT a CI gate -- it's a one-off check used right after bulk article
generation. Reviewers and the `Optimize Article` hook are still authoritative."""
import os, re, json, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

tools_js = open(os.path.join(ROOT, "js/tools-data.js")).read()
TOOL_IDS = set(re.findall(r"id:\s*'([a-z0-9-]+)'", tools_js))

def split_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m: return {}, text
    fm_text, body = m.group(1), m.group(2)
    fm = {}
    for line in fm_text.splitlines():
        mm = re.match(r"^([a-zA-Z_]+):\s*(.*)$", line)
        if not mm: continue
        k, v = mm.group(1), mm.group(2).strip()
        if v.startswith('"') and v.endswith('"'): v = v[1:-1]
        elif v.startswith('[') and v.endswith(']'):
            v = [t.strip().strip('"') for t in v[1:-1].split(",") if t.strip()]
        elif v in ("true","false"): v = (v=="true")
        fm[k] = v
    return fm, body

def strip_for_prose(body):
    s = re.sub(r"```.*?```", "", body, flags=re.DOTALL)
    s = re.sub(r"`[^`\n]+`", "", s)            # inline code
    s = re.sub(r"\{/\*.*?\*/\}", "", s, flags=re.DOTALL)
    s = re.sub(r"<[^>]+>", "", s)
    return s

def count_words(text):
    return len(re.findall(r"\S+", text))

def count_keyword(text, kw):
    # Python's \b only respects ASCII word characters by default, so it never
    # matches around Arabic/CJK. Fall back to plain case-insensitive substring
    # matching when the keyword has any non-ASCII char.
    if any(ord(c) > 127 for c in kw):
        return len(re.findall(re.escape(kw), text, re.IGNORECASE))
    return len(re.findall(r"\b" + re.escape(kw) + r"\b", text, re.IGNORECASE))

def syllables(word):
    word = re.sub(r"[^a-z]", "", word.lower())
    if not word: return 0
    vowels = "aeiouy"; count = 0; prev = False
    for ch in word:
        is_v = ch in vowels
        if is_v and not prev: count += 1
        prev = is_v
    if word.endswith("e") and count > 1: count -= 1
    return max(1, count)

def flesch(prose):
    sentences = [s for s in re.split(r"[.!?]+", prose) if s.strip()]
    words = re.findall(r"[A-Za-z][A-Za-z']*", prose)
    if not sentences or not words: return None
    syl = sum(syllables(w) for w in words)
    return round(206.835 - 1.015*(len(words)/len(sentences)) - 84.6*(syl/len(words)), 1)

def get_headings(body):
    return [(len(m.group(1)), m.group(2).strip()) for m in re.finditer(r"^(#{1,6})\s+(.*)$", body, re.MULTILINE)]

def first_n_words(prose, n):
    return " ".join(re.findall(r"\S+", prose)[:n])

def find_tool_links(body):
    paths = re.findall(r"\(/index\.html#/tool/([a-z0-9-]+)\)", body)
    paths += re.findall(r"\(/tools/([a-z0-9-]+)\)", body)
    return paths

def check(path):
    text = open(path, encoding="utf-8").read()
    fm, body = split_frontmatter(text)
    prose = strip_for_prose(body)
    issues = []; info = {}

    for f in ("title","description","slug","keyword","tags","lang","dir","author","draft","published"):
        if f not in fm: issues.append(f"frontmatter missing: {f}")

    title = fm.get("title",""); desc = fm.get("description","")
    slug  = fm.get("slug","");  kw   = fm.get("keyword","")
    lang  = fm.get("lang","en"); dirf = fm.get("dir","ltr")

    base = os.path.basename(path).replace(".mdx","")
    if slug and slug != base and not slug.endswith(base):
        issues.append(f"slug '{slug}' does not match filename '{base}'")
    if len(title) > 60: issues.append(f"title > 60 chars (len={len(title)})")
    if not (140 <= len(desc) <= 165): issues.append(f"description not 140-160 chars (len={len(desc)})")

    if kw:
        if kw.lower() not in title.lower(): issues.append("keyword missing from title")
        if kw.lower() not in desc.lower():  issues.append("keyword missing from description")
        if lang == "en" and kw.lower() not in slug.lower():
            # tolerate token-level match
            tokens = [t for t in re.split(r"\W+", kw.lower()) if t]
            slug_l = slug.lower()
            if not all(t in slug_l for t in tokens if len(t) > 2):
                issues.append("keyword tokens missing from slug")

    hs = get_headings(body)
    h1s = [h for h in hs if h[0]==1]
    if len(h1s) != 1: issues.append(f"expected exactly 1 H1, got {len(h1s)}")
    if h1s and kw and kw.lower() not in h1s[0][1].lower():
        issues.append("keyword not in H1")
    prev = 0
    for lvl,_ in hs:
        if prev and lvl > prev+1:
            issues.append(f"heading level skip: H{prev} -> H{lvl}"); break
        prev = lvl

    faq_idx = None
    for i,(lvl,t) in enumerate(hs):
        if lvl==2 and re.search(r"frequently asked|faq|أسئلة شائعة|الأسئلة", t, re.I):
            faq_idx = i; break
    qs = 0
    if faq_idx is not None:
        for lvl,t in hs[faq_idx+1:]:
            if lvl==2: break
            if lvl==3: qs += 1
    if qs < 5: issues.append(f"FAQ has only {qs} Q/A (need >= 5)")

    wc = count_words(prose); info["words"] = wc
    if not (700 <= wc <= 1500): issues.append(f"word count {wc} outside 700-1500")

    if kw:
        kc = count_keyword(prose, kw)
        density = round(100*kc/wc, 2) if wc else 0
        info["keyword_count"] = kc; info["density"] = density
        if not (0.8 <= density <= 2.0):
            issues.append(f"density {density}% outside 0.8-2.0")
        if kw.lower() not in first_n_words(prose, 120).lower():
            issues.append("keyword not in first 100 words")
        if not any(lvl==2 and kw.lower() in t.lower() for lvl,t in hs):
            issues.append("keyword not in any H2")

    links = find_tool_links(body)
    info["tool_links"] = sorted(set(links))
    bad = [t for t in links if t not in TOOL_IDS]
    if bad: issues.append(f"unknown tool ids: {sorted(set(bad))}")
    if len(set(links)) < 3: issues.append(f"only {len(set(links))} unique tool links (need >= 3)")

    if lang == "en":
        score = flesch(prose); info["flesch"] = score
        if score is not None and score < 60:
            issues.append(f"Flesch {score} < 60")

    if lang == "ar":
        if dirf != "rtl": issues.append("ar article must have dir: rtl")
        if re.search(r'(?<!`)"[^"]+"', prose):
            issues.append("ar article uses straight double-quotes; use «»")
        if "," in prose and "،" not in prose:
            issues.append("ar article uses ASCII comma; use ،")
        code_blocks = list(re.finditer(r"```.*?```", body, re.DOTALL))
        for m in code_blocks:
            ctx = body[max(0,m.start()-200):m.start()]
            if 'dir="ltr"' not in ctx:
                issues.append("ar code block missing dir='ltr' wrapper"); break

    return info, issues

files = [
    "content/blog/how-to-merge-pdf-files-online-free.mdx",
    "content/blog/compress-pdf-without-losing-quality.mdx",
    "content/blog/make-scanned-pdf-searchable.mdx",
    "content/blog/remove-pdf-password-without-software.mdx",
    "content/blog/ar/merge-pdf-majanan.mdx",
]
out = {}
for f in files:
    info, issues = check(os.path.join(ROOT, f))
    out[f] = {"info": info, "issues": issues}

print(json.dumps(out, indent=2, ensure_ascii=False))
print(f"\nKnown tool ids: {len(TOOL_IDS)}")
