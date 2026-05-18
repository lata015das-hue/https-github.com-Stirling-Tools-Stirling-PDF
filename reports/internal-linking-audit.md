# Internal-linking audit

_Generated: 2026-05-18 by `.kiro/scripts/audit_internal_links.py`._

## Scope

- Sources scanned: `content/blog/**/*.mdx`, `src/routes/tools/*.tsx`
- Pages discovered: **15** (5 blog, 10 tool stubs)
- Canonical tool ids loaded from `js/tools-data.js`: **61**

## Methodology

Internal links count toward the graph when they resolve to a page that exists in this repo:

- `[text](/blog/<slug>)` resolves to a blog `.mdx` file with that slug.
- `[text](/tools/<slug>)` resolves to a tool stub `.tsx` with that filename.
- `[text](/index.html#/tool/<id>)` resolves to the tool stub whose `meta.toolId === <id>`. If `<id>` is in `js/tools-data.js` but no static stub exists yet, the link is recorded as `spa-only` (valid but not a static destination, so it does not count toward incoming).

Out-degree is counted by **unique resolved destinations** per page, not raw link count.

## Summary

| Metric | Count |
|---|---:|
| Pages | 15 |
| Internal edges (resolved, ok) | 33 |
| Edges to SPA-only destinations | 24 |
| Broken internal links | 0 |
| Orphan pages (0 incoming) | 10 |
| Pages with <3 unique outgoing | 14 |

## All pages

| Page | Kind | In | Out (unique) | Title |
|---|---|---:|---:|---|
| `/blog/ar/merge-pdf-majanan` | blog | 0 | 2 | كيف تدمج ملفات PDF مجاناً في 2026 |
| `/blog/compress-pdf-without-losing-quality` | blog | 0 | 2 | Compress PDF Without Losing Quality: A Practical Guide |
| `/blog/how-to-merge-pdf-files-online-free` | blog | 0 | 2 | How to Merge PDF Files Online Free in 2026 |
| `/blog/make-scanned-pdf-searchable` | blog | 0 | 3 | How to Make a Scanned PDF Searchable (OCR Walkthrough) |
| `/blog/remove-pdf-password-without-software` | blog | 0 | 1 | How to Remove a PDF Password Without Software |
| `/tools/add-watermark-pdf` | tool | 0 | 0 | Add Watermark to PDF — Free Online | Stirling-PDF |
| `/tools/compress-pdf` | tool | 4 | 0 | Compress PDF — Reduce PDF Size Free | Stirling-PDF |
| `/tools/jpg-to-pdf` | tool | 0 | 0 | JPG to PDF — Combine Images into a PDF Free | Stirling-PDF |
| `/tools/merge-pdf` | tool | 2 | 0 | Merge PDF — Free Online PDF Merger | Stirling-PDF |
| `/tools/ocr-pdf` | tool | 2 | 0 | OCR PDF — Make Scanned PDFs Searchable Free | Stirling-PDF |
| `/tools/pdf-to-jpg` | tool | 0 | 0 | PDF to JPG — Convert PDF Pages to Images Free | Stirling-PDF |
| `/tools/pdf-to-word` | tool | 1 | 0 | PDF to Word — Convert PDF to DOCX Free | Stirling-PDF |
| `/tools/rotate-pdf` | tool | 0 | 0 | Rotate PDF — Rotate All PDF Pages Free | Stirling-PDF |
| `/tools/split-pdf` | tool | 0 | 0 | Split PDF — Extract or Split PDF by Pages Free | Stirling-PDF |
| `/tools/unlock-pdf` | tool | 1 | 0 | Unlock PDF — Remove PDF Password Free | Stirling-PDF |

## Orphan pages (0 incoming internal links)

10 pages have no other page linking to them.

> **Note on the tool stubs.** All 10 stubs under `src/routes/tools/` are orphans by design today: the blog articles link into the SPA via `/index.html#/tool/<id>` rather than the static `/tools/<slug>` URL, because the static-page layer is not yet wired into routing (see `.kiro/specs/content-pipeline/`). Once the migration lands, the suggested edges below should be applied so the static pages inherit link equity from the blog content.

### `/blog/ar/merge-pdf-majanan`  _(`content/blog/ar/merge-pdf-majanan.mdx`)_

- Title: كيف تدمج ملفات PDF مجاناً في 2026
- Keyword: `دمج ملفات pdf مجاناً`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/how-to-merge-pdf-files-online-free` (`content/blog/how-to-merge-pdf-files-online-free.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to, merge  (score 6)
- From `/blog/compress-pdf-without-losing-quality` (`content/blog/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/make-scanned-pdf-searchable` (`content/blog/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/compress-pdf-without-losing-quality`  _(`content/blog/compress-pdf-without-losing-quality.mdx`)_

- Title: Compress PDF Without Losing Quality: A Practical Guide
- Keyword: `compress pdf without losing quality`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/remove-pdf-password-without-software` (`content/blog/remove-pdf-password-without-software.mdx`)  
  - **Anchor to insert:** [compress pdf without losing quality](/blog/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to, without  (score 6)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [compress pdf without losing quality](/blog/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/how-to-merge-pdf-files-online-free` (`content/blog/how-to-merge-pdf-files-online-free.mdx`)  
  - **Anchor to insert:** [compress pdf without losing quality](/blog/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/how-to-merge-pdf-files-online-free`  _(`content/blog/how-to-merge-pdf-files-online-free.mdx`)_

- Title: How to Merge PDF Files Online Free in 2026
- Keyword: `merge pdf files online free`
- Kind: blog

**Suggested incoming links (3):**

- From `/tools/merge-pdf` (`src/routes/tools/merge-pdf.tsx`)  
  - **Anchor to insert:** [merge pdf files online free](/blog/how-to-merge-pdf-files-online-free)
  - **Why:** shared terms: free, merge, online  (score 9)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [merge pdf files online free](/blog/how-to-merge-pdf-files-online-free)
  - **Why:** shared terms: how-to, merge  (score 6)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [merge pdf files online free](/blog/how-to-merge-pdf-files-online-free)
  - **Why:** shared terms: free, online  (score 6)

### `/blog/make-scanned-pdf-searchable`  _(`content/blog/make-scanned-pdf-searchable.mdx`)_

- Title: How to Make a Scanned PDF Searchable (OCR Walkthrough)
- Keyword: `make a scanned pdf searchable`
- Kind: blog

**Suggested incoming links (3):**

- From `/tools/ocr-pdf` (`src/routes/tools/ocr-pdf.tsx`)  
  - **Anchor to insert:** [make a scanned pdf searchable](/blog/make-scanned-pdf-searchable)
  - **Why:** shared terms: make, ocr, scanned, searchable  (score 12)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [make a scanned pdf searchable](/blog/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/compress-pdf-without-losing-quality` (`content/blog/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [make a scanned pdf searchable](/blog/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/remove-pdf-password-without-software`  _(`content/blog/remove-pdf-password-without-software.mdx`)_

- Title: How to Remove a PDF Password Without Software
- Keyword: `remove a pdf password without software`
- Kind: blog

**Suggested incoming links (3):**

- From `/tools/unlock-pdf` (`src/routes/tools/unlock-pdf.tsx`)  
  - **Anchor to insert:** [remove a pdf password without software](/blog/remove-pdf-password-without-software)
  - **Why:** shared terms: password, remove, security  (score 9)
- From `/blog/compress-pdf-without-losing-quality` (`content/blog/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [remove a pdf password without software](/blog/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to, without  (score 6)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [remove a pdf password without software](/blog/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to  (score 3)

### `/tools/add-watermark-pdf`  _(`src/routes/tools/add-watermark-pdf.tsx`)_

- Title: Add Watermark to PDF — Free Online | Stirling-PDF
- Keyword: `add watermark to pdf`
- Kind: tool, toolId `add-watermark`

**Suggested incoming links (3):**

- From `/tools/merge-pdf` (`src/routes/tools/merge-pdf.tsx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: free, online, stirling-pdf  (score 9)
- From `/tools/unlock-pdf` (`src/routes/tools/unlock-pdf.tsx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: free, security, stirling-pdf  (score 9)
- From `/blog/how-to-merge-pdf-files-online-free` (`content/blog/how-to-merge-pdf-files-online-free.mdx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: free, online  (score 6)

### `/tools/jpg-to-pdf`  _(`src/routes/tools/jpg-to-pdf.tsx`)_

- Title: JPG to PDF — Combine Images into a PDF Free | Stirling-PDF
- Keyword: `jpg to pdf`
- Kind: tool, toolId `img-to-pdf`

**Suggested incoming links (3):**

- From `/tools/pdf-to-jpg` (`src/routes/tools/pdf-to-jpg.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: convert, free, images, jpg  (score 15)
- From `/tools/pdf-to-word` (`src/routes/tools/pdf-to-word.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: convert, free, stirling-pdf  (score 9)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: free, stirling-pdf  (score 6)

### `/tools/pdf-to-jpg`  _(`src/routes/tools/pdf-to-jpg.tsx`)_

- Title: PDF to JPG — Convert PDF Pages to Images Free | Stirling-PDF
- Keyword: `pdf to jpg`
- Kind: tool, toolId `pdf-to-img`

**Suggested incoming links (3):**

- From `/tools/jpg-to-pdf` (`src/routes/tools/jpg-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: convert, free, images, jpg  (score 15)
- From `/tools/pdf-to-word` (`src/routes/tools/pdf-to-word.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: convert, free, stirling-pdf  (score 9)
- From `/tools/rotate-pdf` (`src/routes/tools/rotate-pdf.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: free, pages, stirling-pdf  (score 9)

### `/tools/rotate-pdf`  _(`src/routes/tools/rotate-pdf.tsx`)_

- Title: Rotate PDF — Rotate All PDF Pages Free | Stirling-PDF
- Keyword: `rotate pdf`
- Kind: tool, toolId `rotate-pdf`

**Suggested incoming links (3):**

- From `/tools/split-pdf` (`src/routes/tools/split-pdf.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)
- From `/tools/merge-pdf` (`src/routes/tools/merge-pdf.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, page-operations, stirling-pdf  (score 9)
- From `/tools/pdf-to-jpg` (`src/routes/tools/pdf-to-jpg.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, pages, stirling-pdf  (score 9)

### `/tools/split-pdf`  _(`src/routes/tools/split-pdf.tsx`)_

- Title: Split PDF — Extract or Split PDF by Pages Free | Stirling-PDF
- Keyword: `split pdf`
- Kind: tool, toolId `split-pages`

**Suggested incoming links (3):**

- From `/tools/rotate-pdf` (`src/routes/tools/rotate-pdf.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)
- From `/tools/merge-pdf` (`src/routes/tools/merge-pdf.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: free, page-operations, stirling-pdf  (score 9)
- From `/tools/pdf-to-jpg` (`src/routes/tools/pdf-to-jpg.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: free, pages, stirling-pdf  (score 9)

## Pages with fewer than 3 unique outgoing internal links

| Page | Out (unique) | Resolved destinations |
|---|---:|---|
| `/blog/ar/merge-pdf-majanan` | 2 | `/tools/compress-pdf`, `/tools/merge-pdf` |
| `/blog/compress-pdf-without-losing-quality` | 2 | `/tools/compress-pdf`, `/tools/ocr-pdf` |
| `/blog/how-to-merge-pdf-files-online-free` | 2 | `/tools/compress-pdf`, `/tools/merge-pdf` |
| `/blog/remove-pdf-password-without-software` | 1 | `/tools/unlock-pdf` |
| `/tools/add-watermark-pdf` | 0 | _(none)_ |
| `/tools/compress-pdf` | 0 | _(none)_ |
| `/tools/jpg-to-pdf` | 0 | _(none)_ |
| `/tools/merge-pdf` | 0 | _(none)_ |
| `/tools/ocr-pdf` | 0 | _(none)_ |
| `/tools/pdf-to-jpg` | 0 | _(none)_ |
| `/tools/pdf-to-word` | 0 | _(none)_ |
| `/tools/rotate-pdf` | 0 | _(none)_ |
| `/tools/split-pdf` | 0 | _(none)_ |
| `/tools/unlock-pdf` | 0 | _(none)_ |

> Tool stubs all currently link only to their own SPA `appUrl`; they predate the static-page network. The `Optimize Article` hook (or a future `Optimize Tool Stub`) should fill these in once the static layer exists.

## Broken internal links

_None found._
## Resolved edge list

<details><summary>Show all ok edges</summary>

| From | To |
|---|---|
| `/blog/ar/merge-pdf-majanan` | `/tools/compress-pdf` |
| `/blog/ar/merge-pdf-majanan` | `/tools/merge-pdf` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/compress-pdf` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/ocr-pdf` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/compress-pdf` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/merge-pdf` |
| `/blog/make-scanned-pdf-searchable` | `/tools/compress-pdf` |
| `/blog/make-scanned-pdf-searchable` | `/tools/ocr-pdf` |
| `/blog/make-scanned-pdf-searchable` | `/tools/pdf-to-word` |
| `/blog/remove-pdf-password-without-software` | `/tools/unlock-pdf` |

</details>

## SPA-only destinations referenced (no static page yet)

These links resolve in the SPA but have no static `/tools/<slug>` counterpart yet. Each is a candidate to promote into a stub under `src/routes/tools/`.

| SPA URL | Times referenced |
|---|---:|
| `/index.html#/tool/flatten` | 5 |
| `/index.html#/tool/change-permissions` | 3 |
| `/index.html#/tool/extract-pages` | 3 |
| `/index.html#/` | 2 |
| `/index.html#/tool/add-password` | 2 |
| `/index.html#/tool/pdf-to-text` | 2 |
| `/index.html#/tool/remove-blanks` | 2 |
| `/index.html#/tool/update-metadata` | 2 |
| `/index.html#/tool/remove-annotations` | 1 |
| `/index.html#/tool/replace-invert-pdf` | 1 |
| `/index.html#/tool/validate-signature` | 1 |

