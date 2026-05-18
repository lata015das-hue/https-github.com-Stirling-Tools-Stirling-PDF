# Tool Pages SEO — Design

## 1. Architecture

```
   js/tools-data.js  ─── tool catalog (id, name, desc, category)
              │
              ▼
   src/routes/tools/<slug>.tsx  ─── per-page meta + content slots
              │
              ▼
   _ToolStub.tsx  ─── shared layout (this spec, task 1)
              │
              ▼
   Renderer (TBD: Astro / 11ty / custom)
              │
              ▼
   Static HTML files served by the host
```

The layout component is the *contract* between authored content and the
renderer. It returns a structured description of the page (DOM tree) that any
renderer can serialize. Today the `.tsx` extension is aspirational — files
aren't compiled. Once a renderer is chosen, this component becomes the only
thing that needs to know how to talk to it.

## 2. Layout component contract

`_ToolStub.tsx` exports a default component with the following props:

```ts
interface ToolStubProps {
  // Identification (from per-page meta)
  title: string;        // <title>; ≤ 60 chars; contains keyword
  description: string;  // meta description; 140-160 chars; contains keyword
  keyword: string;      // primary target keyword
  toolId: string;       // canonical id from js/tools-data.js
  category: 'page-operations' | 'convert' | 'security' | 'other' | 'advance';
  appUrl: string;       // SPA bridge URL: /index.html#/tool/<id>

  // i18n
  lang?: 'en' | 'ar';   // default 'en'
  dir?: 'ltr' | 'rtl';  // default 'ltr'

  // Content slots
  heroParagraph?: string;             // 1-paragraph intro under H1
  howItWorks?: [string, string, string]; // exactly 3 steps
  whyBullets?: string[];              // 2-5 bullets
  faq?: { q: string; a: string }[];   // ≥ 3
  relatedTools?: string[];            // tool ids; auto-filled to 3-4 siblings if omitted

  // Optional
  heroImage?: { src: string; alt: string; width: number; height: number };
}
```

Every prop with a TODO placeholder behavior is documented in JSDoc on the
component itself.

## 3. Required DOM sections (FR-2 expanded)

```
<!doctype html>
<html lang="{lang}" dir="{dir}">
  <head>
    {/* canonical + hreflang slots — populated by technical-seo */}
    <title>{title}</title>
    <meta name="description" content={description}>
    {/* OG slot */}
    {/* JSON-LD slot — populated by Schema Generator hook */}
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header role="banner">
      <a href="/">Stirling-PDF</a>
      <nav>{/* category links */}</nav>
      <div class="lang-switcher">{/* language switcher */}</div>
    </header>

    <main id="main" role="main">
      <nav aria-label="Breadcrumb">
        Home / {Category name} / {Tool name}
      </nav>

      <h1>{Tool name with keyword}</h1>
      {heroImage ? <img ...> : null}
      <p class="hero">{heroParagraph}</p>
      <a class="primary-cta" href={appUrl}>Open the {Tool name} tool</a>

      <section aria-labelledby="how-it-works">
        <h2 id="how-it-works">How it works</h2>
        <ol>{howItWorks.map(step => <li>{step}</li>)}</ol>
      </section>

      <section aria-labelledby="why">
        <h2 id="why">Why use Stirling-PDF</h2>
        <ul>{whyBullets.map(b => <li>{b}</li>)}</ul>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">Frequently asked questions</h2>
        {faq.map(({q, a}) => <details><summary>{q}</summary><p>{a}</p></details>)}
      </section>

      <section aria-labelledby="related">
        <h2 id="related">Related tools</h2>
        <ul>{relatedTools.map(id => <li><a href={`/tools/${id}`}>...</a></li>)}</ul>
      </section>
    </main>

    <footer role="contentinfo">{/* nav, links, language switcher repeat */}</footer>
  </body>
</html>
```

## 4. Class strings

All Tailwind classes used by the layout appear as **complete literals** in this
file. No `bg-${color}-500` interpolation. The catalog colors from `tools-data.js`
(`bg-blue-500`, etc.) are passed through `props` and used as a single
interpolation that resolves to a complete literal — same pattern the SPA already
uses (R-3 audit catches violations).

## 5. Renderer-agnostic strategy

The component returns plain JSX. Rendering options in priority order:

- **Option 1: Astro.** Best fit. MDX integration, file-based routing, zero JS by
  default.
- **Option 2: 11ty + JSX.** Less common, more config.
- **Option 3: Custom Node script.** Manually walks `src/routes/tools/`, calls
  `renderToString()`, writes HTML files. Works for ~60 pages, doesn't scale.

This design assumes Option 1 unless input changes it. The layout component is
written to be Option-1-compatible but doesn't hard-depend on Astro APIs.

## 6. Today's `_ToolStub.tsx` vs. this design

The current file is a minimal placeholder:

```tsx
export default function ToolStub(props) { ... }  // ~60 lines
```

It satisfies maybe 30 % of FR-2. Task 1 below brings it to 100 %.

## 7. Open questions

- Whether the language switcher in the header is *populated* in this iteration
  (hard, requires the i18n routing layer) or just a placeholder slot. Default:
  placeholder slot for now.
- Whether breadcrumbs emit `BreadcrumbList` JSON-LD inline or wait for the
  Schema Generator hook to add it. Default: emit inline; the Schema Generator
  is for the *primary* schema type per page.
