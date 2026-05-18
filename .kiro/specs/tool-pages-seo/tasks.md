# Tool Pages SEO — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Task 1 (the user's stated execution scope)

- [ ] **T1. Build the shared layout component (`_ToolStub.tsx`).**
  - Replace the current minimal stub with the full contract from
    `design.md` §2.
  - Implement all 10 DOM sections from `design.md` §3.
  - Implement `lang` / `dir` aware rendering (RTL when `dir="rtl"`).
  - Implement breadcrumb auto-derivation from `category` and `toolId`.
  - Implement `relatedTools` auto-derivation from same-category siblings
    when prop is omitted.
  - Reserve canonical, hreflang, OG, and JSON-LD slots in `<head>` (empty
    placeholders that the technical-seo layer and the Schema Generator hook
    populate later).
  - **Done when:** the 10 existing per-tool stubs (`merge-pdf.tsx`,
    `compress-pdf.tsx`, etc.) compile against the new layout with no per-page
    boilerplate beyond `meta` + content slots.
  - **Verification:** read each of the 10 stubs; they should be ≤ 30 lines
    each (just `meta`, optional content overrides, the layout call).
  - **Audit pass:** `audit_tailwind_content.py` exits 0 against the new
    layout file. `lint_images.py` exits 0 (no images shipped in this task).

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
