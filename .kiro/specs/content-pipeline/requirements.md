# Content Pipeline — Requirements

## 1. Purpose
Define a repeatable pipeline that turns each Stirling-PDF tool (currently ~56 tools across 5 categories) into a discoverable, SEO-optimized landing page plus supporting long-form content (how-to / comparison / FAQ), so the frontend ranks for transactional and informational PDF queries.

## 2. Scope
- IN SCOPE
  - Per-tool landing pages (one per entry in `js/tools-data.js`).
  - Category hub pages (Page Operations, Convert, Security, Other, Advanced).
  - Long-form articles (how-to, comparison, FAQ) linked from tool pages.
  - Metadata pipeline: `<title>`, `<meta description>`, canonical, OpenGraph, JSON-LD (via the Schema Generator hook).
  - Sitemap and robots updates whenever new content is published.
- OUT OF SCOPE (this spec)
  - Backend changes to Stirling-PDF.
  - Paid acquisition, email nurture (covered by `lead-magnet-funnel`).
  - Internationalization beyond English (deferred).

## 3. User Stories
- As a **visitor searching "merge PDF online free"**, I want a fast page that explains what the tool does and lets me use it in one click, so I do not bounce.
- As a **content editor**, I want a single source of truth (`tools-data.js`) so that adding a tool automatically queues a content task.
- As an **SEO owner**, I want every published page to ship with valid JSON-LD, a unique title/description, internal links to related tools, and an entry in `sitemap.xml`.
- As a **developer**, I want the pipeline to fail loudly (lint/CI) when a page is missing required SEO fields.

## 4. Functional Requirements
- FR-1: For every tool in `TOOLS`, the pipeline MUST produce: tool page, JSON-LD, sitemap entry, internal links from at least 2 sibling tools.
- FR-2: Each tool page MUST have: H1 = tool name, description ≥ 150 words, "How it works" steps, FAQ block (≥ 3 Q/A), CTA to launch the tool.
- FR-3: Long-form articles MUST link to at least one tool page via a primary CTA.
- FR-4: Schema selection MUST follow the priority defined in the `schema-generator` hook (FAQPage → HowTo → SoftwareApplication → Product → Article).
- FR-5: Every publish MUST update `sitemap.xml` `<lastmod>` and regenerate `robots.txt` if rules changed.
- FR-6: Drafts MUST be reviewable before publish (PR-based workflow).

## 5. Non-Functional Requirements
- NFR-1 Performance: Tool landing page LCP ≤ 2.5s on 4G; total page weight ≤ 200KB excluding the Tailwind CDN.
- NFR-2 Accessibility: WCAG 2.1 AA — semantic headings, alt text on images, focus states preserved.
- NFR-3 SEO health: 0 broken internal links; 100% of published pages must validate against schema.org for their declared `@type`.
- NFR-4 Authoring velocity: producing one tool page from brief → PR ready ≤ 30 minutes for the editor.

## 6. Inputs
- `js/tools-data.js` — canonical tool list (id, name, desc, category, endpoint, fields).
- `README.md` — feature taxonomy.
- Search keyword brief per tool (provided by SEO owner).

## 7. Outputs / Acceptance Criteria
- AC-1: Running the pipeline for a tool id produces a published HTML page reachable from the home page within 2 clicks.
- AC-2: New page is in `sitemap.xml` with correct `<lastmod>`.
- AC-3: New page has valid JSON-LD (verified by the `schema-generator` hook output).
- AC-4: New page links back to at least one category hub and one sibling tool.
- AC-5: A removed tool triggers a removal task: page deleted or 301-redirected, sitemap updated.

## 8. Risks & Assumptions
- Hash-based SPA routing limits crawlability; pipeline assumes future move to path-based routes or static prerender (tracked in design).
- Tailwind CDN dependency is acceptable for now but flagged as a perf risk.
- No CMS — content lives in the repo as HTML/Markdown, reviewed via PR.
