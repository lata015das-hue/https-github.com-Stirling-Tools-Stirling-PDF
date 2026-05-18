# SEO Blog Engine — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Phase 1 — Renderer

- [ ] T1.1 Choose renderer (Astro default per `tech.md`).
- [ ] T1.2 Set up MDX integration with the renderer.
- [ ] T1.3 Confirm the existing 5 articles render without modification.

## Phase 2 — Article layout

- [ ] T2.1 Build article layout (`_ArticleLayout.tsx`) per `design.md` §2.
- [ ] T2.2 Extract `_Layout.tsx` shared primitives (header, footer,
  breadcrumb, CTA) so tool-page layout and article layout compose them.
- [ ] T2.3 Add reading-time calculation.
- [ ] T2.4 Implement TOC generation (server-side, from H2/H3).

## Phase 3 — Index pages

- [ ] T3.1 `/blog/` index page, 20 per page, paginated.
- [ ] T3.2 `/blog/tag/<tag>/` tag pages.
- [ ] T3.3 `/<lang>/blog/` language index.

## Phase 4 — Related content

- [ ] T4.1 Add related-articles scoring at build time, output
  `data/related-articles.json`.
- [ ] T4.2 Add related-tool mapping at build time, output
  `data/article-tool-cta.json` (key: article slug, value: tool id from
  frontmatter `keyword` lookup against `data/keyword-strategy.json`).

## Phase 5 — Validation

- [ ] T5.1 Wire `validate_articles.py` into the renderer's build step so a
  failing article fails the build (today it's a one-off script).
- [ ] T5.2 Add a "publish gate" CI step: any article with `draft: false`
  AND `published: true` must pass `validate_articles.py`. Drafts are not
  built.

## Phase 6 — Author / metadata polish

- [ ] T6.1 `data/authors.json` schema and seed data.
- [ ] T6.2 Author block component pulling from `data/authors.json`.

## Inputs blocking Phase 1

- TODO(input): renderer choice (default Astro).

## Inputs blocking Phase 6

- TODO(input): real author identities or commitment to "Stirling-PDF Team"
  as the only byline.
