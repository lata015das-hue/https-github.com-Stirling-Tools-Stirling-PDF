# Tool Pages SEO - Implementation Tasks

## Task 1: Create ToolPageLayout component with SEO defaults
**Status:** Pending approval

Create the reusable HTML template/component that will be used by all 10 tool pages:
- Header with navigation and language switcher
- Breadcrumb component with BreadcrumbList schema
- Hero section with H1, subtitle, and CTA
- Tool interface placeholder section
- Content sections structure (What is, How to, Features, Use Cases, Tips)
- FAQ section with expandable accordion
- Related tools grid
- Footer with cross-language links
- Auto-injected meta tags (title, description, OG, canonical, hreflang)
- Responsive design with Tailwind CSS

**Output:** `tools/template/tool-page-layout.html` (reference template)

---

## Task 2: Build keyword research data file (tools-keywords.json)
**Status:** Pending approval

Create a comprehensive JSON data file containing:
- 10 tool entries (one per core tool)
- Each entry includes:
  - `slug`: URL-friendly identifier
  - `primaryKeyword`: Main target keyword (en + ar)
  - `longTailKeywords`: 5 long-tail variations (en + ar)
  - `title`: Page title (50-60 chars, en + ar)
  - `metaDescription`: Meta description (150-160 chars, en + ar)
  - `h1`: Main heading (en + ar)
  - `relatedTools`: Array of 3-5 related tool slugs

**Output:** `tools/data/tools-keywords.json`

---

## Task 3: Generate page for each tool with optimized content
**Status:** Pending approval

Create a Python generation script + 20 HTML pages (10 en + 10 ar):
- Each page has 1500+ words of unique SEO content
- Content covers: What is, How to, Features, Benefits, Use Cases, Tips
- Proper heading hierarchy (H1 → H2 → H3)
- Primary keyword in H1, title, meta description, first paragraph
- Long-tail keywords distributed naturally throughout content
- Bilingual: English and Arabic versions with native content

**Output:** `tools/en/*.html` (10 pages) + `tools/ar/*.html` (10 pages)

---

## Task 4: Add FAQ + HowTo schema components
**Status:** Pending approval

Implement structured data on each tool page:
- **FAQPage schema:** 5+ questions per tool with complete answers
- **HowTo schema:** Step-by-step instructions (3-5 steps per tool)
- JSON-LD format injected in `<head>` of each page
- FAQ questions are unique, valuable, and keyword-optimized
- HowTo steps include `name`, `text`, and optional `image`

**Output:** JSON-LD blocks embedded in all 20 tool pages

---

## Task 5: Implement internal linking between related tools
**Status:** Pending approval

Add strategic internal links throughout each page:
- "Related Tools" section at bottom (3-5 tool cards with descriptions)
- Contextual links within content body (minimum 3 per page)
- Cross-language links (ar ↔ en) via hreflang tags
- Descriptive anchor text containing relevant keywords
- Link equity distribution strategy (important tools get more inbound links)

**Output:** Updated internal links in all 20 tool pages

---

## Task 6: Add breadcrumbs with BreadcrumbList schema
**Status:** Pending approval

Implement breadcrumb navigation on every tool page:
- Visual breadcrumb trail: Home > Tools > [Tool Name]
- BreadcrumbList JSON-LD schema in `<head>`
- Clickable links for each breadcrumb level
- Consistent across English and Arabic (with RTL support)
- Schema includes `position`, `name`, and `item` for each level

**Output:** Breadcrumb component + schema on all 20 pages

---

## Execution Order
Tasks will be executed sequentially (1 → 2 → 3 → 4 → 5 → 6).
Each task requires user approval before proceeding to the next.
