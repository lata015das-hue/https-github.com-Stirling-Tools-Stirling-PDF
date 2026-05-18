# Technical SEO — Requirements

## 1. Purpose

Make the Stirling-PDF Free Frontend technically discoverable and indexable by
search engines. This spec covers crawlability, structured data, canonicalization,
and i18n signals. Editorial content quality lives in `seo-blog-engine` and
`tool-pages-seo`; *content production* lives in `content-pipeline`. This spec is
the wiring that makes that content rank.

## 2. Scope

### In scope

- `sitemap.xml` correctness (real domain, accurate `<lastmod>`, hreflang).
- `robots.txt` correctness (real `Sitemap:` URL, no accidental disallows).
- `<head>` essentials on every public URL: `<title>`, `<meta description>`,
  canonical, language, OG tags, JSON-LD slot.
- `hreflang` cluster (en/ar/x-default) once Arabic routes exist.
- 301 / canonical strategy when the SPA hash routes are deprecated in favor of
  static paths.
- Schema.org JSON-LD via the `Schema Generator` hook on every page.

### Out of scope

- Article quality, readability, FAQ structure → `seo-blog-engine`.
- Tool-page layout, copy, on-page UX → `tool-pages-seo`.
- Backlink acquisition, off-page SEO → not currently planned.
- Analytics → `marketing-analytics`.

## 3. User stories

- As a **search-engine crawler**, I get a single canonical URL per piece of
  content with an accurate `<lastmod>` and a complete hreflang cluster.
- As an **SEO owner**, I can change the production domain in *one* place and
  every URL in the sitemap, robots, canonicals, and OG tags updates.
- As an **editor**, I never have to hand-write JSON-LD; the `Schema Generator`
  hook produces it.
- As a **developer**, I can verify the technical-SEO health of the site
  with a single command (`npm run audit` or equivalent), not by reading
  Search Console.

## 4. Functional requirements

- **FR-1 Sitemap:** `sitemap.xml` references the real production domain (not
  `https://example.com`). All entries resolve to 200 status. Entries are
  ordered: home → tools → blog → other.
- **FR-2 Robots:** `robots.txt` has `Allow: /` and `Sitemap: <real-url>`.
  Disallows nothing in production.
- **FR-3 Canonical & lang:** every public URL emits a self-canonical and the
  correct `<html lang>` / `<html dir>`.
- **FR-4 hreflang cluster:** every URL with a language variant emits the full
  cluster: self, every other language, `x-default`. Missing the self-reference
  or `x-default` is the most common reason Google ignores the cluster.
- **FR-5 Structured data:** every URL has a JSON-LD block of the correct
  `@type` (FAQPage / HowTo / SoftwareApplication / Article / Product) with all
  required fields populated from real data.
- **FR-6 Single source of truth for domain:** the production hostname is
  defined once and consumed by sitemap, robots, canonicals, schema, OG tags.

## 5. Non-functional requirements

- **NFR-1:** No fabricated data in any technical-SEO output. Empty is better
  than wrong (`product.md`, `seo-rules.md`).
- **NFR-2:** Every check in this spec is automatable. No "ask the SEO owner"
  in CI.
- **NFR-3:** Audits run in < 30 s offline. No live URL fetches in the per-PR
  build.

## 6. Success criteria

- `sitemap.xml` validates against `https://www.sitemaps.org/schemas/sitemap/0.9`
  with zero warnings, against the production host.
- 100 % of generated pages pass [Google Rich Results Test] for their declared
  schema type. (Manual verification at first; automatable via the schema
  generator hook output.)
- Search Console "Pages" report shows zero "Discovered – currently not indexed"
  entries that are caused by canonical/hreflang/sitemap issues. Other causes
  (thin content, dupes) are content problems, not this spec's.

## 7. Inputs needed before tasks 1-4 ship

- TODO(input): the real production domain.
- TODO(input): whether Arabic routes (`/ar/...`) ship in this iteration or are
  deferred. If deferred, hreflang work is documented but not implemented.
