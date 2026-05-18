# Tool Pages SEO — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Task 1 (the user's stated execution scope)

- [x] **T1. Build the shared layout component (`_ToolStub.tsx`).**
  - Replaced the minimal stub with the full contract from `design.md` §2.
  - Implemented all 10 DOM sections from `design.md` §3.
  - `lang` / `dir` aware rendering: defaults `dir` to `rtl` when `lang === "ar"`;
    breadcrumb order flips via `flex-row-reverse` under RTL. Inline UI strings
    table for `en` and `ar` (no i18n runtime — see `tech.md`).
  - Breadcrumb auto-derived from `category` (→ category display name) and
    `toolId` (→ H1, parsed from the SEO `title`).
  - `relatedTools` auto-derived from same-category siblings via a local
    `TOOL_CATALOG` that mirrors `js/tools-data.js` (sync invariant noted in
    the source comment). Caller can still override.
  - Head slots reserved: `<link rel="canonical">` and hreflang are empty
    with `data-managed="technical-seo"`; OG/Twitter meta tags carry the
    same sentinel; JSON-LD primary slot is an empty
    `<script type="application/ld+json" data-generated="schema-generator"
    data-tool-id="...">` for the Schema Generator hook to fill.
  - FR-6: missing FAQ renders an explicit `TODO: write FAQ`
    (`data-todo="faq"`), not generic copy.
  - **Verification (per-stub line count):** each of the 10 stubs is now 15
    lines (`wc -l src/routes/tools/*.tsx`), well under the 30-line ceiling.
  - **Audit pass:** `audit_tailwind_content.py` → exit 0 (4/4 class-bearing
    files inside globs; high CSS estimate 40 KB vs. 50 KB budget, 11 KB
    headroom). `lint_images.py` → exit 0 (the conditional hero `<img>`
    carries `width`/`height`/`alt`/`fetchpriority="high"`/`decoding="async"`/
    `data-fold="above"`, satisfying the above-the-fold opt-out path).

## Future tasks (out of scope for this iteration)

- T2. Author per-tool FAQ data (`data/tool-faqs.json` or per-tool MDX
  partials). 56 tools × 3-5 Q/A.
- T3. Author per-tool hero copy (catalog `desc` is too short). 56 tools × 1
  paragraph.
- T4. Wire chosen renderer (Astro per current default) and produce 56 static
  HTML files under `dist/`.
- T5. CI gate: every entry in `tools-data.js` has a corresponding
  `src/routes/tools/<slug>.tsx` or the build fails.
- T6. Arabic variants for the top-3 commercial tools (`merge-pdf`,
  `compress-pdf`, `pdf-to-jpg`). Real translation, not auto-translation
  (per `audit_i18n.py` recommendation).

## Inputs blocking T1 from real-world use

- None for the layout component itself — it's pure presentation logic.
  T1 ships with no inputs needed.

## Inputs blocking T2 / T3

- TODO(input): editorial capacity for 56 × (FAQ + hero). Likely batched: top
  10 commercial first, then ~weekly cadence for the rest.

## Inputs blocking T4

- TODO(input): renderer choice (Astro / 11ty / custom). Default in design:
  Astro.
- TODO(input): production hostname (also needed by `technical-seo`).
