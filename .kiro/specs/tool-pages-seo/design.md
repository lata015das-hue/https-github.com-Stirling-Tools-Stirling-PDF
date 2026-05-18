# Tool Pages SEO - Design

## Architecture

### Reusable `<ToolPageLayout>` Component
A single reusable layout template that generates consistent, SEO-optimized tool pages.

```
┌─────────────────────────────────────────────┐
│ Header (Nav + Language Switcher)             │
├─────────────────────────────────────────────┤
│ Breadcrumbs (BreadcrumbList schema)         │
├─────────────────────────────────────────────┤
│ Hero Section                                │
│  ├── H1: Primary Keyword                   │
│  ├── Subtitle: Value proposition            │
│  └── CTA Button: "Use Tool Now"            │
├─────────────────────────────────────────────┤
│ Tool Interface Section                      │
│  └── Embedded tool UI / Upload area         │
├─────────────────────────────────────────────┤
│ SEO Content (1500+ words)                   │
│  ├── H2: What is [Tool]?                   │
│  ├── H2: How to [Action] (HowTo schema)    │
│  │    ├── Step 1                            │
│  │    ├── Step 2                            │
│  │    └── Step 3                            │
│  ├── H2: Features & Benefits               │
│  ├── H2: Use Cases                          │
│  └── H2: Tips & Best Practices             │
├─────────────────────────────────────────────┤
│ FAQ Section (FAQPage schema)                │
│  ├── Q1 + Answer                            │
│  ├── Q2 + Answer                            │
│  ├── Q3 + Answer                            │
│  ├── Q4 + Answer                            │
│  └── Q5 + Answer                            │
├─────────────────────────────────────────────┤
│ Related Tools Section                       │
│  ├── Tool Card 1                            │
│  ├── Tool Card 2                            │
│  └── Tool Card 3-5                          │
├─────────────────────────────────────────────┤
│ Final CTA Section                           │
│  └── "Start Using [Tool] Now" button        │
├─────────────────────────────────────────────┤
│ Footer                                      │
└─────────────────────────────────────────────┘
```

### Data-Driven Page Generation
- All tool data stored in `tools-keywords.json`
- Pages generated from data (Python script or static build)
- Each tool entry contains: slug, keywords, content, FAQ, steps

### Schema.org Auto-Injection
JSON-LD schemas are automatically generated based on page data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Stirling PDF - [Tool Name]",
  ...
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  ...
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  ...
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  ...
}
</script>
```

### Bilingual Implementation
- Shared layout, different content per language
- URL structure: `/tools/en/merge-pdf.html` and `/tools/ar/merge-pdf.html`
- Hreflang in `<head>`:
  ```html
  <link rel="alternate" hreflang="en" href="/tools/en/merge-pdf.html">
  <link rel="alternate" hreflang="ar" href="/tools/ar/merge-pdf.html">
  ```

### Color & Design System
- Consistent with existing site (Tailwind CSS, blue/indigo primary)
- Tool pages use a unified card-based design
- Responsive: mobile-first, 5-column grid on desktop
- Accessible: WCAG AA compliant, proper contrast ratios

### File Structure
```
/tools/
├── en/
│   ├── merge-pdf.html
│   ├── split-pdf.html
│   ├── compress-pdf.html
│   ├── convert-pdf-to-word.html
│   ├── convert-word-to-pdf.html
│   ├── convert-pdf-to-excel.html
│   ├── convert-pdf-to-image.html
│   ├── convert-image-to-pdf.html
│   ├── ocr-pdf.html
│   └── edit-pdf.html
├── ar/
│   ├── merge-pdf.html
│   ├── ... (same 10 tools)
│   └── edit-pdf.html
└── data/
    └── tools-keywords.json
```
