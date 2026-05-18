---
inclusion: fileMatch
fileMatchPattern: "content/**/*.mdx"
---

# SEO rules for MDX articles

These rules apply to every `*.mdx` file under `content/`. They are enforced by
the `Optimize Article` hook and by reviewers in PR. If a rule conflicts with
editorial sense, override it in the PR description and tag `@seo`.

## 1. Frontmatter (required fields)

```yaml
---
title: string                 # ≤ 60 chars, contains the target keyword
description: string           # 140–160 chars, contains the target keyword once
slug: string                  # kebab-case, matches filename without .mdx
keyword: string               # the single primary target keyword
tags: [string, ...]           # 2–5 tags, lowercase
lang: en | ar | ...           # BCP-47 language tag, default "en"
dir: ltr | rtl                # default "ltr"; set "rtl" for ar/he/fa
date: YYYY-MM-DD              # set by Mark Article Published hook
updated: YYYY-MM-DD           # optional
author: string                # human or "Stirling-PDF Team"
image: string                 # path to hero image, optional but recommended
draft: boolean                # default true; flip to false on publish
published: boolean            # default false; flip to true on publish
---
```

## 2. Structure
- Exactly one `# H1` and it must contain the target keyword.
- H2 cadence: an introduction (no heading), then 3–6 `## H2` sections.
- No level skips (H2 → H4 is a violation).
- A `## Frequently asked questions` section with **at least 5 Q/A** in this
  PAA-aligned order: what / how / cost / safety / compatibility.
- A short closing section (`## Wrap-up` or `## Next steps`) with one CTA.

## 3. Keyword density and placement
- Density target: **0.8% – 2.0%** (whole-word, case-insensitive).
- Required slots for the target keyword: H1, first 100 words, at least one H2,
  frontmatter `title`, frontmatter `description`, slug, hero image alt (if any).
- Never stuff. If applying suggestions would push density above 2.5%, drop the
  lowest-value insertion.

## 4. Internal linking
- Every article links to **at least 3 tool pages** that exist as ids in
  `js/tools-data.js`. Use the slug pattern already in use for the file
  (default: `/tools/<slug>` for static pages or `/index.html#/tool/<id>` for
  the SPA bridge).
- At least one inline link should appear in the first 200 words.
- Never invent tool ids.

## 5. Length and readability
- 700–1500 words for how-to / informational articles.
- Flesch Reading Ease ≥ 60 (English). Sentences average ≤ 22 words.
- Paragraphs ≤ 5 sentences. Use lists for any 3+ item enumeration.

## 6. Images
- Every `<img>` / `![]()` has descriptive alt 5–125 chars.
- Alt is specific (no "image", "picture", "screenshot", filename).
- Target keyword appears at most once across all alts on the page.

## 7. Honesty
- Do not fabricate statistics, citations, authors, dates, prices, or ratings.
- If a claim needs a source you do not have, drop the claim or mark `TODO(cite)`.
- Stirling-PDF is genuinely free and open-source. Any pricing schema must
  reflect that exactly: `price: "0", priceCurrency: "USD"`, no fake reviews.

## 8. Arabic / RTL articles
- Set `lang: ar` and `dir: rtl` in frontmatter.
- Use Arabic guillemets «…» for primary quotes (not "…" or "…").
- Prefer Western digits (0–9) inside technical names and code; Arabic-Indic
  (٠–٩) is acceptable in body prose. Pick one and stay consistent within an
  article.
- Use the Arabic comma `،` (U+060C) and Arabic question mark `؟` (U+061F).
- Wrap every fenced code block, file path, and shell command with
  `<div dir="ltr">…</div>` so technical strings stay left-to-right inside
  RTL prose.
- Tool/UI labels referenced from `js/tools-data.js` keep their English names;
  put a parenthetical Arabic gloss next to the first occurrence:
  `Merge PDFs (دمج ملفات PDF)`.
- Never bidi-mirror code. Never machine-translate code comments.

## 9. Drafts and publish
- New articles ship with `draft: true, published: false`.
- The `Mark Article Published` hook flips both flags and stamps `date` when
  the article is moved out of draft (today, only the `content/blog/` path
  triggers it).

## 10. What gets rejected in review
- Missing or empty FAQ section.
- Density < 0.5% or > 2.5%.
- Any tool link that points to an id not in `js/tools-data.js`.
- Any claim with a fabricated number, date, or author.
- Any Arabic article without `dir: rtl` or with code blocks that lack
  `dir="ltr"` wrappers.
