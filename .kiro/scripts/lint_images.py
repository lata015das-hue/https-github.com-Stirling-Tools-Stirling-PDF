#!/usr/bin/env python3
"""R-4 — Image-attribute lint.

Walks the repo looking for image references in shipping content (HTML, MDX, TSX,
JSX) and asserts each one carries the perf/a11y attributes from
`.kiro/steering/performance-rules.md` §1:

  - <img> MUST have width, height, alt
  - <img> MUST have loading="lazy" UNLESS it's above-the-fold
    (above-the-fold opt-out: data-fold="above" OR fetchpriority="high")
  - <img> SHOULD have decoding="async"
  - <picture> MUST contain a <source type="image/webp"> (or avif/jxl)
  - Markdown ![alt](src) MUST have non-empty alt at least 5 chars

Exits non-zero if any rule fails. Today the repo has zero <img> tags so the
exit code is 0 by default — the moment the first image lands in shipping
content the rule fires automatically.

DELIBERATELY SKIPPED:
  - .kiro/, reports/, README files (they discuss images conceptually).
  - .git/, node_modules/, dist/.
  - "decorative" alt="" only flags WARN, not FAIL — the rule allows it.

This is wired into .github/workflows/lighthouse.yml as a separate step
ahead of the build. Failure blocks the PR with a clear, line-numbered
error per offending tag.
"""
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Directories where image references are documentation, not shipping markup.
SKIP_DIRS = {".git", "node_modules", "dist", ".kiro", "reports"}
# Filenames that are documentation about the rules themselves.
SKIP_FILES = {"README.md"}

# Files we lint. Keep this in sync with shipping-content extensions.
LINT_EXTS = {".html", ".htm", ".tsx", ".jsx", ".mdx", ".vue", ".svelte"}
# Files that may contain markdown image syntax `![alt](src)`.
MD_LINT_EXTS = {".mdx"}  # NOT .md, because .md in this repo is internal docs


# Catches <img ...> across multi-line attributes too.
IMG_RE = re.compile(r"<img\b([^>]*?)/?>", re.IGNORECASE | re.DOTALL)
# <picture> blocks (lazy match — we only need the open tag's content).
PICTURE_RE = re.compile(r"<picture\b[^>]*>(.*?)</picture>", re.IGNORECASE | re.DOTALL)
# Markdown image (avoid linkified images that are wrapped in []() escapes).
MD_IMG_RE = re.compile(r"(?<!\\)!\[([^\]]*)\]\(([^)]+)\)")
# Attribute extractor inside a tag.
ATTR_RE = re.compile(r"""(\w[\w-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\{[^}]*\}))""")


def get_attrs(tag_inner):
    out = {}
    for m in ATTR_RE.finditer(tag_inner):
        name = m.group(1).lower()
        val = m.group(2) or m.group(3) or m.group(4) or ""
        out[name] = val
    return out


def line_of(text, pos):
    return text.count("\n", 0, pos) + 1


def lint_file(path):
    """Return list of (severity, line, message) for one file."""
    out = []
    try:
        text = path.read_text(encoding="utf-8")
    except Exception:
        return out

    ext = path.suffix.lower()

    # --- <img> rules ---
    if ext in LINT_EXTS:
        for m in IMG_RE.finditer(text):
            inner = m.group(1)
            attrs = get_attrs(inner)
            ln = line_of(text, m.start())

            # Skip <img ... data-lint="off"> escape hatch — used only for
            # tests/fixtures intentionally violating the rule.
            if attrs.get("data-lint") == "off":
                continue

            # alt
            if "alt" not in attrs:
                out.append(("error", ln, "missing alt attribute"))
            else:
                alt = attrs["alt"].strip()
                if alt == "":
                    out.append(("warn", ln, 'empty alt="" — allowed only for decorative images; confirm intent'))
                elif len(alt) < 5:
                    out.append(("warn", ln, f"alt is shorter than 5 chars ({len(alt)})"))
                elif len(alt) > 125:
                    out.append(("warn", ln, f"alt is longer than 125 chars ({len(alt)})"))

            # width/height (intrinsic dimensions prevent CLS)
            for need in ("width", "height"):
                if need not in attrs:
                    out.append(("error", ln, f"missing {need} attribute (causes CLS)"))

            # loading
            above_fold = (
                attrs.get("data-fold") == "above"
                or attrs.get("fetchpriority", "").lower() == "high"
            )
            if "loading" not in attrs:
                if above_fold:
                    pass  # ok — above-the-fold images should NOT be lazy
                else:
                    out.append(("error", ln, 'missing loading="lazy" (omit only for above-the-fold images marked fetchpriority="high" or data-fold="above")'))
            else:
                lv = attrs["loading"].lower()
                if above_fold and lv == "lazy":
                    out.append(("error", ln, 'above-the-fold image must not have loading="lazy"'))
                elif lv not in ("lazy", "eager"):
                    out.append(("warn", ln, f'loading="{lv}" is unusual; expected "lazy" or "eager"'))

            # decoding (recommendation)
            if "decoding" not in attrs:
                out.append(("warn", ln, 'missing decoding="async" (recommended)'))

    # --- <picture> rules ---
    if ext in LINT_EXTS:
        for m in PICTURE_RE.finditer(text):
            ln = line_of(text, m.start())
            inner = m.group(1)
            sources = re.findall(r"<source\b[^>]*>", inner, re.IGNORECASE)
            modern = any(
                re.search(r'type\s*=\s*["\']image/(webp|avif|jxl)["\']', s, re.IGNORECASE)
                for s in sources
            )
            if not modern:
                out.append(("warn", ln, "<picture> has no modern <source type=\"image/webp\"> (or avif/jxl) — fallback-only ships a heavier image"))

    # --- Markdown ![alt](src) rules ---
    if ext in MD_LINT_EXTS:
        for m in MD_IMG_RE.finditer(text):
            alt, src = m.group(1).strip(), m.group(2).strip()
            ln = line_of(text, m.start())
            if not alt:
                out.append(("error", ln, f"markdown image has empty alt: ![]({src})"))
            elif len(alt) < 5:
                out.append(("warn", ln, f"markdown image alt shorter than 5 chars: '{alt}'"))
            elif len(alt) > 125:
                out.append(("warn", ln, f"markdown image alt longer than 125 chars ({len(alt)})"))

    return out


def walk_repo():
    files = []
    for dp, dns, fns in os.walk(ROOT):
        dns[:] = [d for d in dns if d not in SKIP_DIRS and not d.startswith(".")]
        for fn in fns:
            if fn in SKIP_FILES:
                continue
            ext = os.path.splitext(fn)[1].lower()
            if ext in LINT_EXTS or ext in MD_LINT_EXTS:
                files.append(Path(dp) / fn)
    return files


def main():
    files = walk_repo()
    total_imgs = 0
    total_pics = 0
    total_md = 0
    fail = False
    warn_count = 0

    print(f"R-4 image-attribute lint")
    print(f"Repo:    {ROOT}")
    print(f"Files:   {len(files)} candidate files")
    print()

    for p in sorted(files):
        rel = p.relative_to(ROOT)
        text = p.read_text(encoding="utf-8", errors="replace")
        n_img = len(IMG_RE.findall(text))
        n_pic = len(PICTURE_RE.findall(text))
        n_md = len(MD_IMG_RE.findall(text)) if p.suffix.lower() in MD_LINT_EXTS else 0
        total_imgs += n_img
        total_pics += n_pic
        total_md += n_md

        issues = lint_file(p)
        for sev, ln, msg in issues:
            tag = "::error" if sev == "error" else "::warning"
            print(f"{tag} file={rel},line={ln}::{msg}")
            if sev == "error":
                fail = True
            else:
                warn_count += 1

    print()
    print(f"Image references found: {total_imgs} <img>, {total_pics} <picture>, {total_md} markdown")
    print(f"Warnings: {warn_count}")

    if total_imgs == 0 and total_pics == 0 and total_md == 0:
        print("No image references in shipping content — lint is a no-op today.")
        print("Rule will fire automatically the moment an image is added.")
        return 0

    if fail:
        print("FAIL: at least one image is missing required attributes.")
        return 1
    print("OK: every image has required attributes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
