# `src/routes/tools/`

Static-page route stubs for **every tool in `js/tools-data.js`** (56 tools across 5 categories). One `.tsx` file per tool; all of them render through the shared `_ToolStub.tsx` layout.

## Why these exist
The current frontend is a hash-route SPA (`index.html#/tool/<id>`), which crawlers do not index. The plan in `.kiro/specs/tool-pages-seo/` is to publish static landing pages whose canonical URLs are crawlable, and which then send the user into the SPA for the actual tool UI.

These `.tsx` files are scaffolding for that migration:
- They cover the full catalog (success criterion in `requirements.md` §6 and the future T5 CI gate in `tasks.md`).
- They use a single shared `_ToolStub` component so per-page edits stay narrow (just `meta`, optional content slots).
- They have no runtime dependencies — no framework is wired up yet. Treat them as content scaffolding (see `tech.md` "What's deliberately NOT in this stack").

## Slug ↔ tool id

The filename slug is what becomes `/tools/<slug>`. It usually equals the tool id from `js/tools-data.js`, but for keyword-driven SEO we sometimes diverge — a tool whose canonical id is `pdf-to-img` ships at `/tools/pdf-to-jpg` because that's what users search for. The slug overrides live in `_ToolStub.tsx` `TOOL_CATALOG`.

| Filename | Slug | Tool id (in `js/tools-data.js`) | Category |
|---|---|---|---|
| `merge-pdf.tsx`              | `/tools/merge-pdf`              | `merge-pdfs`              | page-operations |
| `split-pdf.tsx`              | `/tools/split-pdf`              | `split-pages`             | page-operations |
| `remove-pages.tsx`           | `/tools/remove-pages`           | `remove-pages`            | page-operations |
| `rotate-pdf.tsx`             | `/tools/rotate-pdf`             | `rotate-pdf`              | page-operations |
| `rearrange-pages.tsx`        | `/tools/rearrange-pages`        | `rearrange-pages`         | page-operations |
| `scale-pages.tsx`            | `/tools/scale-pages`            | `scale-pages`             | page-operations |
| `crop-pdf.tsx`               | `/tools/crop-pdf`               | `crop`                    | page-operations |
| `add-page-numbers.tsx`       | `/tools/add-page-numbers`       | `add-page-numbers`        | page-operations |
| `multi-page-layout.tsx`      | `/tools/multi-page-layout`      | `multi-page-layout`       | page-operations |
| `extract-pages.tsx`          | `/tools/extract-pages`          | `extract-pages`           | page-operations |
| `pdf-to-single-page.tsx`     | `/tools/pdf-to-single-page`     | `pdf-to-single-page`      | page-operations |
| `overlay-pdf.tsx`            | `/tools/overlay-pdf`            | `overlay-pdf`             | page-operations |
| `booklet-imposition.tsx`     | `/tools/booklet-imposition`     | `booklet-imposition`      | page-operations |
| `pdf-to-jpg.tsx`             | `/tools/pdf-to-jpg`             | `pdf-to-img`              | convert |
| `jpg-to-pdf.tsx`             | `/tools/jpg-to-pdf`             | `img-to-pdf`              | convert |
| `pdf-to-word.tsx`            | `/tools/pdf-to-word`            | `pdf-to-word`             | convert |
| `pdf-to-powerpoint.tsx`      | `/tools/pdf-to-powerpoint`      | `pdf-to-presentation`     | convert |
| `pdf-to-text.tsx`            | `/tools/pdf-to-text`            | `pdf-to-text`             | convert |
| `pdf-to-html.tsx`            | `/tools/pdf-to-html`            | `pdf-to-html`             | convert |
| `html-to-pdf.tsx`            | `/tools/html-to-pdf`            | `html-to-pdf`             | convert |
| `markdown-to-pdf.tsx`        | `/tools/markdown-to-pdf`        | `markdown-to-pdf`         | convert |
| `file-to-pdf.tsx`            | `/tools/file-to-pdf`            | `file-to-pdf`             | convert |
| `pdf-to-pdfa.tsx`            | `/tools/pdf-to-pdfa`            | `pdf-to-pdfa`             | convert |
| `pdf-to-csv.tsx`             | `/tools/pdf-to-csv`             | `pdf-to-csv`              | convert |
| `pdf-to-xml.tsx`             | `/tools/pdf-to-xml`             | `pdf-to-xml`              | convert |
| `pdf-to-markdown.tsx`        | `/tools/pdf-to-markdown`        | `pdf-to-markdown`         | convert |
| `eml-to-pdf.tsx`             | `/tools/eml-to-pdf`             | `eml-to-pdf`              | convert |
| `pdf-to-epub.tsx`            | `/tools/pdf-to-epub`            | `pdf-to-epub`             | convert |
| `add-password.tsx`           | `/tools/add-password`           | `add-password`            | security |
| `unlock-pdf.tsx`             | `/tools/unlock-pdf`             | `remove-password`         | security |
| `change-permissions.tsx`     | `/tools/change-permissions`     | `change-permissions`      | security |
| `add-watermark-pdf.tsx`      | `/tools/add-watermark-pdf`      | `add-watermark`           | security |
| `cert-sign.tsx`              | `/tools/cert-sign`              | `cert-sign`               | security |
| `remove-pdf-signature.tsx`   | `/tools/remove-pdf-signature`   | `remove-cert-sign`        | security |
| `sanitize-pdf.tsx`           | `/tools/sanitize-pdf`           | `sanitize-pdf`            | security |
| `redact-pdf.tsx`             | `/tools/redact-pdf`             | `auto-redact`             | security |
| `validate-pdf-signature.tsx` | `/tools/validate-pdf-signature` | `validate-signature`      | security |
| `timestamp-pdf.tsx`          | `/tools/timestamp-pdf`          | `timestamp-pdf`           | security |
| `unlock-pdf-forms.tsx`       | `/tools/unlock-pdf-forms`       | `unlock-pdf-forms`        | security |
| `ocr-pdf.tsx`                | `/tools/ocr-pdf`                | `ocr-pdf`                 | other |
| `extract-images.tsx`         | `/tools/extract-images`         | `extract-images`          | other |
| `flatten-pdf.tsx`            | `/tools/flatten-pdf`            | `flatten`                 | other |
| `edit-pdf-metadata.tsx`      | `/tools/edit-pdf-metadata`      | `update-metadata`         | other |
| `remove-blank-pages.tsx`     | `/tools/remove-blank-pages`     | `remove-blanks`           | other |
| `remove-pdf-annotations.tsx` | `/tools/remove-pdf-annotations` | `remove-annotations`      | other |
| `pdf-info.tsx`               | `/tools/pdf-info`               | `get-info-on-pdf`         | other |
| `add-stamp-to-pdf.tsx`       | `/tools/add-stamp-to-pdf`       | `add-stamp`               | other |
| `add-pdf-attachments.tsx`    | `/tools/add-pdf-attachments`    | `add-attachments`         | other |
| `show-pdf-javascript.tsx`    | `/tools/show-pdf-javascript`    | `show-javascript`         | other |
| `edit-pdf-bookmarks.tsx`     | `/tools/edit-pdf-bookmarks`     | `edit-table-of-contents`  | other |
| `compress-pdf.tsx`           | `/tools/compress-pdf`           | `compress-pdf`            | advance |
| `repair-pdf.tsx`             | `/tools/repair-pdf`             | `repair`                  | advance |
| `auto-rename-pdf.tsx`        | `/tools/auto-rename-pdf`        | `auto-rename`             | advance |
| `extract-scans-from-pdf.tsx` | `/tools/extract-scans-from-pdf` | `extract-image-scans`     | advance |
| `pdf-scanner-effect.tsx`     | `/tools/pdf-scanner-effect`     | `scanner-effect`          | advance |
| `invert-pdf-colors.tsx`      | `/tools/invert-pdf-colors`      | `replace-invert-pdf`      | advance |

Total: **56 stubs**, matching the 56 tools in `js/tools-data.js`.

## Adding a new stub
1. Add the tool to `js/tools-data.js` `TOOLS` array (the canonical source of truth — never invent ids).
2. Add a matching entry to `TOOL_CATALOG` in `_ToolStub.tsx`. Set a `slug` override only if the SEO-driven URL differs from the tool id.
3. Create `src/routes/tools/<slug>.tsx`. The 15-line template is identical to every other file in this directory:
   ```tsx
   import ToolStub, { type ToolStubProps } from "./_ToolStub";

   export const meta: ToolStubProps = {
     title: "...",
     description: "...",
     keyword: "...",
     toolId: "<id-from-tools-data.js>",
     category: "<one-of-five-canonical-strings>",
     appUrl: "/index.html#/tool/<id-from-tools-data.js>",
   };

   export default function Page() {
     return <ToolStub {...meta} />;
   }
   ```
4. The `Sitemap Updater` hook (which watches `src/routes/**/*.tsx`) picks up the new file on save and refreshes `sitemap.xml`.

## What lives where in the stub
- `meta` is the only thing per-page. Type is `ToolStubProps` (exported from `_ToolStub.tsx`).
- All 10 DOM sections (skip link, header, breadcrumb, H1/hero/CTA, how-it-works, why, FAQ, related, footer) are rendered by `_ToolStub` — page authors don't touch them.
- Per-tool content overrides go into the optional fields on `meta`: `heroParagraph`, `howItWorks`, `whyBullets`, `faq`, `relatedTools`, `heroImage`. Today none of the 56 stubs override these — that's T2/T3 work in `tasks.md`.
