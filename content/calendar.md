# Content Calendar

Status legend: `planned` · `in-progress` · `published`

This calendar is the source of truth for the editorial pipeline. The
`Mark Article Published` Kiro hook flips a row from `planned` (or
`in-progress`) to `published` and stamps the date when an article is
created under `content/blog/` and shipped.

| Date       | Status        | Title                                                       | Slug                                       | Lang | Tags                          | Notes |
|---|---|---|---|---|---|---|
| 2026-05-18 | in-progress   | How to merge PDF files online for free                      | how-to-merge-pdf-files-online-free         | en   | merge,how-to                  | Drafted from /content/_templates/howto.mdx |
| 2026-05-18 | in-progress   | Compress PDF without losing quality                         | compress-pdf-without-losing-quality        | en   | compress,how-to               | Drafted; covers tradeoff between size and fidelity |
| 2026-05-18 | in-progress   | How to make a scanned PDF searchable                        | make-scanned-pdf-searchable                | en   | ocr,how-to                    | Drafted; multilingual OCR (EN/AR/FR/DE/ES/ZH) |
| 2026-05-18 | in-progress   | Remove a PDF password without installing software           | remove-pdf-password-without-software       | en   | security,how-to               | Drafted; ownership disclaimer required |
| 2026-05-18 | in-progress   | كيف تدمج ملفات PDF مجاناً                                   | ar/merge-pdf-majanan                       | ar   | merge,how-to,arabic           | Drafted; RTL + Arabic typography |
|            | planned       | Convert PDF to editable Word (DOCX)                         | pdf-to-editable-word                       | en   | convert,word                  | Maps to pdf-to-word tool |
|            | planned       | Add page numbers to a PDF                                   | add-page-numbers-to-pdf                    | en   | page-ops,how-to               | High-volume long-tail |
|            | planned       | Combine multiple images into one PDF                        | combine-images-into-pdf                    | en   | convert,images                | Maps to img-to-pdf |
|            | planned       | Why is my PDF so large? (and how to fix it)                 | why-is-my-pdf-so-large                     | en   | compress,question             | Question intent |
|            | planned       | Add a watermark to a PDF                                    | add-watermark-to-pdf                       | en   | security,branding             | Maps to add-watermark |
|            | planned       | Stirling-PDF vs iLovePDF: a self-hoster's view              | stirling-pdf-vs-ilovepdf                   | en   | comparison,commercial         | Commercial intent |
|            | planned       | An open-source alternative to Adobe Acrobat                 | open-source-acrobat-alternative            | en   | comparison,commercial         | Commercial intent |
|            | planned       | OCR للمستندات العربية الممسوحة ضوئياً                       | ar/arabic-ocr-pdf                          | ar   | ocr,arabic,how-to             | Arabic OCR walkthrough |
|            | planned       | Extract specific pages from a PDF                           | extract-pages-from-pdf                     | en   | page-ops,how-to               | Maps to extract-pages |
|            | planned       | Redact sensitive information in a PDF                       | redact-sensitive-info-pdf                  | en   | security,redaction            | Maps to auto-redact |

## How to add a row
1. Pick a `keyword` from `data/keyword-strategy.json` with `status: planned`.
2. Add a row here with the slug, language, and 2–5 tags.
3. Draft the article from `content/_templates/howto.mdx`.
4. When the article goes live, the `Mark Article Published` hook flips the
   row to `published` and stamps the date.
