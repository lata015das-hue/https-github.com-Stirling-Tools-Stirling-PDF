# SEO Blog Engine — Requirements

## 1. Purpose

Turn `content/blog/**/*.mdx` into a published blog with on-page SEO that
ranks for long-tail and informational queries, and that links cleanly into
the tool pages where each article funnels readers to action.

## 2. Scope

### In scope

- MDX rendering pipeline.
- Article layout (separate from tool-page layout): hero, TOC, body, FAQ,
  author block, related-articles strip, related-tool CTA.
- Frontmatter contract enforcement (already documented in `seo-rules.md`).
- Internal-link insertion: every article links to ≥ 3 tool ids from
  `tools-data.js`.
- Schema slot for Article / HowTo / FAQPage (populated by Schema Generator
  hook).
- Pagination + category index pages for the blog.

### Out of scope

- Article authoring (editorial work, per `content-pipeline`).
- Voice / tone rules → `content-style.md`.
- Tool-page layout → `tool-pages-seo`.
- Crawlability / sitemap / hreflang → `technical-seo`.
- Comments, social sharing widgets, newsletter signup → out of scope until
  `lead-magnet-funnel` consumes this.

## 3. User stories

- As a **search visitor for "compress pdf without losing quality"**, I land on
  an article that answers the question in the first paragraph and links me
  to the tool that does the action.
- As an **editor**, I create a new article from `content/_templates/howto.mdx`
  and the engine produces a fully styled, indexable page with no per-article
  rendering boilerplate.
- As an **SEO owner**, every published article has Article or HowTo or
  FAQPage JSON-LD without me writing it by hand.
- As a **reader on mobile RTL**, the Arabic article renders correctly with
  code blocks pinned LTR.

## 4. Functional requirements

- **FR-1 MDX renderer:** processes frontmatter + body. Supports the JSX
  components used in the existing articles (`<div dir="ltr">`, `<details>`).
- **FR-2 Frontmatter validation:** every published article passes the rules
  in `seo-rules.md`:
  - title ≤ 60 chars, contains keyword
  - description 140-160 chars, contains keyword
  - slug matches filename
  - keyword present
  - ≥ 5 FAQ Q/A
  - ≥ 3 internal tool links
  - 700-1500 words
  - Flesch ≥ 60 (English)
  - Arabic-specific: `dir: rtl`, `«»` quotes, `،` `؟` punctuation, code blocks
    wrapped in `<div dir="ltr">`.
- **FR-3 Article layout:** breadcrumb (Home / Blog / Article), H1, hero
  paragraph, TOC for articles > 800 words, body, FAQ section, author block,
  related-articles strip, related-tool CTA.
- **FR-4 Schema:** every article has Article OR HowTo OR FAQPage JSON-LD,
  picked by the Schema Generator hook based on content shape.
- **FR-5 Index pages:** `/blog/` lists all published articles, paginated 20
  per page. Tag pages list articles per tag.
- **FR-6 Related articles:** each article surfaces 2-4 articles by tag and
  shared keyword overlap.
- **FR-7 i18n:** `/blog/<slug>` is English; `/<lang>/blog/<slug>` is the
  non-English variant. URL prefix is the language, slug stays same.

## 5. Non-functional requirements

- **NFR-1 Performance:** article page LCP ≤ 2.5 s, total weight ≤ 250 KB
  (matches `tool-pages-seo` NFR-1).
- **NFR-2 Accessibility:** WCAG 2.1 AA. TOC is keyboard-navigable. FAQ uses
  `<details>` not custom JS.
- **NFR-3 Authoring velocity:** editor goes from "blank file" to "merged PR"
  in ≤ 30 minutes per article (per `content-pipeline` NFR-4).
- **NFR-4 No fabricated metadata.** Author, dates, ratings, citations come
  from real data or are omitted (per `seo-rules.md` §7).

## 6. Success criteria

- Every article in `content/blog/` ships with all 8 sections from the
  template populated and `validate_articles.py` exits 0.
- Internal-linking audit reports zero broken article-to-tool links.
- A new article authored from `_templates/howto.mdx` renders correctly with
  zero per-article code changes.
- Lighthouse on representative articles passes the budget.

## 7. Inputs needed before tasks ship

- TODO(input): renderer choice (same as `tool-pages-seo`: default Astro).
- TODO(input): author byline policy. Today articles use "Stirling-PDF Team"
  as a placeholder. Real bylines need a real person + bio.
