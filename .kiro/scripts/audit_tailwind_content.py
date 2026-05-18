#!/usr/bin/env python3
"""R-3 - Tailwind content-glob audit.

Confirms two things:
  1. Every file in the repo that contains `class="..."` or `className="..."`
     strings is covered by the `content` globs in tailwind.config.js. If a
     file with class strings lives OUTSIDE the globs, those classes will be
     purged from the production CSS and won't render. This is the failure
     mode tailwind.config.js's comment block warns against.
  2. A bounded estimate of the size of dist/tailwind.css before the real
     build runs in CI. The actual size is what Lighthouse measures (R-2's
     workflow asserts <= 50 KB stylesheet:size); this script's number is
     a sanity check that the order of magnitude is right.

The script is read-only. It returns:
   exit 0  if every class-bearing file is inside the globs
   exit 1  if any file is outside the globs (the failure CI should block on)
   exit 2  if tailwind.config.js can't be parsed

This script is wired into .github/workflows/lighthouse.yml so it runs on
every PR.
"""
import os
import re
import sys
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def load_content_globs():
    """Read the `content` array from tailwind.config.js using node."""
    cmd = ["node", "-e", "const c = require('./tailwind.config.js'); process.stdout.write(JSON.stringify(c.content));"]
    try:
        out = subprocess.check_output(cmd, cwd=ROOT, text=True, timeout=10)
    except Exception as e:
        print(f"::error::Could not parse tailwind.config.js: {e}", file=sys.stderr)
        sys.exit(2)
    return json.loads(out)


def globs_to_regexes(globs):
    """Turn each Tailwind content glob into a compiled regex.

    Tailwind globs are POSIX-ish: `**` matches any depth, `*` matches one
    path segment, `{a,b}` matches alternatives.
    """
    regexes = []
    for g in globs:
        clean = g[2:] if g.startswith("./") else g
        for alt in expand_braces(clean):
            pat = ""
            i = 0
            while i < len(alt):
                if alt[i:i+2] == "**":
                    pat += ".*"
                    i += 2
                    if i < len(alt) and alt[i] == "/":
                        i += 1
                elif alt[i] == "*":
                    pat += "[^/]*"
                    i += 1
                elif alt[i] == ".":
                    pat += r"\."
                    i += 1
                else:
                    pat += re.escape(alt[i])
                    i += 1
            regexes.append((alt, re.compile(f"^{pat}$")))
    return regexes


def expand_braces(s):
    """Minimal {a,b,c} expansion. Single non-nested braces only."""
    m = re.search(r"\{([^{}]+)\}", s)
    if not m:
        return [s]
    options = m.group(1).split(",")
    results = []
    for opt in options:
        results.extend(expand_braces(s[:m.start()] + opt + s[m.end():]))
    return results


def file_matches_globs(rel_path, regexes):
    rel_path = rel_path.replace(os.sep, "/")
    return any(rx.match(rel_path) for _, rx in regexes)


SKIP_DIRS = {".git", "node_modules", "dist", ".kiro", "reports", ".github"}
SKIP_FILES = {".gitignore", "package.json", "package-lock.json", "tailwind.config.js", "robots.txt", "sitemap.xml"}
TEXT_EXTS = {".html", ".htm", ".js", ".jsx", ".ts", ".tsx", ".mdx", ".md", ".css", ".vue", ".svelte"}


CLASS_RE = re.compile(r'class(?:Name)?\s*=\s*["\'`]([^"\'`]+)["\'`]')


def find_class_bearing_files():
    """Walk repo and return list of (rel_path, [class_strings])."""
    out = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and not d.startswith(".")]
        for fn in filenames:
            if fn in SKIP_FILES:
                continue
            ext = os.path.splitext(fn)[1].lower()
            if ext not in TEXT_EXTS:
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, ROOT).replace(os.sep, "/")
            try:
                text = open(full, encoding="utf-8").read()
            except Exception:
                continue
            classes = CLASS_RE.findall(text)
            if classes:
                out.append((rel, classes))
    return out


def estimate_css_size(class_files):
    """Bounded size estimate for dist/tailwind.css.

    NOT the real number. Tailwind v3 JIT generates roughly 60-150 bytes per
    unique class post-minify, plus ~10 KB of base/preflight. We produce a
    low/mid/high range so the reader can sanity-check the CI artifact.
    """
    tokens = set()
    for _, classes in class_files:
        for s in classes:
            for tok in s.split():
                if not tok or tok.startswith("${"):
                    continue
                tokens.add(tok)
    n = len(tokens)
    base = 10_000
    return {
        "unique_classes": n,
        "estimate_low_bytes":  base + n * 60,
        "estimate_mid_bytes":  base + n * 100,
        "estimate_high_bytes": base + n * 150,
    }


def main():
    globs = load_content_globs()
    regexes = globs_to_regexes(globs)
    class_files = find_class_bearing_files()

    inside, outside = [], []
    for rel, _ in class_files:
        if file_matches_globs(rel, regexes):
            inside.append(rel)
        else:
            outside.append(rel)

    size = estimate_css_size(class_files)
    budget = 50 * 1024  # matches resource-summary:stylesheet:size in .lighthouserc.json

    print("=" * 72)
    print("R-3 Tailwind content audit")
    print("=" * 72)
    print(f"Repo root:           {ROOT}")
    print(f"Content globs:       {globs}")
    print(f"Class-bearing files: {len(class_files)}")
    print(f"  inside globs:      {len(inside)}")
    print(f"  outside globs:     {len(outside)}  <-- must be 0")
    print()
    print(f"Unique class tokens: {size['unique_classes']}")
    print("dist/tailwind.css estimate (post-minify, before gzip):")
    print(f"  low  ~ {size['estimate_low_bytes']:>7,d} bytes")
    print(f"  mid  ~ {size['estimate_mid_bytes']:>7,d} bytes")
    print(f"  high ~ {size['estimate_high_bytes']:>7,d} bytes")
    print(f"Lighthouse stylesheet budget: {budget:,d} bytes (50 KB)")
    headroom = budget - size["estimate_high_bytes"]
    if headroom > 0:
        print(f"Headroom vs. budget (high estimate): {headroom:,d} bytes -> within budget")
    else:
        print(f"::warning::High estimate ({size['estimate_high_bytes']:,d}) exceeds Lighthouse budget ({budget:,d}). Real size may still be fine; this is an estimate.")
    print()

    if outside:
        print("FILES OUTSIDE CONTENT GLOBS (their classes will be purged from prod CSS):")
        for f in sorted(outside):
            print(f"  - {f}")
        print()
        print("::error::Tailwind content globs do not cover all class-bearing files.")
        print("Either move the file under an existing glob, or extend `content` in tailwind.config.js.")
        return 1

    print("OK: every class-bearing file is covered by tailwind.config.js `content`.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
