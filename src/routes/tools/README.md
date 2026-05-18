# `src/routes/tools/`

Stub static-page routes for the **top 10 commercial PDF tool keywords**, generated from `data/keyword-strategy.json`.

## Why these exist
The current frontend is a hash-route SPA (`index.html#/tool/<id>`), which crawlers do not index. The plan in `.kiro/specs/content-pipeline/` is to publish static landing pages whose canonical URLs are crawlable, and which then send the user into the SPA for the actual tool UI.

These `.tsx` files are scaffolding for that migration:
- They provide a known set of routes for the **`Sitemap Updater`** Kiro hook to enumerate (it watches `src/routes/**/*.tsx`).
- They use a single shared `_ToolStub` component so per-page edits stay narrow (just `meta`).
- They have no runtime dependencies — no framework is wired up yet. Treat them as content scaffolding.

## Files

| File | Slug | Keyword | Tool id (in `js/tools-data.js`) |
|---|---|---|---|
| `merge-pdf.tsx`         | `/tools/merge-pdf`         | merge pdf            | `merge-pdfs`      |
| `compress-pdf.tsx`      | `/tools/compress-pdf`      | compress pdf         | `compress-pdf`    |
| `pdf-to-word.tsx`       | `/tools/pdf-to-word`       | pdf to word          | `pdf-to-word`     |
| `pdf-to-jpg.tsx`        | `/tools/pdf-to-jpg`        | pdf to jpg           | `pdf-to-img`      |
| `jpg-to-pdf.tsx`        | `/tools/jpg-to-pdf`        | jpg to pdf           | `img-to-pdf`      |
| `split-pdf.tsx`         | `/tools/split-pdf`         | split pdf            | `split-pages`     |
| `ocr-pdf.tsx`           | `/tools/ocr-pdf`           | ocr pdf              | `ocr-pdf`         |
| `unlock-pdf.tsx`        | `/tools/unlock-pdf`        | unlock pdf           | `remove-password` |
| `rotate-pdf.tsx`        | `/tools/rotate-pdf`        | rotate pdf           | `rotate-pdf`      |
| `add-watermark-pdf.tsx` | `/tools/add-watermark-pdf` | add watermark to pdf | `add-watermark`   |

## Adding a new stub
1. Add an entry to `data/keyword-strategy.json` (`keywords[]` and, if commercial, `topCommercialPages[]`).
2. Create a new `<slug>.tsx` next to the others, importing `_ToolStub`.
3. Set `meta.toolId` to a real id from `js/tools-data.js`. Never invent ids.
4. The `Sitemap Updater` hook will pick up the new file on save and refresh `sitemap.xml`.
