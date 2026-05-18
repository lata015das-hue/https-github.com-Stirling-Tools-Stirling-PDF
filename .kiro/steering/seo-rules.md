---
inclusion: fileMatch
pattern: "**/*.{tsx,mdx}"
---

# SEO Rules - Stirling PDF Free Tools

## 1. Title & Meta Description

- **Every page MUST have a unique `<title>` tag** — 50-60 characters max
- **Every page MUST have a unique `<meta name="description">`** — 150-160 characters max
- Never duplicate titles or descriptions across pages
- Include primary keyword near the beginning of the title
- Meta description must contain a clear call-to-action or value proposition
- Format: `[Primary Keyword] - [Benefit] | Stirling PDF`

```html
<!-- Example -->
<title>Merge PDF Files Free Online - No Registration | Stirling PDF</title>
<meta name="description" content="Merge multiple PDF files into one document instantly. Free, secure, no signup required. Works on all devices. Try Stirling PDF merger now.">
```

## 2. Semantic HTML Structure

- **One `<h1>` per page** — Must contain the primary keyword
- **Logical heading hierarchy:** H1 → H2 → H3 (never skip levels)
- Use `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>` semantically
- Use `<ul>`/`<ol>` for lists, `<table>` for tabular data
- Never use headings for styling purposes — use CSS classes instead

```html
<!-- Correct hierarchy -->
<h1>Merge PDF Files Free Online</h1>
  <h2>How to Merge PDF Files</h2>
    <h3>Step 1: Upload Your Files</h3>
    <h3>Step 2: Arrange Order</h3>
  <h2>Why Choose Stirling PDF?</h2>
  <h2>Frequently Asked Questions</h2>
    <h3>Is it free?</h3>
    <h3>Is it secure?</h3>
```

## 3. Image Alt Text

- **All `<img>` tags MUST have descriptive `alt` attributes**
- Provide alt text in both Arabic and English where applicable
- Alt text should describe the image content AND include relevant keywords
- Decorative images use `alt=""` (empty but present)
- Maximum alt text length: 125 characters

```html
<!-- English page -->
<img src="merge-pdf-tool.png" alt="Free online PDF merge tool - combine multiple PDF files into one">

<!-- Arabic page -->
<img src="merge-pdf-tool.png" alt="أداة دمج PDF مجانية عبر الإنترنت - اجمع عدة ملفات PDF في ملف واحد">
```

## 4. Internal Linking

- **Minimum 3 internal links per article/page**
- Link to related tools within the same language
- Link to the same tool in other languages (hreflang cross-links)
- Use descriptive anchor text (never "click here" or "read more")
- Distribute links naturally throughout the content
- Link from high-authority pages to new/important pages

```html
<!-- Good anchor text -->
<a href="../en/compress-pdf.html">compress your PDF files for free</a>
<a href="merge-pdf.html">combine multiple PDFs into one document</a>

<!-- Bad anchor text - NEVER do this -->
<a href="compress-pdf.html">click here</a>
```

## 5. JSON-LD Schema Markup

- **Add appropriate JSON-LD schema based on page type:**

### SoftwareApplication (Tool pages)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Stirling PDF - Merge PDF",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1200"
  }
}
```

### HowTo (Tutorial/Steps sections)
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge PDF Files Online",
  "step": [
    {"@type": "HowToStep", "name": "Upload files", "text": "Upload your PDF files"},
    {"@type": "HowToStep", "name": "Arrange order", "text": "Drag to reorder"},
    {"@type": "HowToStep", "name": "Download", "text": "Click merge and download"}
  ]
}
```

### FAQPage (FAQ sections)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Stirling PDF free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Stirling PDF is 100% free with no hidden charges."
      }
    }
  ]
}
```

### Article (Blog/content pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Merge PDF Files - Complete Guide 2025",
  "author": {"@type": "Organization", "name": "Stirling PDF"},
  "datePublished": "2025-01-01",
  "dateModified": "2025-05-18"
}
```

## 6. Core Web Vitals Optimization

### Lazy Load Images
```html
<!-- All non-critical images must use lazy loading -->
<img src="screenshot.png" alt="PDF tool screenshot" loading="lazy" decoding="async">

<!-- Only above-the-fold hero images load eagerly -->
<img src="hero.png" alt="Stirling PDF hero" loading="eager" fetchpriority="high">
```

### Preload Critical Resources
```html
<head>
  <!-- Preload critical fonts if custom fonts are used -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preload critical CSS -->
  <link rel="preload" href="https://cdn.tailwindcss.com" as="script">
  
  <!-- DNS prefetch for external resources -->
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
</head>
```

### Additional Performance Rules
- Defer non-critical JavaScript: `<script defer>`
- Minimize DOM depth (max 15 levels)
- Avoid layout shifts: Set explicit `width` and `height` on images
- Use `font-display: swap` for custom fonts
- Inline critical CSS for above-the-fold content
- Compress images: WebP format preferred, max 100KB per image

## 7. URL Slug Rules

- **Lowercase only** — never use uppercase in URLs
- **Hyphens as separators** — never underscores or spaces
- **Maximum 60 characters** for the slug portion
- **No Arabic/non-Latin characters in URLs** — use English slugs for all languages
- **Descriptive and keyword-rich** — reflect the page content
- **No stop words** unless needed for clarity (a, the, is, and, of)
- **No file extensions in visible URLs** (use .html only for static hosting)

```
✅ CORRECT:
/seo/ar/merge-pdf.html
/seo/en/convert-pdf-to-word.html
/seo/fr/compress-pdf.html
/seo/zh/extract-images-pdf.html

❌ WRONG:
/seo/ar/دمج-ملفات-pdf.html        (Arabic in URL)
/seo/en/Merge_PDF_Files.html       (uppercase + underscores)
/seo/en/convert-pdf-to-microsoft-word-document-format.html  (too long)
/seo/en/merge pdf.html             (spaces in URL)
```

## Summary Checklist

Before publishing any page, verify:

- [ ] Unique title (50-60 chars) with primary keyword
- [ ] Unique meta description (150-160 chars) with CTA
- [ ] Single H1 tag containing primary keyword
- [ ] Logical H2/H3 hierarchy (no skipped levels)
- [ ] All images have descriptive alt text
- [ ] Minimum 3 internal links with descriptive anchors
- [ ] JSON-LD schema appropriate to page type
- [ ] Images use `loading="lazy"` (except hero)
- [ ] Critical resources preloaded
- [ ] URL is lowercase, hyphenated, max 60 chars, English only
- [ ] No duplicate content across pages
- [ ] Cross-language links present (hreflang)
- [ ] Open Graph meta tags complete
- [ ] Canonical URL set correctly
