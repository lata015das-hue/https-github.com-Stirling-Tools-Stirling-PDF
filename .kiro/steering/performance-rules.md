---
inclusion: fileMatch
fileMatchPattern: "{**/*.html,**/*.htm,**/*.tsx,**/*.mdx,index.html}"
---

# Performance rules

These rules apply to every HTML page, MDX article, and TSX route in the repo.
They exist because the project ships as a zero-build static site today and a
single bad asset can dominate LCP. Reviewers enforce in PR; some are also
checked by `Optimize Article` and `Schema Generator` hooks.

## 1. Images
- Every `<img>` MUST have `width`, `height`, and meaningful `alt`. Empty `alt=""` is allowed only for purely decorative images.
- Every `<img>` not above the fold MUST have `loading="lazy"` and `decoding="async"`.
- Prefer `<picture>` with a `<source type="image/webp">` (or AVIF) and a JPEG/PNG fallback. Don't ship a single 2 MB PNG.
- Hero/LCP image is the **only** image allowed without `loading="lazy"`. Mark it `fetchpriority="high"`.
- Don't size images larger than they're displayed at 2x DPR. A 1200-wide hero rendered at 600px should be ~1200px max source, not 4000px.

## 2. Fonts
- Avoid custom fonts unless there's a brand reason. The current site relies on system fonts.
- If a custom font is added: subset it, ship `.woff2` only, and add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the one or two faces used above the fold.
- Use `font-display: swap` so text is never invisible during load.
- Never load fonts from a third-party CDN without a `preconnect`.

## 3. Scripts
- All `<script src="...">` outside `<head>` for above-the-fold critical work MUST use `defer` (preserves order, runs after parse) or `async` (no order guarantee).
- Inline `<script>` blocks in `<head>` are reserved for tiny config (e.g. the Tailwind theme block) — anything heavier belongs in a deferred file.
- Cross-origin script CDNs need a `<link rel="preconnect">` warm-up.
- Do not introduce a new render-blocking script in `<head>` without a perf review.

## 4. CSS
- The page is allowed exactly ONE inline `<style>` block in `<head>` for project-specific utilities not covered by Tailwind. Anything bigger goes into a built CSS file.
- Don't redeclare utilities Tailwind already ships (e.g. `animate-spin`, `line-clamp-*` once `@tailwindcss/line-clamp` is enabled).
- Vue / Alpine / framework idioms (`[v-cloak]`, `x-cloak`) MUST NOT exist unless that framework is actually loaded on the page.

## 5. Network
- Every cross-origin host the page hits early (CDN, backend) gets a `<link rel="preconnect">` or `dns-prefetch` in `<head>`.
- Static assets (JS, CSS, images, fonts) should be served with long `Cache-Control` (≥ 30 days) once the build/CDN story exists.

## 6. Tailwind CDN exception
- The current site uses the Tailwind CDN runtime. This is a known performance debt tracked in `reports/perf-audit.md` (R-1). Do NOT add new pages that rely on Tailwind plugins, arbitrary values that depend on JIT, or dynamic class strings constructed at runtime — that work needs to survive a future move to a precompiled CSS file.
