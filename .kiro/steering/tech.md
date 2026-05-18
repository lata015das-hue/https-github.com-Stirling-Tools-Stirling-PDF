---
inclusion: always
---

# Technical Stack - Stirling PDF Free Tools

## Framework & Architecture
- **Frontend Framework:** Static HTML + Tailwind CSS + Vanilla JavaScript
- **No build step required** — Pure static site, zero dependencies
- **SPA-like behavior:** Client-side routing via `js/router.js`
- **Component system:** Custom JS components (`js/components.js`)
- **API layer:** `js/api.js` for Stirling PDF backend communication
- **Tools data:** Centralized in `js/tools-data.js`
- **PDF Processing:** Stirling PDF (Java-based, self-hosted backend)
- **Deployment:** Static hosting compatible (GitHub Pages, Netlify, Vercel, Cloudflare Pages)

## SEO Stack
- **Pre-rendered HTML:** 400 static SEO pages (no client-side rendering dependency)
- **Meta tags:** Full implementation (title, description, keywords, robots, author)
- **Open Graph:** og:title, og:description, og:type, og:locale per page
- **Canonical URLs:** `<link rel="canonical">` on every SEO page
- **Hreflang tags:** Cross-language alternatives (zh pages include all hreflang links)
- **Sitemap:** Auto-generation via Python scripts (`gen_pages_*.py`)
- **Schema.org:** Structured data ready (can be added via JSON-LD)
- **Keyword density:** 1,100-2,060 unique keywords per page, zero repetition
- **Internal linking:** Cross-language links + related tools on each page

## Analytics & Tracking
- **Google Analytics 4 (GA4):** To be integrated for traffic measurement
- **Google Search Console:** For indexation monitoring and keyword performance
- **Core metrics to track:**
  - Organic traffic by language/region
  - Keyword rankings across 8 languages
  - Page indexation rate (target: 400/400 pages indexed)
  - Click-through rate (CTR) from SERPs
  - Tool usage events (PDF operations)
  - Bounce rate and session duration

## Content Strategy
- **SEO Pages:** Python-generated HTML (reproducible via `gen_pages_*.py` scripts)
- **Content format:** Structured HTML with Tailwind CSS styling
- **Sections per page:** 11 structured sections (What is, Features, How-to, FAQ, etc.)
- **Keywords per page:** 1,100+ unique (tracked via `global_used_keywords` set)
- **No MDX/blog** — Pure SEO landing pages optimized for conversions
- **CTA on every page:** "Use Tool Now" button linking to main app

## Internationalization (i18n)
- **8 Languages supported:**
  - 🇸🇦 Arabic (ar) — RTL direction, `dir="rtl"`, `lang="ar"`
  - 🇬🇧 English (en) — LTR, `lang="en"`
  - 🇫🇷 French (fr) — LTR, `lang="fr"`
  - 🇪🇸 Spanish (es) — LTR, `lang="es"`
  - 🇧🇷 Portuguese (pt) — LTR, `lang="pt"`
  - 🇨🇳 Chinese (zh) — LTR, `lang="zh-CN"`
  - 🇮🇳 Hindi (hi) — LTR, `lang="hi"`
  - 🇮🇩 Indonesian (id) — LTR, `lang="id"`
- **RTL Support:** Arabic pages use `dir="rtl"` with proper CSS (border-r instead of border-l)
- **Locale-specific OG tags:** Each language has correct `og:locale` (ar_AR, en_US, fr_FR, etc.)
- **Native content:** All keywords and descriptions written natively (not machine-translated)
- **Cross-linking:** Every page links to its equivalent in other languages

## Performance Budget
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms
- **Time to First Byte (TTFB):** < 800ms
- **Total page weight:** < 200KB (HTML + Tailwind CDN)
- **No JavaScript blocking:** Scripts loaded at end of body
- **No custom fonts loaded:** Uses system font stack (Segoe UI, Tahoma, etc.)
- **CDN delivery:** Tailwind CSS via CDN (cached globally)
- **Static HTML:** Zero server-side processing for SEO pages

## Color Scheme by Language
| Language | Primary Color | Tailwind Classes |
|----------|--------------|------------------|
| English | Indigo | `bg-indigo-50`, `text-indigo-800` |
| French | Purple | `bg-purple-50`, `text-purple-800` |
| Spanish | Orange | `bg-orange-50`, `text-orange-800` |
| Portuguese | Rose | `bg-rose-50`, `text-rose-800` |
| Chinese | Red | `bg-red-50`, `text-red-800` |
| Hindi | Amber | `bg-amber-50`, `text-amber-800` |
| Indonesian | Teal | `bg-teal-50`, `text-teal-800` |
| Arabic | Blue | `bg-blue-50`, `text-blue-800` |

## File Structure
```
/
├── index.html                 # Main app (400 SEO links)
├── js/                        # App JavaScript
│   ├── api.js                 # API communication
│   ├── app.js                 # Main app logic
│   ├── components.js          # UI components
│   ├── router.js              # Client-side routing
│   └── tools-data.js          # Tools configuration
├── seo/                       # 400 SEO pages
│   ├── ar/ (50 pages)         # Arabic
│   ├── en/ (50 pages)         # English
│   ├── fr/ (50 pages)         # French
│   ├── es/ (50 pages)         # Spanish
│   ├── pt/ (50 pages)         # Portuguese
│   ├── zh/ (50 pages)         # Chinese
│   ├── hi/ (50 pages)         # Hindi
│   └── id/ (50 pages)         # Indonesian
├── gen_pages.py               # Arabic page generator
├── gen_pages_en.py            # English page generator
├── gen_pages_fr.py            # French page generator
├── gen_pages_es.py            # Spanish page generator
├── gen_pages_pt.py            # Portuguese page generator
├── gen_pages_zh.py            # Chinese page generator
├── gen_pages_hi.py            # Hindi page generator
├── gen_pages_id.py            # Indonesian page generator
└── .kiro/steering/
    ├── product.md             # Product strategy
    └── tech.md                # This file
```

## Development Workflow
1. Edit `gen_pages_*.py` script for the target language
2. Run `python3 gen_pages_*.py` to regenerate pages
3. Verify output in `seo/<lang>/` directory
4. Update `index.html` if new tools are added
5. Commit and push to `feature/arabic-seo-pages` branch
6. PR review and merge to `free-frontend`
