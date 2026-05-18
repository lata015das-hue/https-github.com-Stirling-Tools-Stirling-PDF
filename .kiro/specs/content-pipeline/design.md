# Content Pipeline — Design

## 1. Overview
A repo-native, PR-driven pipeline. Source of truth is `js/tools-data.js`. A generator script produces per-tool stub pages; editors enrich them with copy and FAQ; the `schema-generator` hook injects JSON-LD; a sitemap step finalizes publishing.

```
tools-data.js ──► generator ──► /pages/<category>/<tool>.html (stub)
                                       │
                            editor enriches copy + FAQ
                                       │
                            schema-generator hook ──► JSON-LD in <head>
                                       │
                            sitemap step ──► sitemap.xml + robots.txt
                                       │
                                     PR review ──► merge ──► live
```

## 2. Components

### 2.1 Generator (`scripts/gen-tool-page.mjs`) — to be added
- Reads `tools-data.js` (via dynamic import or simple eval in Node).
- For each tool id, if `/pages/<category>/<tool-id>.html` does not exist, writes a stub from `templates/tool.html`.
- Idempotent: never overwrites an existing page; only creates missing ones.

### 2.2 Templates (`templates/`)
- `tool.html` — H1, hero CTA, "How it works" 3-step block, "Why use it" bullets, FAQ section (3 placeholders), related-tools strip.
- `category.html` — category hub: intro, grid of tools, FAQ.
- `article.html` — long-form layout for how-tos / comparisons.

### 2.3 Schema injection
- Handled by the existing `Schema Generator` hook (`.kiro/hooks/schema-generator.kiro.hook`).
- Editor runs the hook on the page before opening the PR.

### 2.4 Sitemap step (`scripts/build-sitemap.mjs`) — to be added
- Walks `/pages/**/*.html` + root `index.html`.
- Emits `sitemap.xml` with `<loc>`, `<lastmod>` (from git mtime), `<changefreq>`, `<priority>`.
- Emits/updates `robots.txt` with `Sitemap:` line.

### 2.5 Lint / CI gate
- Pre-merge check: for every page in `/pages/**/*.html`:
  - Has unique `<title>` and `<meta name="description">`.
  - Has `<link rel="canonical">`.
  - Contains exactly one `<script type="application/ld+json" data-generated="schema-generator">` block and the JSON parses.
  - Appears in `sitemap.xml`.
- Fails the PR build if any check fails.

## 3. Routing / Crawlability Strategy
- Current SPA uses hash routes (`#/tool/<id>`) which crawlers ignore.
- Decision: ship the new content as **static HTML pages under `/pages/`** that link into the SPA via `index.html#/tool/<id>` for the actual tool UI. Crawlers index the static pages; users get the SPA experience after click.
- Each tool page has `<link rel="canonical" href="https://<domain>/pages/<category>/<tool>.html">`.

## 4. Internal Linking Rules
- Every tool page links to:
  - Its category hub (breadcrumb).
  - 2–4 sibling tools in the same category ("Related tools").
  - 1 long-form article when one exists for that tool.
- Every category hub links to all its tools.
- Home (`index.html`) links to all category hubs.

## 5. Data Contract
A tool entry in `tools-data.js` is the canonical record. The pipeline reads:
```
{ id, name, desc, category, endpoint, fields?, multi? }
```
No new fields are required for v1; copy and FAQ live in the generated HTML, not in `tools-data.js`, to keep the data file small.

## 6. Metadata Defaults (when editor leaves blank)
- `title`: `${tool.name} — Free Online | Stirling PDF`
- `description`: first 155 chars of `tool.desc` + " Free, no signup."
- `canonical`: derived from path.
- These defaults are placeholders only; the lint gate flags any page still using them after 7 days.

## 7. Schema Selection (delegated)
Defer to the `schema-generator` hook's priority order. Tool pages will most often resolve to `SoftwareApplication` (with `applicationCategory: "Utilities"`, `operatingSystem: "Web"`, free offer) plus a secondary `FAQPage` block if the FAQ section has ≥ 3 Q/A.

## 8. Open Questions
- Final domain / canonical host — needed before sitemap can ship real URLs.
- Move from Tailwind CDN to a built CSS file? (perf NFR may force this.)
- Long-form content authoring tool — Markdown via `marked` at build, or hand-written HTML? (Leaning Markdown.)

## 9. Out of Scope (deferred)
- i18n.
- Server-side rendering / static export of the SPA itself.
- Analytics integration (handled separately).
