# Content Pipeline — Tasks

Status legend: [ ] todo · [~] in progress · [x] done

## Phase 0 — Foundations
- [ ] T0.1 Decide canonical domain (blocker for sitemap real URLs).
- [ ] T0.2 Create `templates/tool.html`, `templates/category.html`, `templates/article.html` skeletons.
- [ ] T0.3 Add `pages/` directory to repo with a `.gitkeep`.

## Phase 1 — Generator
- [ ] T1.1 Implement `scripts/gen-tool-page.mjs` (reads `tools-data.js`, writes missing tool stubs from `templates/tool.html`).
- [ ] T1.2 Implement `scripts/gen-category-page.mjs` (one page per category, lists tools).
- [ ] T1.3 Add npm script `pnpm run content:gen` (or `node scripts/...`) — pipeline-friendly, idempotent.

## Phase 2 — SEO assets
- [ ] T2.1 Sitemap.xml — initial version covering home + all tool pages (depends on T0.1, T1.1).
- [ ] T2.2 Robots.txt — allow all, point to sitemap.
- [ ] T2.3 Canonical + OG tags injected into every generated page.
- [ ] T2.4 Run `Schema Generator` hook on each tool page; commit JSON-LD blocks.

## Phase 3 — Internal linking
- [ ] T3.1 "Related tools" component rendered into every tool stub (2–4 siblings).
- [ ] T3.2 Breadcrumb block on every tool & category page.
- [ ] T3.3 Home page hero links to all 5 category hubs.

## Phase 4 — Quality gate
- [ ] T4.1 Lint script `scripts/lint-content.mjs`: unique title/desc, canonical present, valid JSON-LD, page in sitemap.
- [ ] T4.2 Wire lint into CI; fail PR on any violation.
- [ ] T4.3 Broken-link check across `pages/**` + `index.html`.

## Phase 5 — Authoring rollout
- [ ] T5.1 Brief template (Google-doc / markdown) for editor: target keyword, intent, primary CTA, 3 FAQ.
- [ ] T5.2 Backfill copy for the top-10 tools by search volume (priority list TBD).
- [ ] T5.3 Backfill remaining ~46 tools.

## Phase 6 — Long-form content
- [ ] T6.1 Choose Markdown vs HTML for articles (default: Markdown via `marked` at build).
- [ ] T6.2 Author 3 pillar how-to articles linking to top-10 tools.
- [ ] T6.3 Add "Articles" section to home and category hubs.

## Phase 7 — Maintenance
- [ ] T7.1 Sitemap regenerates on every merge to main (CI step).
- [ ] T7.2 Stale-page report (>180d untouched) emitted weekly.
- [ ] T7.3 Removal flow: when a tool is deleted from `tools-data.js`, generator emits a 410/301 directive list for ops.

## Dependencies
- T2.1 depends on T0.1, T1.1.
- T2.4 depends on the `Schema Generator` hook (already in `.kiro/hooks/`).
- T4.x depends on T2.x finished pages.
