# Technical SEO — Tasks

Status legend: [ ] todo · [~] in progress · [x] done · [!] blocked

## Tasks 1-4 (the user's stated execution scope)

- [ ] **T1. Single-source domain resolver.**
  - Add `data/site-config.json` with `{ "siteUrl": "https://example.com" }`.
  - Add `.kiro/scripts/get_site_url.py` that returns `SITE_URL` env > config
    file > placeholder, and prints a `::warning::` when the placeholder fires.
  - Refactor `sitemap.xml` regeneration (in `sitemap-updater` hook) and
    `robots.txt` to consume the resolver.
  - **Done when:** `SITE_URL=https://stirlingpdf.com python3 -c "..."` produces
    a sitemap whose every `<loc>` uses the env var, and the existing
    sitemap structure is preserved.

- [ ] **T2. Canonical + lang on `index.html`.**
  - Add `<link rel="canonical" href="<resolved-url>">` to `index.html` head.
  - Confirm `<html lang="en" dir="ltr">` is correct and document why
    (SPA shell, English by default, language switcher will rewrite).
  - Add `<meta property="og:locale" content="en_US">` for OG completeness.
  - **Done when:** the SPA shell has a self-canonical pointing at `<host>/`
    and the View-Source HTML has `lang="en"`.

- [ ] **T3. hreflang scaffolding.**
  - Extend `audit_i18n.py` to emit a JSON file
    (`reports/i18n-hreflang-clusters.json`) with the full cluster shape per
    URL group. This becomes the input the future static-page renderer
    consumes.
  - Document the cluster shape in `design.md` §2.5 (already done; this task
    just produces the data).
  - Extend the `sitemap-updater` hook prompt to include hreflang sub-elements
    when the cluster JSON is non-empty.
  - **Done when:** `audit_i18n.py` produces `reports/i18n-hreflang-clusters.json`
    and the regenerated `sitemap.xml` includes hreflang for any pair where
    both en and ar files exist (today: zero pairs, so the file is empty —
    that's the expected output).

- [ ] **T4. 301 / canonical strategy lock.**
  - Write `reports/canonical-strategy.md` choosing Option A (static page is
    canonical, SPA URL is a working sibling).
  - Document in the doc: when the static-page layer ships, what the SPA route
    must emit (a `<link rel="canonical">` to the static URL via JS), and what
    the static page must emit (self-canonical).
  - **Done when:** the strategy doc exists, the team has read it, and the
    existing SPA `<head>` has a TODO comment marking where the JS-emitted
    canonical will live.

## Future tasks (out of scope for this iteration)

- T5. Wire schema-generator hook output into CI as a gate (presence check +
  JSON validity).
- T6. Add a real Search Console integration to `marketing-analytics` so the
  sitemap and indexability claims here are *measured*.
- T7. International expansion: French / Spanish / German variants if the
  Arabic experiment lands well. Triggers re-running this spec's hreflang
  work for n languages instead of 2.

## Inputs blocking T1 from real-world use

- TODO(input): the real production hostname.
- TODO(input): confirmation that we want `https` (assumed yes) and the canonical
  host has no `www` (assumed yes).

T1 ships *configurable* so these inputs can be supplied later without code changes.
