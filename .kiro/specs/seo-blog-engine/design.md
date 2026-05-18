# SEO Blog Engine — Design

## 1. Architecture

```
content/blog/<slug>.mdx          ─── source, frontmatter + body
content/blog/<lang>/<slug>.mdx   ─── localized variant
                │
                ▼
   MDX renderer (Astro / @mdx-js)
                │
                ▼
   Article layout (this spec)
                │
                ▼
   Static HTML at /blog/<slug>/  and /<lang>/blog/<slug>/
```

The article layout is *separate* from the tool-page layout. Some shared
primitives (header, footer, breadcrumb component, CTA button) are extracted
into a `_Layout.tsx` parent so both layouts compose them.

## 2. Article layout sections (FR-3 expanded)

Order:

1. Skip-to-content link
2. Header (shared with tool pages)
3. Breadcrumb: Home / Blog / Article
4. H1 (frontmatter `title`)
5. Article meta block (author, published date, updated date, reading time)
6. TOC (auto-generated for articles > 800 words; collapsed by default; from H2/H3)
7. MDX body
8. FAQ section (rendered from `<details>` inside the MDX body — not auto-extracted)
9. Author block (avatar, name, bio, link to other articles)
10. Related articles (2-4 by tag + keyword overlap)
11. Related tool CTA (1 tool, picked from frontmatter `keyword` mapping)
12. Footer

## 3. Frontmatter contract

```yaml
---
title: string                 # ≤ 60 chars, contains keyword
description: string           # 140-160 chars, contains keyword
slug: string                  # kebab-case, matches filename
keyword: string               # primary target keyword
tags: [string, ...]           # 2-5
lang: en | ar                 # default 'en'
dir: ltr | rtl                # default 'ltr'
date: YYYY-MM-DD              # publish date
updated: YYYY-MM-DD           # optional; > date
author: string                # human or "Stirling-PDF Team"
image: string                 # hero image path; optional
draft: boolean                # default true
published: boolean            # default false
---
```

Already enforced by `validate_articles.py` and `seo-rules.md`.

## 4. Schema selection (delegated)

The Schema Generator hook decides between Article / HowTo / FAQPage based on
content shape. The blog engine does not write JSON-LD — it just reserves the
`<script type="application/ld+json">` slot and trusts the hook.

## 5. Index pages

- `/blog/` — all articles, paginated 20 per page, sorted by `date` desc.
- `/blog/tag/<tag>/` — articles with that tag.
- `/<lang>/blog/` — language-specific index (Arabic).

Each index page is a separate route, also using the article layout's
header/footer but a different body component (a list, not an article).

## 6. Reading time

`Math.ceil(wordCount / 220)` minutes, rounded up. 220 wpm is a reasonable
median for technical content.

## 7. Open questions

- TOC: render server-side (more work) or client-side from a tiny script?
  Default: server-side, no client JS.
- Related articles: use the existing `audit_internal_links.py` scoring
  algorithm at build time, or compute at render time? Default: build time,
  cached as `data/related-articles.json`.
- Author bios: stored where? Default: `data/authors.json` keyed by
  `frontmatter.author`. Until that file exists, no author block renders.
