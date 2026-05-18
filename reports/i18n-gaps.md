# i18n gap audit

_Generated: 2026-05-18 by `.kiro/scripts/audit_i18n.py`._

## Scope

Pairs every page in `src/routes/` and `content/blog/` with its language counterparts. Today the repo tracks English (default) and Arabic. Only blog and tool-route pages are paired; SPA-internal pages (`index.html`) are out of scope because their copy is data-driven from `js/tools-data.js`, not authored markup.

Path conventions used by this audit:

- English (default): `content/blog/<slug>.mdx` and `src/routes/tools/<slug>.tsx`
- Arabic: `content/blog/ar/<slug>.mdx` and `src/routes/tools/ar/<slug>.tsx`

## What this audit can and cannot verify

- **Can verify (static):** file pairs exist, frontmatter `lang`/`dir`/`slug` consistency, presence of meta in TSX, internal-link parity at the tool-id level (the Arabic page should link to the same set of underlying tool ids as the English one).
- **Cannot verify (out of scope):** translation correctness — that is editorial review, not a script's call. Auto-translating UI copy is how you ship bad localization, so the report flags missing translations rather than producing them.
- **Cannot verify yet (no rendered HTML):** the `<head>` `<link rel="alternate" hreflang="…">` tags. The static-page layer that emits the rendered `<head>` does not exist yet (tracked in `.kiro/specs/content-pipeline/`). The required hreflang shape is described below for reference; verification will become possible once the static layer ships.

## Required hreflang shape (reference)

Every paired page MUST emit, in the rendered HTML `<head>`, a complete cluster: a self-referential alternate, every other-language alternate, **and** an `x-default`. Missing the self-reference or `x-default` is the most common reason Google ignores the cluster.

Example for the merge-pdf tool once both languages exist:

```html
<link rel="alternate" hreflang="en" href="https://example.com/tools/merge-pdf">
<link rel="alternate" hreflang="ar" href="https://example.com/ar/tools/merge-pdf">
<link rel="alternate" hreflang="x-default" href="https://example.com/tools/merge-pdf">
```

And the page itself sets `<html lang="en" dir="ltr">` / `<html lang="ar" dir="rtl">`. Today only `index.html` sets `lang`/`dir`, and only for English. That's a known gap, captured in the recommendations at the end of this report.

## Summary

| Surface | Slugs | Complete (en+ar) | Missing ar | Missing en |
|---|---:|---:|---:|---:|
| Blog (`content/blog/**/*.mdx`)        | 5 | 0 | 4 | 1 |
| Tools (`src/routes/tools/**/*.tsx`)   | 10 | 0 | 10 | 0 |

## Blog pairing

| Slug | Status | EN | AR | Notes |
|---|---|---|---|---|
| `compress-pdf-without-losing-quality` | missing-ar | `content/blog/compress-pdf-without-losing-quality.mdx` | _(missing)_ | Translate to AR |
| `how-to-merge-pdf-files-online-free` | missing-ar | `content/blog/how-to-merge-pdf-files-online-free.mdx` | _(missing)_ | Translate to AR |
| `make-scanned-pdf-searchable` | missing-ar | `content/blog/make-scanned-pdf-searchable.mdx` | _(missing)_ | Translate to AR |
| `merge-pdf-majanan` | missing-en | _(missing)_ | `content/blog/ar/merge-pdf-majanan.mdx` | Source AR exists but no EN canonical |
| `remove-pdf-password-without-software` | missing-ar | `content/blog/remove-pdf-password-without-software.mdx` | _(missing)_ | Translate to AR |

## Tool route pairing

| Slug | Status | EN | AR | meta.keyword (en) | Notes |
|---|---|---|---|---|---|
| `add-watermark-pdf` | missing-ar | `src/routes/tools/add-watermark-pdf.tsx` | _(missing)_ | `add watermark to pdf` | Translate to AR (toolId `add-watermark`) |
| `compress-pdf` | missing-ar | `src/routes/tools/compress-pdf.tsx` | _(missing)_ | `compress pdf` | Translate to AR (toolId `compress-pdf`) |
| `jpg-to-pdf` | missing-ar | `src/routes/tools/jpg-to-pdf.tsx` | _(missing)_ | `jpg to pdf` | Translate to AR (toolId `img-to-pdf`) |
| `merge-pdf` | missing-ar | `src/routes/tools/merge-pdf.tsx` | _(missing)_ | `merge pdf` | Translate to AR (toolId `merge-pdfs`) |
| `ocr-pdf` | missing-ar | `src/routes/tools/ocr-pdf.tsx` | _(missing)_ | `ocr pdf` | Translate to AR (toolId `ocr-pdf`) |
| `pdf-to-jpg` | missing-ar | `src/routes/tools/pdf-to-jpg.tsx` | _(missing)_ | `pdf to jpg` | Translate to AR (toolId `pdf-to-img`) |
| `pdf-to-word` | missing-ar | `src/routes/tools/pdf-to-word.tsx` | _(missing)_ | `pdf to word` | Translate to AR (toolId `pdf-to-word`) |
| `rotate-pdf` | missing-ar | `src/routes/tools/rotate-pdf.tsx` | _(missing)_ | `rotate pdf` | Translate to AR (toolId `rotate-pdf`) |
| `split-pdf` | missing-ar | `src/routes/tools/split-pdf.tsx` | _(missing)_ | `split pdf` | Translate to AR (toolId `split-pages`) |
| `unlock-pdf` | missing-ar | `src/routes/tools/unlock-pdf.tsx` | _(missing)_ | `unlock pdf` | Translate to AR (toolId `remove-password`) |

## Action list

Each missing item below needs a *real* translation by a human Arabic-speaking editor (or a translator + Arabic-speaking reviewer). Auto-translation is explicitly out of scope here. The repo's existing Arabic article (`content/blog/ar/merge-pdf-majanan.mdx`) is the style reference.

### Tool routes missing Arabic

Create each as `src/routes/tools/ar/<slug>.tsx`. Reuse the same `meta.toolId` as the English file (the underlying SPA tool is the same — only the surface copy is translated). Slug stays in English so the URL pattern is `/ar/tools/merge-pdf` (matches the SPA-style route prefix).

Required `meta` fields per stub: `title`, `description`, `keyword`, `toolId` (must equal EN), `category`, `appUrl` (same SPA URL as EN), and an explicit `lang: "ar"`, `dir: "rtl"`.

| Slug | Source EN file | EN keyword | Target AR file |
|---|---|---|---|
| `add-watermark-pdf` | `src/routes/tools/add-watermark-pdf.tsx` | `add watermark to pdf` | `src/routes/tools/ar/add-watermark-pdf.tsx` |
| `compress-pdf` | `src/routes/tools/compress-pdf.tsx` | `compress pdf` | `src/routes/tools/ar/compress-pdf.tsx` |
| `jpg-to-pdf` | `src/routes/tools/jpg-to-pdf.tsx` | `jpg to pdf` | `src/routes/tools/ar/jpg-to-pdf.tsx` |
| `merge-pdf` | `src/routes/tools/merge-pdf.tsx` | `merge pdf` | `src/routes/tools/ar/merge-pdf.tsx` |
| `ocr-pdf` | `src/routes/tools/ocr-pdf.tsx` | `ocr pdf` | `src/routes/tools/ar/ocr-pdf.tsx` |
| `pdf-to-jpg` | `src/routes/tools/pdf-to-jpg.tsx` | `pdf to jpg` | `src/routes/tools/ar/pdf-to-jpg.tsx` |
| `pdf-to-word` | `src/routes/tools/pdf-to-word.tsx` | `pdf to word` | `src/routes/tools/ar/pdf-to-word.tsx` |
| `rotate-pdf` | `src/routes/tools/rotate-pdf.tsx` | `rotate pdf` | `src/routes/tools/ar/rotate-pdf.tsx` |
| `split-pdf` | `src/routes/tools/split-pdf.tsx` | `split pdf` | `src/routes/tools/ar/split-pdf.tsx` |
| `unlock-pdf` | `src/routes/tools/unlock-pdf.tsx` | `unlock pdf` | `src/routes/tools/ar/unlock-pdf.tsx` |

### Blog posts missing Arabic

Create each as `content/blog/ar/<slug>.mdx`. Must follow `.kiro/steering/seo-rules.md` §8 (Arabic typography: `«»` quotes, `،` and `؟` punctuation, code blocks wrapped in `<div dir="ltr">`).

- `compress-pdf-without-losing-quality` — translate from `content/blog/compress-pdf-without-losing-quality.mdx` to `content/blog/ar/compress-pdf-without-losing-quality.mdx`
- `how-to-merge-pdf-files-online-free` — translate from `content/blog/how-to-merge-pdf-files-online-free.mdx` to `content/blog/ar/how-to-merge-pdf-files-online-free.mdx`
- `make-scanned-pdf-searchable` — translate from `content/blog/make-scanned-pdf-searchable.mdx` to `content/blog/ar/make-scanned-pdf-searchable.mdx`
- `remove-pdf-password-without-software` — translate from `content/blog/remove-pdf-password-without-software.mdx` to `content/blog/ar/remove-pdf-password-without-software.mdx`

## Blocked on the static-page layer

These items can't be fixed at the source-file level today; they need the static-page layer described in `.kiro/specs/content-pipeline/`:

- **`<link rel="alternate" hreflang="…">` cluster.** Lives in rendered `<head>`. Required shape is documented above.
- **`<html lang>` / `<html dir>` per page.** Currently only the SPA shell `index.html` sets these (and only for English). Each language variant of a static page needs its own correct attributes.
- **Sitemap `<xhtml:link rel="alternate">`.** The `Sitemap Updater` hook in `.kiro/hooks/sitemap-updater.kiro.hook` does not yet emit hreflang sub-elements. Worth a follow-up issue once the `ar/` route prefix exists.
- **Canonical URLs.** Each language variant must self-canonical; AR must not point to EN as canonical and vice versa.

## Recommendations

1. **Don't auto-translate.** Pick the top-3 highest-traffic tool stubs (e.g. `merge-pdf`, `compress-pdf`, `pdf-to-jpg`) for a real Arabic translation pass first. Validate quality, then expand.
2. **Add a `lang` field to `_ToolStub.tsx`.** Pass it to a `<html lang>` attribute when the static layer renders. Today the prop doesn't exist; the future static-page wrapper will need it.
3. **Extend `Sitemap Updater` to emit hreflang.** Once `src/routes/tools/ar/<slug>.tsx` files appear, the hook should produce `<xhtml:link rel="alternate" hreflang="…">` per `<url>` group.
4. **Run this audit on every PR that adds an `.mdx` or `.tsx` route.** A CI step (similar to R-3/R-4) would prevent translation drift. Suggested gating: warn on first detection, error after a grace period.
5. **Mirror the file structure exactly.** `src/routes/tools/<slug>.tsx` ↔ `src/routes/tools/ar/<slug>.tsx` — no fancy slug transliteration, no per-language slug renaming. Slug parity is what makes this audit cheap.

