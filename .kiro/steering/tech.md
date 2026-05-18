---
inclusion: always
---

# Tech facts — Stirling-PDF Free Frontend

The non-negotiable architectural facts of this repo. If something here
contradicts what you're about to ship, stop and update this file first.

## Today's stack (as actually deployed)

- **Plain HTML + vanilla JavaScript** in `index.html` and `js/*.js`. No
  framework. No bundler. No router library — the SPA uses hash-based
  routing in `js/router.js`.
- **Tailwind CSS via CLI** (`tailwindcss@^3.4`). Source: `src/styles/tailwind.css`.
  Output: `dist/tailwind.css` (gitignored, built via `npm run build:css`).
  The Tailwind CDN is no longer used (see `reports/perf-audit.md` R-1).
- **Backend** is a separate Stirling-PDF instance reachable at
  `BACKEND_URL` (default `http://localhost:8080`). All tool actions are
  REST POSTs to `/api/v1/{group}/{tool-name}`.

## Future stack (decided, not yet wired)

- **Static landing pages** under `src/routes/tools/<slug>.tsx` and
  `src/routes/tools/<lang>/<slug>.tsx`. Today these stubs exist but
  nothing renders them — they are scaffolding for a future static-page
  layer. Spec: `.kiro/specs/tool-pages-seo/`.
- **MDX blog content** under `content/blog/**/*.mdx`. Same situation:
  authored, not yet rendered. Spec: `.kiro/specs/seo-blog-engine/`.
- **Static path-based routing** to replace hash routes once the static
  layer ships. The current SPA URL `index.html#/tool/<id>` becomes the
  fallback the static page links into.

## Where things live

| Path | Purpose |
|---|---|
| `index.html` | SPA entry. `<html lang="en" dir="ltr">`. Loads `dist/tailwind.css`, then defers all five `js/*.js` files. |
| `js/tools-data.js` | The 56-tool catalog. **Source of truth** for tool ids — never invent ids. |
| `js/{api,router,components,app}.js` | SPA implementation. ~700 lines total. |
| `src/routes/tools/*.tsx` | Static-page stubs (top-10 commercial keywords). Scaffolding only today. |
| `src/routes/tools/_ToolStub.tsx` | Shared layout component for the stubs. |
| `src/styles/tailwind.css` | Tailwind source. Includes one project-specific `line-clamp-2` utility. |
| `content/blog/**/*.mdx` | Blog content. AR variants under `content/blog/ar/`. |
| `content/_templates/howto.mdx` | Canonical how-to template. |
| `data/keyword-strategy.json` | Keyword strategy. Volumes are seed estimates flagged `notes.estimated: true`. |
| `sitemap.xml`, `robots.txt` | Generated. Host is `https://example.com` placeholder until the real domain lands. |
| `reports/*.md` | Audit outputs. Read-only artifacts; never hand-edited. |
| `.kiro/hooks/*.kiro.hook` | Kiro hooks. The Kiro runtime loads files with the `.kiro.hook` extension; `.json` does not load. |
| `.kiro/scripts/*.py` | Python stdlib audit scripts. CI runs them. |
| `.kiro/steering/*.md` | This directory. |
| `.kiro/specs/*/{requirements,design,tasks}.md` | Specs. Each spec is a triplet. |
| `.github/workflows/build.yml` | Fast (~30s) per-push verification. |
| `.github/workflows/lighthouse.yml` | Per-PR performance budget. |
| `.lighthouserc.json` | Lighthouse CI assertions. |

## Hard rules for tools-data

- The `id` field of every entry in `TOOLS` is **canonical**. SEO copy,
  routes, links, schema, sitemap entries — everything keys off these ids.
- Never invent a tool id. If you need a tool that doesn't exist in
  `tools-data.js`, the answer is "the SPA doesn't expose it."
- The `category` values are the literal five strings: `page-operations`,
  `convert`, `security`, `other`, `advance`. (Yes, `advance` not `advanced`.)
- Tailwind class strings stored in `tools-data.js` (`color`, `colorLight`)
  are referenced by interpolation in `js/components.js`. They are real
  classes that Tailwind picks up via the `content` glob. Don't refactor
  these into partial concatenations like `bg-${color}-500` — Tailwind's
  scanner will not see the result. (R-3.)

## Hard rules for class strings

- All Tailwind class strings must appear as **complete literals** in
  files matched by `tailwind.config.js` `content`. The
  `audit_tailwind_content.py` script blocks PRs that violate this.

## CI pipeline (current, see `reports/perf-audit.md`)

```
Build workflow (every push):
  install -> R-3 audit -> R-4 lint -> npm run build:css -> verify -> upload artifact

Lighthouse workflow (PRs and main pushes):
  install -> R-3 audit -> R-4 lint -> npm run build:css -> verify -> Lighthouse CI
```

## Hard rules for everything else

- No third-party CDNs in `<head>`. Adding one fails Lighthouse
  (`resource-summary:third-party:count = 0`).
- No custom fonts unless the rule in `performance-rules.md` §2 is
  followed end to end (subset, woff2, preload, font-display: swap).
- No images without `width`, `height`, `alt`, and `loading="lazy"`
  unless `fetchpriority="high"` (`performance-rules.md` §1, R-4).
- No partial Tailwind class concatenation (R-3, see above).
- No fabricated keyword volumes, fake authors, fabricated dates,
  fake ratings, or invented schema fields (`product.md`, `seo-rules.md`).

## What's deliberately NOT in this stack

- **No TypeScript runtime.** The `.tsx` files exist as scaffolding for a
  future framework decision; they are not compiled today.
- **No state management library.** The SPA holds state in module-level
  variables in `app.js`. If you need more than that, the answer is the
  static-page migration in `tool-pages-seo`.
- **No analytics yet.** Tracking is out of scope until
  `marketing-analytics` lands.
- **No i18n runtime.** Language variants live as separate files
  (`content/blog/ar/...`, `src/routes/tools/ar/...`); there is no
  translation hash table or runtime locale switcher.
