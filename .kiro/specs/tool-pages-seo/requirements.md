# Tool Pages SEO — Requirements

## 1. Purpose

Turn each entry in `js/tools-data.js` into a static, crawlable, fast-loading
landing page that ranks for that tool's primary keyword and links cleanly into
the SPA for the actual tool action.

## 2. Scope

### In scope

- A shared layout component (`_ToolStub.tsx`) that every tool page renders
  through.
- Static pages under `src/routes/tools/<slug>.tsx` and
  `src/routes/tools/<lang>/<slug>.tsx`.
- On-page SEO: H1, intro, "How it works", FAQ slot, Related Tools strip,
  breadcrumbs.
- Internal-linking: every tool page links to its category siblings and to
  the most relevant blog post.
- Schema slot in `<head>` populated by the `Schema Generator` hook.

### Out of scope

- The static-page renderer / framework decision (Astro, 11ty, custom build) —
  **decided separately**, this spec consumes whatever is chosen.
- Article content → `seo-blog-engine`.
- Sitemap, hreflang, canonical → `technical-seo`.
- Tool functionality itself (the action that runs when the user clicks "Open
  the tool") → that's the SPA, unchanged.

## 3. User stories

- As a **search visitor for "merge pdf"**, I land on a fast page that explains
  what the tool does, shows the trust signals (free, open source,
  self-hostable), and lets me start the action in one click.
- As an **editor**, I add a new tool to `tools-data.js` and get a working
  static stub for it without writing per-page boilerplate — the layout is
  shared.
- As a **reviewer**, I can tell at a glance whether a tool page meets the
  on-page checklist (H1 present, ≥3 FAQ, breadcrumb, related tools, schema
  slot).

## 4. Functional requirements

- **FR-1 Layout component:** A single component renders every tool page.
  Per-page differences are passed as props (title, description, keyword,
  toolId, category, FAQ items, hero copy).
- **FR-2 Required sections (in DOM order):**
  1. Skip-to-content link
  2. Header (logo, nav, language switcher placeholder)
  3. Breadcrumb (Home → Category → Tool)
  4. H1 with keyword
  5. Hero (one-paragraph description + primary CTA into the SPA)
  6. "How it works" — 3 numbered steps
  7. "Why use it" — 3 bullets pulling from `product.md` differentiators
  8. FAQ — ≥ 3 Q/A
  9. Related tools — 3-4 sibling tools from same category
  10. Footer
- **FR-3 Schema slot:** layout reserves a `<script type="application/ld+json"
  data-generated="schema-generator">` placeholder in `<head>`. Content
  injected by the Schema Generator hook.
- **FR-4 Lang & dir aware:** the layout takes `lang` and `dir` props. Sets
  `<html lang>` and `<html dir>` correctly. Defaults to `en` / `ltr`.
- **FR-5 Canonical & hreflang slots:** layout reserves slots for
  `<link rel="canonical">` and the hreflang cluster, populated at render time
  by the technical-SEO layer. The component does not invent these — it just
  ensures the slots exist.
- **FR-6 No fabricated data:** copy slots that the editor hasn't filled in
  show a clear placeholder (`TODO: write hero`), not generic marketing copy.

## 5. Non-functional requirements

- **NFR-1 Performance:** A tool page with the layout fully populated must
  pass the existing Lighthouse budget (`reports/perf-audit.md`):
  LCP ≤ 2.5 s, CLS ≤ 0.1, total weight ≤ 250 KB, third-party count = 0.
- **NFR-2 Accessibility:** WCAG 2.1 AA. Skip link, semantic headings,
  ≥ 4.5:1 contrast, every interactive element keyboard-reachable.
- **NFR-3 i18n:** Arabic variant must render correctly RTL with code blocks
  pinned LTR (per `seo-rules.md` §8).
- **NFR-4 No partial Tailwind classes** (per `tech.md` hard rules).

## 6. Success criteria

- All 56 tools in `tools-data.js` have at least the EN variant of the layout
  rendering with no `TODO` placeholders.
- Internal-linking audit (`audit_internal_links.py`) reports zero orphans
  among tool pages.
- Lighthouse CI passes on a representative sample (top-3 tool pages).
- A new tool added to `tools-data.js` produces a working static page in one
  step (add file under `src/routes/tools/`, no other file touched).

## 7. Inputs needed before tasks ship

- TODO(input): static-page renderer choice (Astro vs. 11ty vs. custom). The
  layout component is framework-agnostic (it's a function returning an
  object describing the DOM), so this choice can be deferred — but it must
  be made before pages actually render.
- TODO(input): per-tool FAQ content. The tool catalog has only `name`/`desc`,
  not Q/A. FAQ items will be authored separately and stored in
  `data/tool-faqs.json` or per-tool MDX files.
