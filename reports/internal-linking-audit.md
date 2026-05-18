# Internal-linking audit

_Generated: 2026-05-18 by `.kiro/scripts/audit_internal_links.py`._

## Scope

- Sources scanned: `content/blog/**/*.mdx`, `src/routes/tools/*.tsx`
- Pages discovered: **64** (8 blog, 56 tool stubs)
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
| Pages | 64 |
| Internal edges (resolved, ok) | 83 |
| Edges to SPA-only destinations | 2 |
| Broken internal links | 0 |
| Orphan pages (0 incoming) | 49 |
| Pages with <3 unique outgoing | 56 |

## All pages

| Page | Kind | In | Out (unique) | Title |
|---|---|---:|---:|---|
| `/blog/ar/compress-pdf-without-losing-quality` | blog | 0 | 5 | كيف تضغط ملف PDF بدون فقدان الجودة |
| `/blog/ar/make-scanned-pdf-searchable` | blog | 0 | 6 | كيف تجعل ملف PDF الممسوح ضوئياً قابلاً للبحث |
| `/blog/ar/merge-pdf-majanan` | blog | 0 | 5 | كيف تدمج ملفات PDF مجاناً في 2026 |
| `/blog/ar/remove-pdf-password-without-software` | blog | 0 | 4 | كيف تزيل كلمة مرور PDF بدون برامج |
| `/blog/compress-pdf-without-losing-quality` | blog | 0 | 5 | Compress PDF Without Losing Quality: A Practical Guide |
| `/blog/how-to-merge-pdf-files-online-free` | blog | 0 | 5 | How to Merge PDF Files Online Free in 2026 |
| `/blog/make-scanned-pdf-searchable` | blog | 0 | 6 | How to Make a Scanned PDF Searchable (OCR Walkthrough) |
| `/blog/remove-pdf-password-without-software` | blog | 0 | 4 | How to Remove a PDF Password Without Software |
| `/tools/add-attachments` | tool | 0 | 0 | Add Attachments — Free Online | Stirling-PDF |
| `/tools/add-page-numbers` | tool | 0 | 0 | Add Page Numbers — Free Online | Stirling-PDF |
| `/tools/add-password` | tool | 2 | 0 | Add Password — Free Online | Stirling-PDF |
| `/tools/add-stamp` | tool | 0 | 0 | Add Stamp — Free Online | Stirling-PDF |
| `/tools/add-watermark-pdf` | tool | 0 | 0 | Add Watermark to PDF — Free Online | Stirling-PDF |
| `/tools/auto-redact` | tool | 0 | 0 | Auto Redact — Free Online | Stirling-PDF |
| `/tools/auto-rename` | tool | 0 | 0 | Auto Rename — Free Online | Stirling-PDF |
| `/tools/booklet-imposition` | tool | 0 | 0 | Booklet Imposition — Free Online | Stirling-PDF |
| `/tools/cert-sign` | tool | 0 | 0 | Certificate Sign — Free Online | Stirling-PDF |
| `/tools/change-permissions` | tool | 2 | 0 | Change Permissions — Free Online | Stirling-PDF |
| `/tools/compress-pdf` | tool | 6 | 0 | Compress PDF — Reduce PDF Size Free | Stirling-PDF |
| `/tools/crop` | tool | 0 | 0 | Crop PDF — Free Online | Stirling-PDF |
| `/tools/edit-table-of-contents` | tool | 0 | 0 | Edit Table of Contents — Free Online | Stirling-PDF |
| `/tools/eml-to-pdf` | tool | 0 | 0 | Email to PDF — Free Online | Stirling-PDF |
| `/tools/extract-image-scans` | tool | 0 | 0 | Extract Scans — Free Online | Stirling-PDF |
| `/tools/extract-images` | tool | 0 | 0 | Extract Images — Free Online | Stirling-PDF |
| `/tools/extract-pages` | tool | 2 | 0 | Extract Pages — Free Online | Stirling-PDF |
| `/tools/file-to-pdf` | tool | 0 | 0 | File to PDF — Free Online | Stirling-PDF |
| `/tools/flatten` | tool | 4 | 0 | Flatten PDF — Free Online | Stirling-PDF |
| `/tools/get-info-on-pdf` | tool | 0 | 0 | PDF Info — Free Online | Stirling-PDF |
| `/tools/html-to-pdf` | tool | 0 | 0 | HTML to PDF — Free Online | Stirling-PDF |
| `/tools/jpg-to-pdf` | tool | 0 | 0 | JPG to PDF — Combine Images into a PDF Free | Stirling-PDF |
| `/tools/markdown-to-pdf` | tool | 0 | 0 | Markdown to PDF — Free Online | Stirling-PDF |
| `/tools/merge-pdf` | tool | 2 | 0 | Merge PDF — Free Online PDF Merger | Stirling-PDF |
| `/tools/multi-page-layout` | tool | 0 | 0 | Multi-Page Layout — Free Online | Stirling-PDF |
| `/tools/ocr-pdf` | tool | 4 | 0 | OCR PDF — Make Scanned PDFs Searchable Free | Stirling-PDF |
| `/tools/overlay-pdf` | tool | 0 | 0 | Overlay PDFs — Free Online | Stirling-PDF |
| `/tools/pdf-to-csv` | tool | 0 | 0 | PDF to CSV — Free Online | Stirling-PDF |
| `/tools/pdf-to-epub` | tool | 0 | 0 | PDF to EPUB — Free Online | Stirling-PDF |
| `/tools/pdf-to-html` | tool | 0 | 0 | PDF to HTML — Free Online | Stirling-PDF |
| `/tools/pdf-to-jpg` | tool | 0 | 0 | PDF to JPG — Convert PDF Pages to Images Free | Stirling-PDF |
| `/tools/pdf-to-markdown` | tool | 0 | 0 | PDF to Markdown — Free Online | Stirling-PDF |
| `/tools/pdf-to-pdfa` | tool | 0 | 0 | PDF to PDF/A — Free Online | Stirling-PDF |
| `/tools/pdf-to-presentation` | tool | 0 | 0 | PDF to PowerPoint — Free Online | Stirling-PDF |
| `/tools/pdf-to-single-page` | tool | 0 | 0 | PDF to Single Page — Free Online | Stirling-PDF |
| `/tools/pdf-to-text` | tool | 2 | 0 | PDF to Text — Free Online | Stirling-PDF |
| `/tools/pdf-to-word` | tool | 2 | 0 | PDF to Word — Convert PDF to DOCX Free | Stirling-PDF |
| `/tools/pdf-to-xml` | tool | 0 | 0 | PDF to XML — Free Online | Stirling-PDF |
| `/tools/rearrange-pages` | tool | 0 | 0 | Rearrange Pages — Free Online | Stirling-PDF |
| `/tools/remove-annotations` | tool | 2 | 0 | Remove Annotations — Free Online | Stirling-PDF |
| `/tools/remove-blanks` | tool | 4 | 0 | Remove Blank Pages — Free Online | Stirling-PDF |
| `/tools/remove-cert-sign` | tool | 0 | 0 | Remove Signatures — Free Online | Stirling-PDF |
| `/tools/remove-pages` | tool | 0 | 0 | Remove Pages — Free Online | Stirling-PDF |
| `/tools/repair` | tool | 0 | 0 | Repair PDF — Free Online | Stirling-PDF |
| `/tools/replace-invert-pdf` | tool | 2 | 0 | Replace/Invert Colors — Free Online | Stirling-PDF |
| `/tools/rotate-pdf` | tool | 0 | 0 | Rotate PDF — Rotate All PDF Pages Free | Stirling-PDF |
| `/tools/sanitize-pdf` | tool | 0 | 0 | Sanitize PDF — Free Online | Stirling-PDF |
| `/tools/scale-pages` | tool | 0 | 0 | Scale Pages — Free Online | Stirling-PDF |
| `/tools/scanner-effect` | tool | 0 | 0 | Scanner Effect — Free Online | Stirling-PDF |
| `/tools/show-javascript` | tool | 0 | 0 | Show JavaScript — Free Online | Stirling-PDF |
| `/tools/split-pdf` | tool | 0 | 0 | Split PDF — Extract or Split PDF by Pages Free | Stirling-PDF |
| `/tools/timestamp-pdf` | tool | 0 | 0 | Timestamp PDF — Free Online | Stirling-PDF |
| `/tools/unlock-pdf` | tool | 2 | 0 | Unlock PDF — Remove PDF Password Free | Stirling-PDF |
| `/tools/unlock-pdf-forms` | tool | 0 | 0 | Unlock PDF Forms — Free Online | Stirling-PDF |
| `/tools/update-metadata` | tool | 2 | 0 | Update Metadata — Free Online | Stirling-PDF |
| `/tools/validate-signature` | tool | 2 | 0 | Validate Signature — Free Online | Stirling-PDF |

## Orphan pages (0 incoming internal links)

49 pages have no other page linking to them.

> **Note on the tool stubs.** All 10 stubs under `src/routes/tools/` are orphans by design today: the blog articles link into the SPA via `/index.html#/tool/<id>` rather than the static `/tools/<slug>` URL, because the static-page layer is not yet wired into routing (see `.kiro/specs/content-pipeline/`). Once the migration lands, the suggested edges below should be applied so the static pages inherit link equity from the blog content.

### `/blog/ar/compress-pdf-without-losing-quality`  _(`content/blog/ar/compress-pdf-without-losing-quality.mdx`)_

- Title: كيف تضغط ملف PDF بدون فقدان الجودة
- Keyword: `ضغط pdf بدون فقدان الجودة`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/compress-pdf-without-losing-quality` (`content/blog/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [ضغط pdf بدون فقدان الجودة](/blog/ar/compress-pdf-without-losing-quality)
  - **Why:** shared terms: compress, how-to  (score 6)
- From `/blog/ar/make-scanned-pdf-searchable` (`content/blog/ar/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [ضغط pdf بدون فقدان الجودة](/blog/ar/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [ضغط pdf بدون فقدان الجودة](/blog/ar/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/ar/make-scanned-pdf-searchable`  _(`content/blog/ar/make-scanned-pdf-searchable.mdx`)_

- Title: كيف تجعل ملف PDF الممسوح ضوئياً قابلاً للبحث
- Keyword: `pdf ممسوح ضوئياً قابل للبحث`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/make-scanned-pdf-searchable` (`content/blog/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [pdf ممسوح ضوئياً قابل للبحث](/blog/ar/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to, ocr  (score 6)
- From `/blog/ar/compress-pdf-without-losing-quality` (`content/blog/ar/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [pdf ممسوح ضوئياً قابل للبحث](/blog/ar/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/ar/merge-pdf-majanan` (`content/blog/ar/merge-pdf-majanan.mdx`)  
  - **Anchor to insert:** [pdf ممسوح ضوئياً قابل للبحث](/blog/ar/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/ar/merge-pdf-majanan`  _(`content/blog/ar/merge-pdf-majanan.mdx`)_

- Title: كيف تدمج ملفات PDF مجاناً في 2026
- Keyword: `دمج ملفات pdf مجاناً`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/how-to-merge-pdf-files-online-free` (`content/blog/how-to-merge-pdf-files-online-free.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to, merge  (score 6)
- From `/blog/ar/compress-pdf-without-losing-quality` (`content/blog/ar/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/ar/make-scanned-pdf-searchable` (`content/blog/ar/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [دمج ملفات pdf مجاناً](/blog/ar/merge-pdf-majanan)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/ar/remove-pdf-password-without-software`  _(`content/blog/ar/remove-pdf-password-without-software.mdx`)_

- Title: كيف تزيل كلمة مرور PDF بدون برامج
- Keyword: `إزالة كلمة مرور pdf بدون برامج`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/remove-pdf-password-without-software` (`content/blog/remove-pdf-password-without-software.mdx`)  
  - **Anchor to insert:** [إزالة كلمة مرور pdf بدون برامج](/blog/ar/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to, security  (score 6)
- From `/blog/ar/compress-pdf-without-losing-quality` (`content/blog/ar/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [إزالة كلمة مرور pdf بدون برامج](/blog/ar/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to  (score 3)
- From `/blog/ar/make-scanned-pdf-searchable` (`content/blog/ar/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [إزالة كلمة مرور pdf بدون برامج](/blog/ar/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to  (score 3)

### `/blog/compress-pdf-without-losing-quality`  _(`content/blog/compress-pdf-without-losing-quality.mdx`)_

- Title: Compress PDF Without Losing Quality: A Practical Guide
- Keyword: `compress pdf without losing quality`
- Kind: blog

**Suggested incoming links (3):**

- From `/blog/ar/compress-pdf-without-losing-quality` (`content/blog/ar/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [compress pdf without losing quality](/blog/compress-pdf-without-losing-quality)
  - **Why:** shared terms: compress, how-to  (score 6)
- From `/blog/remove-pdf-password-without-software` (`content/blog/remove-pdf-password-without-software.mdx`)  
  - **Anchor to insert:** [compress pdf without losing quality](/blog/compress-pdf-without-losing-quality)
  - **Why:** shared terms: how-to, without  (score 6)
- From `/blog/ar/make-scanned-pdf-searchable` (`content/blog/ar/make-scanned-pdf-searchable.mdx`)  
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
- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
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
- From `/blog/ar/make-scanned-pdf-searchable` (`content/blog/ar/make-scanned-pdf-searchable.mdx`)  
  - **Anchor to insert:** [make a scanned pdf searchable](/blog/make-scanned-pdf-searchable)
  - **Why:** shared terms: how-to, ocr  (score 6)
- From `/blog/ar/compress-pdf-without-losing-quality` (`content/blog/ar/compress-pdf-without-losing-quality.mdx`)  
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
- From `/blog/ar/remove-pdf-password-without-software` (`content/blog/ar/remove-pdf-password-without-software.mdx`)  
  - **Anchor to insert:** [remove a pdf password without software](/blog/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to, security  (score 6)
- From `/blog/compress-pdf-without-losing-quality` (`content/blog/compress-pdf-without-losing-quality.mdx`)  
  - **Anchor to insert:** [remove a pdf password without software](/blog/remove-pdf-password-without-software)
  - **Why:** shared terms: how-to, without  (score 6)

### `/tools/add-attachments`  _(`src/routes/tools/add-attachments.tsx`)_

- Title: Add Attachments — Free Online | Stirling-PDF
- Keyword: `add attachments`
- Kind: tool, toolId `add-attachments`

**Suggested incoming links (3):**

- From `/tools/add-stamp` (`src/routes/tools/add-stamp.tsx`)  
  - **Anchor to insert:** [Add Attachments](/tools/add-attachments)
  - **Why:** shared terms: add, free, online, other  (score 15)
- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Add Attachments](/tools/add-attachments)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)
- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Add Attachments](/tools/add-attachments)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)

### `/tools/add-page-numbers`  _(`src/routes/tools/add-page-numbers.tsx`)_

- Title: Add Page Numbers — Free Online | Stirling-PDF
- Keyword: `add page numbers`
- Kind: tool, toolId `add-page-numbers`

**Suggested incoming links (3):**

- From `/tools/pdf-to-single-page` (`src/routes/tools/pdf-to-single-page.tsx`)  
  - **Anchor to insert:** [Add Page Numbers](/tools/add-page-numbers)
  - **Why:** shared terms: free, online, page, page-operations  (score 15)
- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Add Page Numbers](/tools/add-page-numbers)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)
- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Add Page Numbers](/tools/add-page-numbers)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)

### `/tools/add-stamp`  _(`src/routes/tools/add-stamp.tsx`)_

- Title: Add Stamp — Free Online | Stirling-PDF
- Keyword: `add stamp`
- Kind: tool, toolId `add-stamp`

**Suggested incoming links (3):**

- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Add Stamp](/tools/add-stamp)
  - **Why:** shared terms: add, free, online, other  (score 15)
- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Add Stamp](/tools/add-stamp)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)
- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Add Stamp](/tools/add-stamp)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)

### `/tools/add-watermark-pdf`  _(`src/routes/tools/add-watermark-pdf.tsx`)_

- Title: Add Watermark to PDF — Free Online | Stirling-PDF
- Keyword: `add watermark to pdf`
- Kind: tool, toolId `add-watermark`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: add, free, online, security  (score 15)
- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)
- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Add Watermark to PDF](/tools/add-watermark-pdf)
  - **Why:** shared terms: add, free, online, stirling-pdf  (score 12)

### `/tools/auto-redact`  _(`src/routes/tools/auto-redact.tsx`)_

- Title: Auto Redact — Free Online | Stirling-PDF
- Keyword: `auto redact`
- Kind: tool, toolId `auto-redact`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Auto Redact](/tools/auto-redact)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Auto Redact](/tools/auto-redact)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-rename` (`src/routes/tools/auto-rename.tsx`)  
  - **Anchor to insert:** [Auto Redact](/tools/auto-redact)
  - **Why:** shared terms: auto, free, online, stirling-pdf  (score 12)

### `/tools/auto-rename`  _(`src/routes/tools/auto-rename.tsx`)_

- Title: Auto Rename — Free Online | Stirling-PDF
- Keyword: `auto rename`
- Kind: tool, toolId `auto-rename`

**Suggested incoming links (3):**

- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Auto Rename](/tools/auto-rename)
  - **Why:** shared terms: auto, free, online, stirling-pdf  (score 12)
- From `/tools/extract-image-scans` (`src/routes/tools/extract-image-scans.tsx`)  
  - **Anchor to insert:** [Auto Rename](/tools/auto-rename)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/repair` (`src/routes/tools/repair.tsx`)  
  - **Anchor to insert:** [Auto Rename](/tools/auto-rename)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)

### `/tools/booklet-imposition`  _(`src/routes/tools/booklet-imposition.tsx`)_

- Title: Booklet Imposition — Free Online | Stirling-PDF
- Keyword: `booklet imposition`
- Kind: tool, toolId `booklet-imposition`

**Suggested incoming links (3):**

- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Booklet Imposition](/tools/booklet-imposition)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/crop` (`src/routes/tools/crop.tsx`)  
  - **Anchor to insert:** [Booklet Imposition](/tools/booklet-imposition)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Booklet Imposition](/tools/booklet-imposition)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)

### `/tools/cert-sign`  _(`src/routes/tools/cert-sign.tsx`)_

- Title: Certificate Sign — Free Online | Stirling-PDF
- Keyword: `certificate sign`
- Kind: tool, toolId `cert-sign`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Certificate Sign](/tools/cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Certificate Sign](/tools/cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Certificate Sign](/tools/cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)

### `/tools/crop`  _(`src/routes/tools/crop.tsx`)_

- Title: Crop PDF — Free Online | Stirling-PDF
- Keyword: `crop pdf`
- Kind: tool, toolId `crop`

**Suggested incoming links (3):**

- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Crop PDF](/tools/crop)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/booklet-imposition` (`src/routes/tools/booklet-imposition.tsx`)  
  - **Anchor to insert:** [Crop PDF](/tools/crop)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Crop PDF](/tools/crop)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)

### `/tools/edit-table-of-contents`  _(`src/routes/tools/edit-table-of-contents.tsx`)_

- Title: Edit Table of Contents — Free Online | Stirling-PDF
- Keyword: `edit table of contents`
- Kind: tool, toolId `edit-table-of-contents`

**Suggested incoming links (3):**

- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Edit Table of Contents](/tools/edit-table-of-contents)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/add-stamp` (`src/routes/tools/add-stamp.tsx`)  
  - **Anchor to insert:** [Edit Table of Contents](/tools/edit-table-of-contents)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/extract-images` (`src/routes/tools/extract-images.tsx`)  
  - **Anchor to insert:** [Edit Table of Contents](/tools/edit-table-of-contents)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)

### `/tools/eml-to-pdf`  _(`src/routes/tools/eml-to-pdf.tsx`)_

- Title: Email to PDF — Free Online | Stirling-PDF
- Keyword: `email to pdf`
- Kind: tool, toolId `eml-to-pdf`

**Suggested incoming links (3):**

- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [Email to PDF](/tools/eml-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [Email to PDF](/tools/eml-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/markdown-to-pdf` (`src/routes/tools/markdown-to-pdf.tsx`)  
  - **Anchor to insert:** [Email to PDF](/tools/eml-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/extract-image-scans`  _(`src/routes/tools/extract-image-scans.tsx`)_

- Title: Extract Scans — Free Online | Stirling-PDF
- Keyword: `extract scans`
- Kind: tool, toolId `extract-image-scans`

**Suggested incoming links (3):**

- From `/tools/auto-rename` (`src/routes/tools/auto-rename.tsx`)  
  - **Anchor to insert:** [Extract Scans](/tools/extract-image-scans)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/extract-images` (`src/routes/tools/extract-images.tsx`)  
  - **Anchor to insert:** [Extract Scans](/tools/extract-image-scans)
  - **Why:** shared terms: extract, free, online, stirling-pdf  (score 12)
- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Extract Scans](/tools/extract-image-scans)
  - **Why:** shared terms: extract, free, online, stirling-pdf  (score 12)

### `/tools/extract-images`  _(`src/routes/tools/extract-images.tsx`)_

- Title: Extract Images — Free Online | Stirling-PDF
- Keyword: `extract images`
- Kind: tool, toolId `extract-images`

**Suggested incoming links (3):**

- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Extract Images](/tools/extract-images)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/add-stamp` (`src/routes/tools/add-stamp.tsx`)  
  - **Anchor to insert:** [Extract Images](/tools/extract-images)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/edit-table-of-contents` (`src/routes/tools/edit-table-of-contents.tsx`)  
  - **Anchor to insert:** [Extract Images](/tools/extract-images)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)

### `/tools/file-to-pdf`  _(`src/routes/tools/file-to-pdf.tsx`)_

- Title: File to PDF — Free Online | Stirling-PDF
- Keyword: `file to pdf`
- Kind: tool, toolId `file-to-pdf`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [File to PDF](/tools/file-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [File to PDF](/tools/file-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/markdown-to-pdf` (`src/routes/tools/markdown-to-pdf.tsx`)  
  - **Anchor to insert:** [File to PDF](/tools/file-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/get-info-on-pdf`  _(`src/routes/tools/get-info-on-pdf.tsx`)_

- Title: PDF Info — Free Online | Stirling-PDF
- Keyword: `pdf info`
- Kind: tool, toolId `get-info-on-pdf`

**Suggested incoming links (3):**

- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [PDF Info](/tools/get-info-on-pdf)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/add-stamp` (`src/routes/tools/add-stamp.tsx`)  
  - **Anchor to insert:** [PDF Info](/tools/get-info-on-pdf)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/edit-table-of-contents` (`src/routes/tools/edit-table-of-contents.tsx`)  
  - **Anchor to insert:** [PDF Info](/tools/get-info-on-pdf)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)

### `/tools/html-to-pdf`  _(`src/routes/tools/html-to-pdf.tsx`)_

- Title: HTML to PDF — Free Online | Stirling-PDF
- Keyword: `html to pdf`
- Kind: tool, toolId `html-to-pdf`

**Suggested incoming links (3):**

- From `/tools/pdf-to-html` (`src/routes/tools/pdf-to-html.tsx`)  
  - **Anchor to insert:** [HTML to PDF](/tools/html-to-pdf)
  - **Why:** shared terms: convert, free, html, online  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [HTML to PDF](/tools/html-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [HTML to PDF](/tools/html-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/jpg-to-pdf`  _(`src/routes/tools/jpg-to-pdf.tsx`)_

- Title: JPG to PDF — Combine Images into a PDF Free | Stirling-PDF
- Keyword: `jpg to pdf`
- Kind: tool, toolId `img-to-pdf`

**Suggested incoming links (3):**

- From `/tools/pdf-to-jpg` (`src/routes/tools/pdf-to-jpg.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: convert, free, images, jpg  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: convert, free, stirling-pdf  (score 9)
- From `/tools/extract-images` (`src/routes/tools/extract-images.tsx`)  
  - **Anchor to insert:** [JPG to PDF](/tools/jpg-to-pdf)
  - **Why:** shared terms: free, images, stirling-pdf  (score 9)

### `/tools/markdown-to-pdf`  _(`src/routes/tools/markdown-to-pdf.tsx`)_

- Title: Markdown to PDF — Free Online | Stirling-PDF
- Keyword: `markdown to pdf`
- Kind: tool, toolId `markdown-to-pdf`

**Suggested incoming links (3):**

- From `/tools/pdf-to-markdown` (`src/routes/tools/pdf-to-markdown.tsx`)  
  - **Anchor to insert:** [Markdown to PDF](/tools/markdown-to-pdf)
  - **Why:** shared terms: convert, free, markdown, online  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [Markdown to PDF](/tools/markdown-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [Markdown to PDF](/tools/markdown-to-pdf)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/multi-page-layout`  _(`src/routes/tools/multi-page-layout.tsx`)_

- Title: Multi-Page Layout — Free Online | Stirling-PDF
- Keyword: `multi-page layout`
- Kind: tool, toolId `multi-page-layout`

**Suggested incoming links (3):**

- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Multi-Page Layout](/tools/multi-page-layout)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/booklet-imposition` (`src/routes/tools/booklet-imposition.tsx`)  
  - **Anchor to insert:** [Multi-Page Layout](/tools/multi-page-layout)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/crop` (`src/routes/tools/crop.tsx`)  
  - **Anchor to insert:** [Multi-Page Layout](/tools/multi-page-layout)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)

### `/tools/overlay-pdf`  _(`src/routes/tools/overlay-pdf.tsx`)_

- Title: Overlay PDFs — Free Online | Stirling-PDF
- Keyword: `overlay pdfs`
- Kind: tool, toolId `overlay-pdf`

**Suggested incoming links (3):**

- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [Overlay PDFs](/tools/overlay-pdf)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/booklet-imposition` (`src/routes/tools/booklet-imposition.tsx`)  
  - **Anchor to insert:** [Overlay PDFs](/tools/overlay-pdf)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/crop` (`src/routes/tools/crop.tsx`)  
  - **Anchor to insert:** [Overlay PDFs](/tools/overlay-pdf)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)

### `/tools/pdf-to-csv`  _(`src/routes/tools/pdf-to-csv.tsx`)_

- Title: PDF to CSV — Free Online | Stirling-PDF
- Keyword: `pdf to csv`
- Kind: tool, toolId `pdf-to-csv`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to CSV](/tools/pdf-to-csv)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to CSV](/tools/pdf-to-csv)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to CSV](/tools/pdf-to-csv)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-epub`  _(`src/routes/tools/pdf-to-epub.tsx`)_

- Title: PDF to EPUB — Free Online | Stirling-PDF
- Keyword: `pdf to epub`
- Kind: tool, toolId `pdf-to-epub`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to EPUB](/tools/pdf-to-epub)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to EPUB](/tools/pdf-to-epub)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to EPUB](/tools/pdf-to-epub)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-html`  _(`src/routes/tools/pdf-to-html.tsx`)_

- Title: PDF to HTML — Free Online | Stirling-PDF
- Keyword: `pdf to html`
- Kind: tool, toolId `pdf-to-html`

**Suggested incoming links (3):**

- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to HTML](/tools/pdf-to-html)
  - **Why:** shared terms: convert, free, html, online  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to HTML](/tools/pdf-to-html)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to HTML](/tools/pdf-to-html)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-jpg`  _(`src/routes/tools/pdf-to-jpg.tsx`)_

- Title: PDF to JPG — Convert PDF Pages to Images Free | Stirling-PDF
- Keyword: `pdf to jpg`
- Kind: tool, toolId `pdf-to-img`

**Suggested incoming links (3):**

- From `/tools/jpg-to-pdf` (`src/routes/tools/jpg-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: convert, free, images, jpg  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: convert, free, stirling-pdf  (score 9)
- From `/tools/extract-images` (`src/routes/tools/extract-images.tsx`)  
  - **Anchor to insert:** [PDF to JPG](/tools/pdf-to-jpg)
  - **Why:** shared terms: free, images, stirling-pdf  (score 9)

### `/tools/pdf-to-markdown`  _(`src/routes/tools/pdf-to-markdown.tsx`)_

- Title: PDF to Markdown — Free Online | Stirling-PDF
- Keyword: `pdf to markdown`
- Kind: tool, toolId `pdf-to-markdown`

**Suggested incoming links (3):**

- From `/tools/markdown-to-pdf` (`src/routes/tools/markdown-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to Markdown](/tools/pdf-to-markdown)
  - **Why:** shared terms: convert, free, markdown, online  (score 15)
- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to Markdown](/tools/pdf-to-markdown)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to Markdown](/tools/pdf-to-markdown)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-pdfa`  _(`src/routes/tools/pdf-to-pdfa.tsx`)_

- Title: PDF to PDF/A — Free Online | Stirling-PDF
- Keyword: `pdf to pdf/a`
- Kind: tool, toolId `pdf-to-pdfa`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PDF/A](/tools/pdf-to-pdfa)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PDF/A](/tools/pdf-to-pdfa)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PDF/A](/tools/pdf-to-pdfa)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-presentation`  _(`src/routes/tools/pdf-to-presentation.tsx`)_

- Title: PDF to PowerPoint — Free Online | Stirling-PDF
- Keyword: `pdf to powerpoint`
- Kind: tool, toolId `pdf-to-presentation`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PowerPoint](/tools/pdf-to-presentation)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PowerPoint](/tools/pdf-to-presentation)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to PowerPoint](/tools/pdf-to-presentation)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/pdf-to-single-page`  _(`src/routes/tools/pdf-to-single-page.tsx`)_

- Title: PDF to Single Page — Free Online | Stirling-PDF
- Keyword: `pdf to single page`
- Kind: tool, toolId `pdf-to-single-page`

**Suggested incoming links (3):**

- From `/tools/add-page-numbers` (`src/routes/tools/add-page-numbers.tsx`)  
  - **Anchor to insert:** [PDF to Single Page](/tools/pdf-to-single-page)
  - **Why:** shared terms: free, online, page, page-operations  (score 15)
- From `/tools/booklet-imposition` (`src/routes/tools/booklet-imposition.tsx`)  
  - **Anchor to insert:** [PDF to Single Page](/tools/pdf-to-single-page)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)
- From `/tools/crop` (`src/routes/tools/crop.tsx`)  
  - **Anchor to insert:** [PDF to Single Page](/tools/pdf-to-single-page)
  - **Why:** shared terms: free, online, page-operations, stirling-pdf  (score 12)

### `/tools/pdf-to-xml`  _(`src/routes/tools/pdf-to-xml.tsx`)_

- Title: PDF to XML — Free Online | Stirling-PDF
- Keyword: `pdf to xml`
- Kind: tool, toolId `pdf-to-xml`

**Suggested incoming links (3):**

- From `/tools/eml-to-pdf` (`src/routes/tools/eml-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to XML](/tools/pdf-to-xml)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/file-to-pdf` (`src/routes/tools/file-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to XML](/tools/pdf-to-xml)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)
- From `/tools/html-to-pdf` (`src/routes/tools/html-to-pdf.tsx`)  
  - **Anchor to insert:** [PDF to XML](/tools/pdf-to-xml)
  - **Why:** shared terms: convert, free, online, stirling-pdf  (score 12)

### `/tools/rearrange-pages`  _(`src/routes/tools/rearrange-pages.tsx`)_

- Title: Rearrange Pages — Free Online | Stirling-PDF
- Keyword: `rearrange pages`
- Kind: tool, toolId `rearrange-pages`

**Suggested incoming links (3):**

- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Rearrange Pages](/tools/rearrange-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/remove-pages` (`src/routes/tools/remove-pages.tsx`)  
  - **Anchor to insert:** [Rearrange Pages](/tools/rearrange-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/scale-pages` (`src/routes/tools/scale-pages.tsx`)  
  - **Anchor to insert:** [Rearrange Pages](/tools/rearrange-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)

### `/tools/remove-cert-sign`  _(`src/routes/tools/remove-cert-sign.tsx`)_

- Title: Remove Signatures — Free Online | Stirling-PDF
- Keyword: `remove signatures`
- Kind: tool, toolId `remove-cert-sign`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Remove Signatures](/tools/remove-cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Remove Signatures](/tools/remove-cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Remove Signatures](/tools/remove-cert-sign)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)

### `/tools/remove-pages`  _(`src/routes/tools/remove-pages.tsx`)_

- Title: Remove Pages — Free Online | Stirling-PDF
- Keyword: `remove pages`
- Kind: tool, toolId `remove-pages`

**Suggested incoming links (3):**

- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Remove Pages](/tools/remove-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/rearrange-pages` (`src/routes/tools/rearrange-pages.tsx`)  
  - **Anchor to insert:** [Remove Pages](/tools/remove-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/remove-blanks` (`src/routes/tools/remove-blanks.tsx`)  
  - **Anchor to insert:** [Remove Pages](/tools/remove-pages)
  - **Why:** shared terms: free, online, pages, remove  (score 15)

### `/tools/repair`  _(`src/routes/tools/repair.tsx`)_

- Title: Repair PDF — Free Online | Stirling-PDF
- Keyword: `repair pdf`
- Kind: tool, toolId `repair`

**Suggested incoming links (3):**

- From `/tools/auto-rename` (`src/routes/tools/auto-rename.tsx`)  
  - **Anchor to insert:** [Repair PDF](/tools/repair)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/extract-image-scans` (`src/routes/tools/extract-image-scans.tsx`)  
  - **Anchor to insert:** [Repair PDF](/tools/repair)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/replace-invert-pdf` (`src/routes/tools/replace-invert-pdf.tsx`)  
  - **Anchor to insert:** [Repair PDF](/tools/repair)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)

### `/tools/rotate-pdf`  _(`src/routes/tools/rotate-pdf.tsx`)_

- Title: Rotate PDF — Rotate All PDF Pages Free | Stirling-PDF
- Keyword: `rotate pdf`
- Kind: tool, toolId `rotate-pdf`

**Suggested incoming links (3):**

- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)
- From `/tools/rearrange-pages` (`src/routes/tools/rearrange-pages.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)
- From `/tools/remove-pages` (`src/routes/tools/remove-pages.tsx`)  
  - **Anchor to insert:** [Rotate PDF](/tools/rotate-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)

### `/tools/sanitize-pdf`  _(`src/routes/tools/sanitize-pdf.tsx`)_

- Title: Sanitize PDF — Free Online | Stirling-PDF
- Keyword: `sanitize pdf`
- Kind: tool, toolId `sanitize-pdf`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Sanitize PDF](/tools/sanitize-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Sanitize PDF](/tools/sanitize-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Sanitize PDF](/tools/sanitize-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)

### `/tools/scale-pages`  _(`src/routes/tools/scale-pages.tsx`)_

- Title: Scale Pages — Free Online | Stirling-PDF
- Keyword: `scale pages`
- Kind: tool, toolId `scale-pages`

**Suggested incoming links (3):**

- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Scale Pages](/tools/scale-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/rearrange-pages` (`src/routes/tools/rearrange-pages.tsx`)  
  - **Anchor to insert:** [Scale Pages](/tools/scale-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)
- From `/tools/remove-pages` (`src/routes/tools/remove-pages.tsx`)  
  - **Anchor to insert:** [Scale Pages](/tools/scale-pages)
  - **Why:** shared terms: free, online, page-operations, pages  (score 15)

### `/tools/scanner-effect`  _(`src/routes/tools/scanner-effect.tsx`)_

- Title: Scanner Effect — Free Online | Stirling-PDF
- Keyword: `scanner effect`
- Kind: tool, toolId `scanner-effect`

**Suggested incoming links (3):**

- From `/tools/auto-rename` (`src/routes/tools/auto-rename.tsx`)  
  - **Anchor to insert:** [Scanner Effect](/tools/scanner-effect)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/extract-image-scans` (`src/routes/tools/extract-image-scans.tsx`)  
  - **Anchor to insert:** [Scanner Effect](/tools/scanner-effect)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)
- From `/tools/repair` (`src/routes/tools/repair.tsx`)  
  - **Anchor to insert:** [Scanner Effect](/tools/scanner-effect)
  - **Why:** shared terms: advance, free, online, stirling-pdf  (score 12)

### `/tools/show-javascript`  _(`src/routes/tools/show-javascript.tsx`)_

- Title: Show JavaScript — Free Online | Stirling-PDF
- Keyword: `show javascript`
- Kind: tool, toolId `show-javascript`

**Suggested incoming links (3):**

- From `/tools/add-attachments` (`src/routes/tools/add-attachments.tsx`)  
  - **Anchor to insert:** [Show JavaScript](/tools/show-javascript)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/add-stamp` (`src/routes/tools/add-stamp.tsx`)  
  - **Anchor to insert:** [Show JavaScript](/tools/show-javascript)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)
- From `/tools/edit-table-of-contents` (`src/routes/tools/edit-table-of-contents.tsx`)  
  - **Anchor to insert:** [Show JavaScript](/tools/show-javascript)
  - **Why:** shared terms: free, online, other, stirling-pdf  (score 12)

### `/tools/split-pdf`  _(`src/routes/tools/split-pdf.tsx`)_

- Title: Split PDF — Extract or Split PDF by Pages Free | Stirling-PDF
- Keyword: `split pdf`
- Kind: tool, toolId `split-pages`

**Suggested incoming links (3):**

- From `/tools/extract-pages` (`src/routes/tools/extract-pages.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: extract, free, page-operations, pages  (score 15)
- From `/tools/rearrange-pages` (`src/routes/tools/rearrange-pages.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)
- From `/tools/remove-pages` (`src/routes/tools/remove-pages.tsx`)  
  - **Anchor to insert:** [Split PDF](/tools/split-pdf)
  - **Why:** shared terms: free, page-operations, pages, stirling-pdf  (score 12)

### `/tools/timestamp-pdf`  _(`src/routes/tools/timestamp-pdf.tsx`)_

- Title: Timestamp PDF — Free Online | Stirling-PDF
- Keyword: `timestamp pdf`
- Kind: tool, toolId `timestamp-pdf`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Timestamp PDF](/tools/timestamp-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Timestamp PDF](/tools/timestamp-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Timestamp PDF](/tools/timestamp-pdf)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)

### `/tools/unlock-pdf-forms`  _(`src/routes/tools/unlock-pdf-forms.tsx`)_

- Title: Unlock PDF Forms — Free Online | Stirling-PDF
- Keyword: `unlock pdf forms`
- Kind: tool, toolId `unlock-pdf-forms`

**Suggested incoming links (3):**

- From `/tools/add-password` (`src/routes/tools/add-password.tsx`)  
  - **Anchor to insert:** [Unlock PDF Forms](/tools/unlock-pdf-forms)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/add-watermark-pdf` (`src/routes/tools/add-watermark-pdf.tsx`)  
  - **Anchor to insert:** [Unlock PDF Forms](/tools/unlock-pdf-forms)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)
- From `/tools/auto-redact` (`src/routes/tools/auto-redact.tsx`)  
  - **Anchor to insert:** [Unlock PDF Forms](/tools/unlock-pdf-forms)
  - **Why:** shared terms: free, online, security, stirling-pdf  (score 12)

## Pages with fewer than 3 unique outgoing internal links

| Page | Out (unique) | Resolved destinations |
|---|---:|---|
| `/tools/add-attachments` | 0 | _(none)_ |
| `/tools/add-page-numbers` | 0 | _(none)_ |
| `/tools/add-password` | 0 | _(none)_ |
| `/tools/add-stamp` | 0 | _(none)_ |
| `/tools/add-watermark-pdf` | 0 | _(none)_ |
| `/tools/auto-redact` | 0 | _(none)_ |
| `/tools/auto-rename` | 0 | _(none)_ |
| `/tools/booklet-imposition` | 0 | _(none)_ |
| `/tools/cert-sign` | 0 | _(none)_ |
| `/tools/change-permissions` | 0 | _(none)_ |
| `/tools/compress-pdf` | 0 | _(none)_ |
| `/tools/crop` | 0 | _(none)_ |
| `/tools/edit-table-of-contents` | 0 | _(none)_ |
| `/tools/eml-to-pdf` | 0 | _(none)_ |
| `/tools/extract-image-scans` | 0 | _(none)_ |
| `/tools/extract-images` | 0 | _(none)_ |
| `/tools/extract-pages` | 0 | _(none)_ |
| `/tools/file-to-pdf` | 0 | _(none)_ |
| `/tools/flatten` | 0 | _(none)_ |
| `/tools/get-info-on-pdf` | 0 | _(none)_ |
| `/tools/html-to-pdf` | 0 | _(none)_ |
| `/tools/jpg-to-pdf` | 0 | _(none)_ |
| `/tools/markdown-to-pdf` | 0 | _(none)_ |
| `/tools/merge-pdf` | 0 | _(none)_ |
| `/tools/multi-page-layout` | 0 | _(none)_ |
| `/tools/ocr-pdf` | 0 | _(none)_ |
| `/tools/overlay-pdf` | 0 | _(none)_ |
| `/tools/pdf-to-csv` | 0 | _(none)_ |
| `/tools/pdf-to-epub` | 0 | _(none)_ |
| `/tools/pdf-to-html` | 0 | _(none)_ |
| `/tools/pdf-to-jpg` | 0 | _(none)_ |
| `/tools/pdf-to-markdown` | 0 | _(none)_ |
| `/tools/pdf-to-pdfa` | 0 | _(none)_ |
| `/tools/pdf-to-presentation` | 0 | _(none)_ |
| `/tools/pdf-to-single-page` | 0 | _(none)_ |
| `/tools/pdf-to-text` | 0 | _(none)_ |
| `/tools/pdf-to-word` | 0 | _(none)_ |
| `/tools/pdf-to-xml` | 0 | _(none)_ |
| `/tools/rearrange-pages` | 0 | _(none)_ |
| `/tools/remove-annotations` | 0 | _(none)_ |
| `/tools/remove-blanks` | 0 | _(none)_ |
| `/tools/remove-cert-sign` | 0 | _(none)_ |
| `/tools/remove-pages` | 0 | _(none)_ |
| `/tools/repair` | 0 | _(none)_ |
| `/tools/replace-invert-pdf` | 0 | _(none)_ |
| `/tools/rotate-pdf` | 0 | _(none)_ |
| `/tools/sanitize-pdf` | 0 | _(none)_ |
| `/tools/scale-pages` | 0 | _(none)_ |
| `/tools/scanner-effect` | 0 | _(none)_ |
| `/tools/show-javascript` | 0 | _(none)_ |
| `/tools/split-pdf` | 0 | _(none)_ |
| `/tools/timestamp-pdf` | 0 | _(none)_ |
| `/tools/unlock-pdf` | 0 | _(none)_ |
| `/tools/unlock-pdf-forms` | 0 | _(none)_ |
| `/tools/update-metadata` | 0 | _(none)_ |
| `/tools/validate-signature` | 0 | _(none)_ |

> Tool stubs all currently link only to their own SPA `appUrl`; they predate the static-page network. The `Optimize Article` hook (or a future `Optimize Tool Stub`) should fill these in once the static layer exists.

## Broken internal links

_None found._
## Resolved edge list

<details><summary>Show all ok edges</summary>

| From | To |
|---|---|
| `/blog/ar/compress-pdf-without-losing-quality` | `/tools/compress-pdf` |
| `/blog/ar/compress-pdf-without-losing-quality` | `/tools/flatten` |
| `/blog/ar/compress-pdf-without-losing-quality` | `/tools/ocr-pdf` |
| `/blog/ar/compress-pdf-without-losing-quality` | `/tools/remove-annotations` |
| `/blog/ar/compress-pdf-without-losing-quality` | `/tools/remove-blanks` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/compress-pdf` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/ocr-pdf` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/pdf-to-text` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/pdf-to-word` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/remove-blanks` |
| `/blog/ar/make-scanned-pdf-searchable` | `/tools/replace-invert-pdf` |
| `/blog/ar/merge-pdf-majanan` | `/tools/compress-pdf` |
| `/blog/ar/merge-pdf-majanan` | `/tools/extract-pages` |
| `/blog/ar/merge-pdf-majanan` | `/tools/flatten` |
| `/blog/ar/merge-pdf-majanan` | `/tools/merge-pdf` |
| `/blog/ar/merge-pdf-majanan` | `/tools/update-metadata` |
| `/blog/ar/remove-pdf-password-without-software` | `/tools/add-password` |
| `/blog/ar/remove-pdf-password-without-software` | `/tools/change-permissions` |
| `/blog/ar/remove-pdf-password-without-software` | `/tools/unlock-pdf` |
| `/blog/ar/remove-pdf-password-without-software` | `/tools/validate-signature` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/compress-pdf` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/flatten` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/ocr-pdf` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/remove-annotations` |
| `/blog/compress-pdf-without-losing-quality` | `/tools/remove-blanks` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/compress-pdf` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/extract-pages` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/flatten` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/merge-pdf` |
| `/blog/how-to-merge-pdf-files-online-free` | `/tools/update-metadata` |
| `/blog/make-scanned-pdf-searchable` | `/tools/compress-pdf` |
| `/blog/make-scanned-pdf-searchable` | `/tools/ocr-pdf` |
| `/blog/make-scanned-pdf-searchable` | `/tools/pdf-to-text` |
| `/blog/make-scanned-pdf-searchable` | `/tools/pdf-to-word` |
| `/blog/make-scanned-pdf-searchable` | `/tools/remove-blanks` |
| `/blog/make-scanned-pdf-searchable` | `/tools/replace-invert-pdf` |
| `/blog/remove-pdf-password-without-software` | `/tools/add-password` |
| `/blog/remove-pdf-password-without-software` | `/tools/change-permissions` |
| `/blog/remove-pdf-password-without-software` | `/tools/unlock-pdf` |
| `/blog/remove-pdf-password-without-software` | `/tools/validate-signature` |

</details>

## SPA-only destinations referenced (no static page yet)

These links resolve in the SPA but have no static `/tools/<slug>` counterpart yet. Each is a candidate to promote into a stub under `src/routes/tools/`.

| SPA URL | Times referenced |
|---|---:|
| `/index.html#/` | 2 |

