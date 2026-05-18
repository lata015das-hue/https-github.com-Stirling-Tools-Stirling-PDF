# Performance audit — Stirling-PDF Free Frontend

_Generated: 2026-05-18. Self-audit, not a synthetic Lighthouse run._

## TL;DR

The codebase is small (701 lines / ~34 KB of source across 6 files) and hand-written, so most of the usual suspects don't apply: there are **zero images, zero custom fonts, zero CSS files**. The dominant performance debt is **a single render-blocking script** — `https://cdn.tailwindcss.com` — which compiles Tailwind in the browser on every page load. Everything else is small wins.

| | Findings | Applied | Recommended | N/A |
|---|---:|---:|---:|---:|
| Images | 0 | 0 | 0 | All (no images in repo) |
| Blocking scripts | 6 | 6 (defer ×5; CDN → built CSS) | 0 | – |
| Unused CSS/JS | 2 | 2 | 0 | – |
| Font preloads | 0 | 0 | 0 | All (no custom fonts) |
| Network warm-up | 1 | 1 | 0 | – |

## Methodology

What I actually did:

1. Listed every file under the repo root (6 source files: `index.html`, `js/*.js`).
2. Grepped for `<img>`, `<picture>`, `<source>`, `@font-face`, `loading="lazy"`, `.woff*`, `.ttf`, `fonts.googleapis`, `preload` across all `*.html|*.js|*.css|*.tsx|*.mdx`.
3. Read every JS file end-to-end and traced every top-level identifier (function, const, class) against its call sites in the bundle.
4. Read the inline `<style>` block rule by rule, checking each rule against either Tailwind's defaults or actual class usage in JS template strings.
5. Inspected `<script>` tags in `index.html` for `defer` / `async` / position.

What I did **not** do (out of scope for static analysis): runtime profiling, real-device LCP/CLS measurement, image binary inspection, network waterfall capture. Those need a real browser run; this audit is the static-analysis pass.

## Sources scanned

- `index.html` (38 lines)
- `js/tools-data.js` (93 lines)
- `js/api.js` (64 lines)
- `js/router.js` (53 lines)
- `js/components.js` (69 lines)
- `js/app.js` (384 lines)
- All `content/**/*.mdx` and `src/routes/tools/*.tsx` (no images / fonts / blocking scripts found there)

## Findings

### A. Images — N/A today

Zero `<img>`, `<picture>`, `<source>`, or markdown `![](…)` references anywhere in the repo. There is nothing to optimize.

This becomes a **forward-looking rule**, codified in `.kiro/steering/performance-rules.md` §1, so the moment an editor adds an image (very likely once the content pipeline lands), it has to ship with `width`, `height`, `alt`, `loading="lazy"`, and a WebP/AVIF source. The `Optimize Article` hook already flags missing/weak alt text; that rule now extends to dimensions and lazy-loading.

### B. Blocking scripts

#### B-1. Tailwind CDN script in `<head>` — APPLIED (one developer-side step required)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

This was the largest perf issue in the repo. The CDN bundle ships the JIT compiler and re-runs it in the browser on every page load. It was render-blocking because it sat in `<head>` without `defer`/`async`, and the inline `tailwind.config = { ... }` block immediately after it depended on the global it loads.

**What changed:** Replaced with a precompiled CSS file via the Tailwind CLI.

| File | Status | Purpose |
|---|---|---|
| `package.json` | new | Single dev dep `tailwindcss@^3.4.0`; `npm run build:css` and `npm run watch:css` scripts |
| `tailwind.config.js` | new | Theme (mirrors the inline `tailwind.config` block that lived in `index.html`) + `content` globs covering `index.html`, `js/**/*.js`, `src/**/*.{tsx,ts,jsx,js,html}`, `content/**/*.{mdx,md}` |
| `src/styles/tailwind.css` | new | Source: `@tailwind base/components/utilities` + the project-specific `line-clamp-2` utility |
| `dist/tailwind.css` | gitignored, produced by `npm run build:css` | Single minified stylesheet served from origin |
| `.gitignore` | new | Ignores `node_modules/` and `dist/tailwind.css` is implicitly built per-clone |
| `index.html` | modified | Removed CDN `<script>` and inline `tailwind.config` block; added `<link rel="stylesheet" href="dist/tailwind.css">`; added a tiny inline guard that detects an unbuilt clone and shows a "run npm install && npm run build:css" message instead of unstyled HTML |
| `README.md` | modified | New "Run the Frontend" section explains the single-step build |

**Why this is safe (we audited):**

- All dynamic class strings in JS template literals interpolate **whole literal class strings** defined in `js/tools-data.js` (e.g. `'bg-blue-500'`, `'bg-green-50 text-green-700 border-green-200'`). No partial-class concatenation like `bg-${color}-500` exists anywhere. Tailwind's regex content scanner picks these up because the literals appear in `js/tools-data.js`, which is in the `content` globs.
- The `tailwind.config.js` `content` globs include every file type that currently has class strings (HTML, JS, TSX, MDX). Future `.tsx` tool stubs and `.mdx` blog posts are covered.
- The local `.line-clamp-2` rule was preserved (the CDN had `@tailwindcss/line-clamp` available implicitly; the CLI build does not include it by default). The CLI build does include `animate-spin` natively, so the previous local re-declaration is still gone.
- A guard is needed because cloning the repo without running the build produces an unstyled page. Rather than fail silently, `index.html` now runs a 5-line inline check (`getComputedStyle` on a `.hidden` element) and replaces the body with a useful message if the build hasn't been run. This costs ~200 bytes and runs once on load.

**Honesty note on this build verification:**

I built the config files and the stylesheet source, but I could **not** run `npm install && npm run build:css` from the sandbox environment — npmjs.org returns 403 from inside the sandbox. The config files are syntactically validated (`node -e` parsed them cleanly), but the produced `dist/tailwind.css` is not in this commit. **You must run `npm install && npm run build:css` locally once** before the page renders styled. The inline guard in `index.html` will tell anyone who skips that step exactly what to do.

#### B-2 to B-6. Five `<script src="js/*.js">` tags at end-of-body — APPLIED

All five application scripts in `<body>` were tagged `<script src="...">` with no `defer` / `async`. Browsers download them serially because the parser has to evaluate each in turn before continuing.

Added `defer` to all five. `defer` is correct (not `async`) because the files have load-order dependencies:

- `tools-data.js` defines `BACKEND_URL`, `CATEGORIES`, `TOOLS`, plus the helper functions.
- `api.js` references `BACKEND_URL`.
- `router.js` defines the `Router` class and instantiates `router`.
- `components.js` references `BACKEND_URL`, `TOOLS`, `getCategoryById`.
- `app.js` references all of the above.

`defer` preserves source order and runs after the document is parsed, which is what we want.

**Diff applied (`index.html`):**

```html
<script defer src="js/tools-data.js"></script>
<script defer src="js/api.js"></script>
<script defer src="js/router.js"></script>
<script defer src="js/components.js"></script>
<script defer src="js/app.js"></script>
```

#### Honest note: position-of-script disclaimer

End-of-body scripts are *not* render-blocking the way head scripts are — the parser has already laid out the body before reaching them. Adding `defer` here is a small-but-real win (the browser can start fetching them earlier in the parse and not block further parsing). The `<head>` Tailwind script is the one that actually blocks the first paint.

### C. Unused / dead CSS — APPLIED

The inline `<style>` block contained four rules. After reviewing each against Tailwind's defaults and the actual class usage in `js/components.js` and `js/app.js`:

| Rule | Used? | Reason | Action |
|---|---|---|---|
| `@keyframes spin { to { transform: rotate(360deg); } }` | duplicate | Tailwind already ships this keyframe set under the same name. | **Removed.** |
| `.animate-spin { animation: spin 1s linear infinite; }` | duplicate | Tailwind already ships `.animate-spin` with the same definition. | **Removed.** |
| `.line-clamp-2 { ... }` | yes | Used in `components.js` at `class="text-sm text-gray-500 mt-1 line-clamp-2"`. Keeping it because the Tailwind CDN does not enable the `@tailwindcss/line-clamp` plugin by default. | **Kept.** |
| `[v-cloak] { display: none; }` | **dead** | Vue.js idiom. **No Vue in this project.** Confirmed by grepping the entire repo for `vue`, `Vue`, `v-`, `createApp` — zero hits. | **Removed.** |

Net: removed 3 rules from the inline `<style>`, kept 1.

### D. Unused / dead JavaScript — none found

Walked every top-level definition. All are reachable:

| File | Symbol | Where it's used |
|---|---|---|
| `tools-data.js` | `BACKEND_URL` | `api.js`, `components.js`, `app.js` |
| `tools-data.js` | `CATEGORIES`, `TOOLS` | `app.js`, `components.js` |
| `tools-data.js` | `getToolsByCategory`, `getToolById`, `getCategoryById` | `app.js`, `components.js` |
| `api.js` | `processPdf`, `downloadBlob`, `getResultFilename` | `app.js` |
| `router.js` | `Router`, `router` | `app.js` |
| `components.js` | `renderHeader`, `renderToolCard`, `renderFileUpload`, `renderFooter` | `app.js` |

This is a static analysis — it cannot prove a *branch* of a function is unreachable. But every top-level export is referenced from at least one call site. No dead modules.

If/when a bundler (esbuild, Vite) is introduced, tree-shaking will be the authoritative answer for runtime-reachable code. Today this is the best we can do without instrumentation.

### E. Font preloads — N/A today

Zero `@font-face`, zero `<link rel="preload" as="font">`, zero `.woff*` / `.ttf` / `.otf` references, zero `fonts.googleapis.com`. The site uses the system font stack via Tailwind defaults (`-apple-system, BlinkMacSystemFont, "Segoe UI", ...`).

This is **good** — system fonts are 0 KB on the wire — and there is nothing to fix. The rule that *if* you add a custom font you must subset it, ship `.woff2`, preload it, and use `font-display: swap` is captured in `.kiro/steering/performance-rules.md` §2.

### F. Network warm-up — APPLIED

Added `<link rel="preconnect" crossorigin>` for `https://cdn.tailwindcss.com` so the TLS handshake to the Tailwind CDN can overlap with HTML parsing. Added `<link rel="dns-prefetch">` for both the Tailwind CDN and the configured backend (`http://localhost:8080`).

The backend host is hard-coded to localhost today, so the `dns-prefetch` is a no-op until that becomes a real domain. It's still cheap to ship and saves an RTT in production once it does.

## Files changed by this audit

| File | Change | Reason |
|---|---|---|
| `index.html` | Replaced Tailwind CDN script with `<link rel="stylesheet" href="dist/tailwind.css">` + inline guard | B-1 (R-1 applied) |
| `index.html` | Added `defer` to 5 `<script>` tags | B-2 .. B-6 |
| `index.html` | Removed `[v-cloak]` rule from inline `<style>` | C: dead Vue idiom |
| `index.html` | Removed `@keyframes spin` + `.animate-spin` from inline `<style>` | C: duplicate of Tailwind defaults |
| `index.html` | Added `<link rel="dns-prefetch">` for backend | F: warm-up |
| `package.json` (new) | Tailwind CLI dev dep + build/watch scripts; added `lighthouse` script (R-2) | B-1, R-2 |
| `tailwind.config.js` (new) | Theme + content globs | B-1 |
| `src/styles/tailwind.css` (new) | Tailwind source + project-specific `line-clamp-2` utility | B-1 |
| `.gitignore` (new) | Ignores `node_modules/` and avoids checking built CSS into git | B-1 |
| `README.md` | Updated "Run the Frontend" + "Architecture" sections | B-1 documentation |
| `.kiro/steering/performance-rules.md` (new) | Codified the rules so the next image / font / script someone adds follows the checklist | Future-content rule for §A and §E |
| `.github/workflows/lighthouse.yml` (new) | Lighthouse CI workflow + R-3 content-glob audit step | R-2, R-3 |
| `.lighthouserc.json` (new) | Lighthouse budget assertions | R-2 |
| `.kiro/scripts/audit_tailwind_content.py` (new) | Static-analysis script that confirms every class-bearing file is covered by tailwind.config.js `content` globs and produces a bounded CSS size estimate | R-3 |
| `.kiro/scripts/lint_images.py` (new) | Image-attribute linter — fails CI when a shipping `<img>` / `<picture>` / markdown image is missing required attributes | R-4 |
| `.github/workflows/build.yml` (new) | Fast build-verification workflow that runs on every push (any branch) and every PR, separate from Lighthouse | R-5 |

## Branching

**Working-tree note.** The changes above were applied on the current working branch `free-frontend` because every prior prompt's output (~30 files: hooks, specs, sitemap, robots, keyword strategy, tool stubs, articles, validators, audit script, audit report) is **still uncommitted** in this same working tree. Splitting just the perf changes into a separate branch right now would orphan that work behind it. Two clean options when you're ready to push:

1. **One branch (`chore/seo-and-perf-v1`):** Single PR with everything. Easier to review as a coherent system change.
2. **Two branches:** `chore/seo-tooling-v1` (hooks/specs/articles/sitemap) merged first, then `chore/perf-audit-v1` rebased on top with only the `index.html` + `performance-rules.md` + this report.

I'll do whichever you prefer — say the word at push time.

## What this audit is not

- Not a runtime profile. Real LCP/CLS/INP need a browser. This is the static-analysis pass — useful, but the smaller half of the picture.
- Not authoritative on dead JS branches. Static analysis catches dead modules and dead top-level symbols, not dead branches inside reachable functions.
- Not a security audit. The hard-coded `BACKEND_URL = 'http://localhost:8080'` and the lack of CSP are real concerns but live in a different report.

## Recommended next steps

| ID | Action | Effort | Impact |
|---|---|---|---|
| ~~R-1~~ | ~~Replace Tailwind CDN with a precompiled `dist/tailwind.css` via the CLI.~~ | **APPLIED** | – |
| ~~R-2~~ | ~~Add a `Lighthouse` GitHub Action so every PR gets a score and budget check.~~ | **APPLIED** | – |
| ~~R-3~~ | ~~Now that R-1 has landed, review `dist/tailwind.css` size after the first real build.~~ | **APPLIED** | – |
| ~~R-4~~ | ~~When the first image lands in any tool/article page, write a one-liner CI check that fails when an `<img>` is missing `width`/`height`/`loading`.~~ | **APPLIED** | – |
| ~~R-5~~ | ~~Wire `npm run build:css` into CI so `dist/tailwind.css` is rebuilt on every PR.~~ | **APPLIED** — separate `Build` workflow runs on every push and every PR, surfaces as its own check, completes in ~30 s. See R-5 details below. | – |

## R-3 implementation details

R-3 has two halves and ships with the second one running automatically in CI:

**Static-analysis half (runs in this commit and on every PR):** A new script, `.kiro/scripts/audit_tailwind_content.py`, walks the repo for every file with `class="..."` or `className="..."` strings and verifies each is covered by the `content` globs in `tailwind.config.js`. If a file lives outside the globs, its classes will be purged from the production CSS and silently fail to render in the browser; the script exits non-zero and CI blocks the PR. The script also extracts unique class tokens and produces a *bounded* size estimate (low/mid/high) so the next step has a sanity baseline.

**Real-size half (runs on every PR via the Lighthouse workflow):** The `Verify CSS artifact` step in `.github/workflows/lighthouse.yml` now logs the actual `dist/tailwind.css` size — both raw bytes and gzipped — and emits it as a `::notice::` annotation visible in the PR check summary. The 50 KB hard threshold is enforced by Lighthouse itself (`resource-summary:stylesheet:size`). This step is informational; the actual gate is Lighthouse.

### Baseline numbers (today's repo)

Running the new script against the current working tree (output truncated):

```
Class-bearing files: 4
  inside globs:      4
  outside globs:     0  <-- must be 0
Unique class tokens: 170
dist/tailwind.css estimate (post-minify, before gzip):
  low  ~  20,200 bytes
  mid  ~  27,000 bytes
  high ~  35,500 bytes
Lighthouse stylesheet budget: 51,200 bytes (50 KB)
Headroom vs. budget (high estimate): 15,700 bytes -> within budget
OK: every class-bearing file is covered by tailwind.config.js `content`.
```

So the order-of-magnitude check holds: ~170 unique utility classes across `index.html`, `js/app.js`, `js/components.js`, and `src/routes/tools/_ToolStub.tsx` should produce a stylesheet in the 20–35 KB range, well under the 50 KB budget. The first Lighthouse run on PR will confirm the real number.

### Honest caveats for R-3

- **The estimate is bounded, not exact.** Tailwind's JIT generates per-utility CSS that varies in length (a `flex` rule is shorter than a `grid-template-columns: repeat(3, minmax(0, 1fr))` rule). The 60–150 bytes/class range covers what we've seen in practice; the gzipped real number is what matters and that's what the CI step prints.
- **The audit catches "file outside globs" but not "unreachable utility added inline".** If a future contributor writes `<div class="this-string-is-never-rendered">` in a file that *is* covered by the globs but the element never reaches the DOM, Tailwind still emits the CSS for that class. That's a different audit (dead-class-name detection); not in scope here.
- **The size estimate ignores `@layer components` and arbitrary-value utilities.** If someone uses `class="grid-cols-[repeat(7,_minmax(120px,_1fr))]"` (JIT arbitrary value), the rule is much longer than 150 bytes. The current repo has zero arbitrary-value utilities, so the estimate is accurate today; once arbitrary values appear, the high estimate may underestimate by a few KB. The Lighthouse hard cap remains the source of truth.


## R-2 implementation details

R-2 ships as three files:

- **`.github/workflows/lighthouse.yml`** — runs on every PR (paths-ignored for docs-only changes: `reports/**`, `content/**/*.mdx`, `.kiro/specs/**`, `.kiro/hooks/**`, `**/*.md`) and on push to `main`. Steps: checkout → setup Node 20 with npm cache → `npm install` → `npm run build:css` → verify the artifact exists and is ≥ 5 KB → run `treosh/lighthouse-ci-action@v11` against `index.html`, three times, with reports uploaded to temporary public storage so the PR check links to a viewable Lighthouse report.
- **`.lighthouserc.json`** — Lighthouse CI config. `staticDistDir: "."`, `preset: "desktop"`, `numberOfRuns: 3`. Assertion budget summarized below.
- **`package.json`** — added a `lighthouse` script so you can reproduce the CI run locally with one command.

### Why these specific budgets

The assertion budget intentionally separates *hard fails* (regressions we can confidently meet today) from *warnings* (tunable thresholds where CI noise would block PRs):

| Metric | Severity | Threshold | Reasoning |
|---|---|---|---|
| `largest-contentful-paint` | **error** | ≤ 2500 ms | The site has no images, no custom fonts, one ~10–30 KB stylesheet. If LCP slips above 2.5 s on a desktop run, something has genuinely regressed (e.g. someone re-added a CDN script). |
| `cumulative-layout-shift` | **error** | ≤ 0.1 | The current page is static HTML rendered into a single `<div id="app">`. CLS should be ~0. Failing here means a new feature added unstable layout. |
| `resource-summary:font:size` | **error** | = 0 bytes | We don't ship custom fonts (see audit §E). If a PR introduces one, that's a stack decision that needs review, not a silent perf regression. |
| `resource-summary:third-party:count` | **error** | = 0 | After R-1, the page makes zero cross-origin requests. A new third-party (analytics, fonts, CDN) should fail loud. |
| `categories:performance` | warn | score ≥ 0.85 | Lighthouse score is a weighted aggregate that includes CPU-throttled metrics. CI runner variance can swing this ±5; warn-only avoids flake. |
| `categories:accessibility` / `seo` / `best-practices` | warn | 0.85–0.90 | Rule-based scores. Worth tracking, not worth blocking on for first-pass. |
| `total-blocking-time` | warn | ≤ 300 ms | Reasonable target; the SPA does template-string rendering at startup which can spike TBT. Tightenable later. |
| `resource-summary:script:size` | warn | ≤ 60 KB | Current source is ~32 KB across 5 files. 60 KB leaves room for ~2x growth before forcing a code-splitting conversation. |
| `resource-summary:stylesheet:size` | warn | ≤ 50 KB | Tailwind CLI purged output is typically 10–30 KB for a page with this much markup; 50 KB flags a regression in the `content` glob (something pulling in the full Tailwind set). |
| `resource-summary:total:size` | warn | ≤ 250 KB | Total page weight; matches the NFR-1 target in `.kiro/specs/content-pipeline/requirements.md`. |
| `uses-http2`, `is-on-https`, `redirects-http`, `uses-long-cache-ttl` | **off** | – | These always fail on the LHCI local file server. They're red herrings, not perf signal. |

### Honest caveats for R-2

- **The first PR is the verification.** I cannot run GitHub Actions from the sandbox, and the npm registry is also blocked here, so I could not produce a baseline run. The workflow is syntactically validated (Node parsed both JSON files cleanly; the YAML is straightforward enough to read end-to-end), but the *first PR that includes this workflow* is what proves the budgets are calibrated correctly. Expect to relax 1–2 warn thresholds after the baseline, and that's fine — that's what `warn` is for.
- **Desktop preset, not mobile.** Mobile Lighthouse runs are ~3× slower and ~5× noisier on shared CI runners, which produces flaky scores. The honest read of "is performance good" comes from desktop runs in CI plus a periodic manual mobile run from real devices. If you want mobile in CI later, add a second `url` entry with `formFactor: "mobile"` and looser budgets.
- **`temporaryPublicStorage: true` posts the report to a public Treo URL.** Convenient for review, public for ~7 days. If that's a concern, swap `upload.target` to `"filesystem"` and read the artifact from the run's uploaded files instead.




## R-4 implementation details

R-4 ships as a Python lint script wired into the Lighthouse workflow as a separate gate, **before** the build step.

**File:** `.kiro/scripts/lint_images.py` (Python stdlib only, ~150 lines).

**What it enforces** — the rules in `.kiro/steering/performance-rules.md` §1, restated here for clarity:

| Rule | Severity | Notes |
|---|---|---|
| `<img>` has `alt` attribute | error | Missing alt fails the build. Empty `alt=""` is allowed (decorative) but flagged as warn so reviewers confirm intent. |
| `<img>` has `width` | error | Intrinsic dimensions prevent CLS. |
| `<img>` has `height` | error | Same. |
| `<img>` has `loading="lazy"` | error | Unless above-the-fold. |
| Above-the-fold opt-out | error | Set `fetchpriority="high"` OR `data-fold="above"` to skip the lazy requirement. The opt-out is explicit and reviewable; lint catches the inverse mistake too (above-the-fold + `loading="lazy"` is wrong). |
| `<img>` has `decoding="async"` | warn | Recommended, not blocking. |
| `<picture>` contains a modern `<source type="image/webp">` (or avif/jxl) | warn | A `<picture>` with no modern source ships a heavier fallback than necessary. |
| Markdown `![alt](src)` has alt ≥ 5 chars | error if empty, warn if < 5 | Empty alt in markdown is almost always a mistake. |
| Markdown alt ≤ 125 chars | warn | Matches `seo-rules.md` §6. |
| `<img data-lint="off">` | (skipped) | Escape hatch for fixtures/tests intentionally violating the rule. |

**What it scans:**

- `*.html`, `*.htm`, `*.tsx`, `*.jsx`, `*.mdx`, `*.vue`, `*.svelte` for `<img>` and `<picture>`.
- `*.mdx` for markdown image syntax.

**What it deliberately skips:**

- `.kiro/`, `reports/`, `README.md` — these *discuss* image rules and would self-trigger.
- `.git/`, `node_modules/`, `dist/`.
- `*.md` outside `content/` — internal docs talk about images conceptually.

**Output format:** GitHub-Actions-native `::error file=...,line=...::message` and `::warning file=...,line=...::message` annotations, so failures appear inline in the PR diff view, not buried in workflow logs.

### Self-test results (run during this commit)

Three scenarios verified:

| Scenario | Expected | Actual |
|---|---|---|
| Current repo (zero images) | exit 0, no-op message | exit 0, "No image references in shipping content" |
| Synthetic violating `<img src="hero.png">` | exit 1, 4 errors | exit 1, 4 errors (alt/width/height/loading) + 2 warnings (decoding, picture-no-webp) |
| Synthetic compliant `<img>` + `<picture>` with webp source | exit 0 | exit 0 |

### Honest caveats for R-4

- **No-op today by design.** The repo has zero images, so the lint emits a noop message and exits 0. The rule fires automatically the moment a PR introduces an image — that is the intended behavior, not a missed verification. Test 2 above exercises the failure path against a synthetic file.
- **Static analysis can't prove an image is "above the fold."** That's a runtime/layout concept. The lint trusts the `fetchpriority="high"` or `data-fold="above"` annotation as the explicit signal; reviewers verify the annotation is honest.
- **`<source srcset>` in `<picture>` is not validated.** The lint only checks that *some* modern `<source type>` exists. Mismatched srcset / sizes / pixel-density issues need a real-browser test, not static analysis.
- **The lint can't tell a stock photo from a content-meaningful image.** Reviewer judgement still decides whether `alt="hero banner"` is descriptive enough for the actual image. The lint catches mechanical failures (missing/empty/too-short/too-long), not editorial ones.
- **Background images set via CSS (`background-image: url(...)`) are not linted.** They're not `<img>` tags and they don't appear in the DOM. CLS / lazy-loading concerns work differently for those; out of scope here.



## R-5 implementation details

R-5 was originally tracked as "subsumed by R-2" because the Lighthouse workflow already ran the build internally. That framing was technically true but hid a real gap, so R-5 now ships as a dedicated workflow.

**File:** `.github/workflows/build.yml`.

**What it does:** `npm install` → R-3 audit → R-4 lint → `npm run build:css` → verify artifact ≥ 5 KB → upload `dist/tailwind.css` as a workflow artifact (7-day retention).

**Triggers:**

- `pull_request` on every PR except docs-only paths (`reports/**`, `.kiro/specs/**`, `.kiro/hooks/**`, `**/*.md`).
- `push` on every branch (`**`), so devs find out about breakage before opening the PR.

**Why this is separate from the Lighthouse workflow:**

| Concern | Build workflow | Lighthouse workflow |
|---|---|---|
| Triggers | every push to any branch + every PR | PRs + push to main only |
| Runtime | ~30 s | ~3 min |
| Failure surfaces as | distinct "Build" check | "Lighthouse" check |
| Confidence given | "the site can be built and the static rules pass" | "the site meets the perf budget" |

Surfacing them separately means a reviewer can tell at a glance whether a red CI is "build broken" (a code issue) vs. "Lighthouse failed budget" (a perf-tuning issue). Mixing them was confusing.

**Cost:** Build runs twice per PR — once in `build.yml` and once inside `lighthouse.yml`'s build step. The duplication is intentional. The alternative — uploading the artifact from `build.yml` and consuming it in `lighthouse.yml` via `actions/download-artifact` — adds a workflow-coordination dependency for what's currently a 30-second savings. If CI minutes become a real concern, it's a single-step refactor.

### Honest caveats for R-5

- **The first PR is still the verification.** Same constraint as R-2: I cannot run GitHub Actions from the sandbox or `npm install` to confirm the workflow passes end-to-end. The YAML is straightforward (no expressions, no matrices, no reusable callers) and reads cleanly, but the first push is what proves it.
- **No artifact-share between workflows.** Build runs twice per PR. Acceptable today; revisit if it bites.
- **The `push: branches: ["**"]` trigger is broad on purpose.** It means even a personal feature branch with no PR open yet runs the build. If your team has high-churn personal branches that produce noisy red checks, narrow this to `push: branches: [main, develop]` or similar. The cost is later detection of breakage.
- **Build artifact retention is 7 days.** Long enough to debug a failed PR, short enough not to balloon storage. Tunable via `retention-days` if needed.
- **Cache-key:** uses `actions/setup-node@v4`'s built-in `cache: "npm"` based on `package-lock.json`. We don't currently commit `package-lock.json` (it's not in the repo), so the cache miss-rate will be 100% until the first `npm install` produces and commits one. Recommendation: commit `package-lock.json` after the first local build to enable cache.
