/**
 * Shared layout component for /tools/<slug> static landing pages.
 *
 * Spec: .kiro/specs/tool-pages-seo/{requirements,design,tasks}.md
 *   - FR-1 layout component (single component renders every tool page).
 *   - FR-2 required DOM sections, in order.
 *   - FR-3 reserved JSON-LD slot in <head>.
 *   - FR-4 lang/dir aware rendering.
 *   - FR-5 reserved canonical/hreflang/OG slots.
 *   - FR-6 explicit TODO placeholders for unfilled copy.
 *
 * Renderer status: `.tsx` is aspirational today — files are not compiled
 * (tech.md "What's deliberately NOT in this stack"). The component returns
 * a renderer-agnostic JSX tree. It does not hard-depend on React or Astro
 * APIs. Whatever renderer wins (Astro, 11ty, custom Node script) wraps
 * this output.
 *
 * The component does NOT invent canonical URLs, hreflang clusters, OG tag
 * values, or JSON-LD payloads (FR-5, FR-6). It reserves placeholder slots
 * in <head> with `data-managed="technical-seo"` and
 * `data-generated="schema-generator"` sentinels which the technical-seo
 * layer and the Schema Generator hook find and rewrite at build time.
 *
 * Tailwind class strings appear here as complete literals only. No partial
 * concatenation like `bg-${color}-500` (tech.md "Hard rules for class
 * strings"; audit_tailwind_content.py / R-3).
 */

// ---------------------------------------------------------------------------
// Catalog mirror
//
// js/tools-data.js is the canonical source of truth for tool ids/names/
// categories (tech.md "Hard rules for tools-data"). This file mirrors the
// minimum fields the layout needs: id, display name, category, and the
// static-page slug.
//
// Slug != id for several tools because the keyword the static page targets
// differs from the tool's internal id (e.g. tool id `pdf-to-img` targets
// the keyword "pdf to jpg", so the static page is /tools/pdf-to-jpg). When
// `slug` is omitted it defaults to the id.
//
// Sync invariant: when you add a tool to js/tools-data.js, add it here too,
// or relatedTools auto-derivation will not see it.
// ---------------------------------------------------------------------------

type CategoryId =
  | "page-operations"
  | "convert"
  | "security"
  | "other"
  | "advance";

interface CatalogEntry {
  id: string;
  name: string;
  category: CategoryId;
  /** Static-page slug. Defaults to `id`. */
  slug?: string;
}

const TOOL_CATALOG: ReadonlyArray<CatalogEntry> = [
  // page-operations
  { id: "merge-pdfs",             name: "Merge PDFs",            category: "page-operations", slug: "merge-pdf" },
  { id: "split-pages",            name: "Split PDF",             category: "page-operations", slug: "split-pdf" },
  { id: "remove-pages",           name: "Remove Pages",          category: "page-operations" },
  { id: "rotate-pdf",             name: "Rotate PDF",            category: "page-operations" },
  { id: "rearrange-pages",        name: "Rearrange Pages",       category: "page-operations" },
  { id: "scale-pages",            name: "Scale Pages",           category: "page-operations" },
  { id: "crop",                   name: "Crop PDF",              category: "page-operations", slug: "crop-pdf" },
  { id: "add-page-numbers",       name: "Add Page Numbers",      category: "page-operations" },
  { id: "multi-page-layout",      name: "Multi-Page Layout",     category: "page-operations" },
  { id: "extract-pages",          name: "Extract Pages",         category: "page-operations" },
  { id: "pdf-to-single-page",     name: "PDF to Single Page",    category: "page-operations" },
  { id: "overlay-pdf",            name: "Overlay PDFs",          category: "page-operations" },
  { id: "booklet-imposition",     name: "Booklet Imposition",    category: "page-operations" },
  // convert
  { id: "pdf-to-img",             name: "PDF to Image",          category: "convert", slug: "pdf-to-jpg" },
  { id: "img-to-pdf",             name: "Image to PDF",          category: "convert", slug: "jpg-to-pdf" },
  { id: "pdf-to-word",            name: "PDF to Word",           category: "convert" },
  { id: "pdf-to-presentation",    name: "PDF to PowerPoint",     category: "convert", slug: "pdf-to-powerpoint" },
  { id: "pdf-to-text",            name: "PDF to Text",           category: "convert" },
  { id: "pdf-to-html",            name: "PDF to HTML",           category: "convert" },
  { id: "html-to-pdf",            name: "HTML to PDF",           category: "convert" },
  { id: "markdown-to-pdf",        name: "Markdown to PDF",       category: "convert" },
  { id: "file-to-pdf",            name: "File to PDF",           category: "convert" },
  { id: "pdf-to-pdfa",            name: "PDF to PDF/A",          category: "convert" },
  { id: "pdf-to-csv",             name: "PDF to CSV",            category: "convert" },
  { id: "pdf-to-xml",             name: "PDF to XML",            category: "convert" },
  { id: "pdf-to-markdown",        name: "PDF to Markdown",       category: "convert" },
  { id: "eml-to-pdf",             name: "Email to PDF",          category: "convert" },
  { id: "pdf-to-epub",            name: "PDF to EPUB",           category: "convert" },
  // security
  { id: "add-password",           name: "Add Password",          category: "security" },
  { id: "remove-password",        name: "Remove Password",       category: "security", slug: "unlock-pdf" },
  { id: "change-permissions",     name: "Change Permissions",    category: "security" },
  { id: "add-watermark",          name: "Add Watermark",         category: "security", slug: "add-watermark-pdf" },
  { id: "cert-sign",              name: "Certificate Sign",      category: "security" },
  { id: "remove-cert-sign",       name: "Remove Signatures",     category: "security", slug: "remove-pdf-signature" },
  { id: "sanitize-pdf",           name: "Sanitize PDF",          category: "security" },
  { id: "auto-redact",            name: "Auto Redact",           category: "security", slug: "redact-pdf" },
  { id: "validate-signature",     name: "Validate Signature",    category: "security", slug: "validate-pdf-signature" },
  { id: "timestamp-pdf",          name: "Timestamp PDF",         category: "security" },
  { id: "unlock-pdf-forms",       name: "Unlock PDF Forms",      category: "security" },
  // other
  { id: "ocr-pdf",                name: "OCR PDF",               category: "other" },
  { id: "extract-images",         name: "Extract Images",        category: "other" },
  { id: "flatten",                name: "Flatten PDF",           category: "other", slug: "flatten-pdf" },
  { id: "update-metadata",        name: "Update Metadata",       category: "other", slug: "edit-pdf-metadata" },
  { id: "remove-blanks",          name: "Remove Blank Pages",    category: "other", slug: "remove-blank-pages" },
  { id: "remove-annotations",     name: "Remove Annotations",    category: "other", slug: "remove-pdf-annotations" },
  { id: "get-info-on-pdf",        name: "PDF Info",              category: "other", slug: "pdf-info" },
  { id: "add-stamp",              name: "Add Stamp",             category: "other", slug: "add-stamp-to-pdf" },
  { id: "add-attachments",        name: "Add Attachments",       category: "other", slug: "add-pdf-attachments" },
  { id: "show-javascript",        name: "Show JavaScript",       category: "other", slug: "show-pdf-javascript" },
  { id: "edit-table-of-contents", name: "Edit Table of Contents", category: "other", slug: "edit-pdf-bookmarks" },
  // advance
  { id: "compress-pdf",           name: "Compress PDF",          category: "advance" },
  { id: "repair",                 name: "Repair PDF",            category: "advance", slug: "repair-pdf" },
  { id: "auto-rename",            name: "Auto Rename",           category: "advance", slug: "auto-rename-pdf" },
  { id: "extract-image-scans",    name: "Extract Scans",         category: "advance", slug: "extract-scans-from-pdf" },
  { id: "scanner-effect",         name: "Scanner Effect",        category: "advance", slug: "pdf-scanner-effect" },
  { id: "replace-invert-pdf",     name: "Replace/Invert Colors", category: "advance", slug: "invert-pdf-colors" },
];

const CATEGORY_NAMES: Record<CategoryId, string> = {
  "page-operations": "Page Operations",
  "convert":         "Convert",
  "security":        "Security",
  "other":           "Other Tools",
  "advance":         "Advanced",
};

// Per-category accent classes. Complete literals so Tailwind's JIT scanner
// picks them up. Mirrors the `colorLight` field in tools-data.js without
// reaching across files.
const CATEGORY_ACCENTS: Record<CategoryId, string> = {
  "page-operations": "bg-blue-50 text-blue-700 border-blue-200",
  "convert":         "bg-green-50 text-green-700 border-green-200",
  "security":        "bg-red-50 text-red-700 border-red-200",
  "other":           "bg-purple-50 text-purple-700 border-purple-200",
  "advance":         "bg-orange-50 text-orange-700 border-orange-200",
};

function lookupTool(id: string): CatalogEntry | undefined {
  return TOOL_CATALOG.find((t) => t.id === id);
}

function slugForId(id: string): string {
  const t = lookupTool(id);
  return (t && t.slug) || id;
}

/** 3–4 sibling tools in the same category, excluding the current one. */
function deriveRelatedTools(category: CategoryId, excludeId: string): string[] {
  return TOOL_CATALOG
    .filter((t) => t.category === category && t.id !== excludeId)
    .slice(0, 4)
    .map((t) => t.id);
}

function deriveH1FromTitle(title: string): string {
  // SEO titles in this repo follow "<H1> — <tagline> | Stirling-PDF".
  // Strip everything after the first em dash; fall back to the full title.
  const idx = title.indexOf("—");
  return (idx > 0 ? title.slice(0, idx) : title).trim();
}

// ---------------------------------------------------------------------------
// i18n strings
//
// The free frontend has no i18n runtime (tech.md "What's deliberately NOT
// in this stack"). We carry a small inline string table for the locales
// that actually ship today — en and ar. Adding a third locale means adding
// a key here.
// ---------------------------------------------------------------------------

type Lang = "en" | "ar";

interface UiStrings {
  skip: string;
  brand: string;
  home: string;
  breadcrumb: string;
  cta: (toolName: string) => string;
  howItWorks: string;
  whyTitle: string;
  faqTitle: string;
  faqPlaceholder: string;
  relatedTitle: string;
  langSwitcher: string;
  defaultStep1: string;
  defaultStep2: (keyword: string) => string;
  defaultStep3: string;
  defaultWhyBullets: string[];
  copyright: string;
}

const STRINGS: Record<Lang, UiStrings> = {
  en: {
    skip: "Skip to content",
    brand: "Stirling-PDF",
    home: "Home",
    breadcrumb: "Breadcrumb",
    cta: (n) => `Open the ${n} tool`,
    howItWorks: "How it works",
    whyTitle: "Why use Stirling-PDF",
    faqTitle: "Frequently asked questions",
    faqPlaceholder: "TODO: write FAQ",
    relatedTitle: "Related tools",
    langSwitcher: "Language",
    defaultStep1: "Drop your PDF into the tool.",
    defaultStep2: (k) => `Run the ${k} action — no signup, no email required.`,
    defaultStep3: "Download the result. Files stay on your own infrastructure when self-hosted.",
    defaultWhyBullets: [
      "Free and open source.",
      "Self-hostable — your files never leave your network.",
      "Covers ~56 PDF tools across 5 categories.",
    ],
    copyright: "Stirling-PDF",
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    brand: "Stirling-PDF",
    home: "الرئيسية",
    breadcrumb: "مسار التنقّل",
    cta: (n) => `افتح أداة ${n}`,
    howItWorks: "كيف تعمل",
    whyTitle: "لماذا Stirling-PDF",
    faqTitle: "الأسئلة الشائعة",
    faqPlaceholder: "TODO: اكتب الأسئلة الشائعة",
    relatedTitle: "أدوات ذات صلة",
    langSwitcher: "اللغة",
    defaultStep1: "أفلت ملف PDF داخل الأداة.",
    defaultStep2: (k) => `نفّذ إجراء ${k} — بدون تسجيل أو بريد إلكتروني.`,
    defaultStep3: "نزِّل الناتج. تبقى الملفات على بنيتك التحتية عند الاستضافة الذاتية.",
    defaultWhyBullets: [
      "مجاني ومفتوح المصدر.",
      "قابل للاستضافة الذاتية — ملفاتك لا تغادر شبكتك.",
      "يغطّي نحو 56 أداة PDF عبر 5 فئات.",
    ],
    copyright: "Stirling-PDF",
  },
};

// ---------------------------------------------------------------------------
// Component contract  (design.md §2)
// ---------------------------------------------------------------------------

export interface ToolStubProps {
  /** SEO <title>; ≤ 60 chars; contains keyword. */
  title: string;
  /** Meta description; 140–160 chars; contains keyword. */
  description: string;
  /** Primary target keyword for this page. */
  keyword: string;
  /** Canonical id from js/tools-data.js. Never invent ids. */
  toolId: string;
  /** Canonical category id; matches the literal strings in tools-data.js. */
  category: CategoryId;
  /** SPA bridge URL: /index.html#/tool/<id>. */
  appUrl: string;

  /** Optional H1 override. Defaults to the H1 portion of `title`. */
  h1?: string;

  // i18n -------------------------------------------------------------------
  lang?: Lang;          // default "en"
  dir?: "ltr" | "rtl";  // default "ltr" (or "rtl" when lang is ar)

  // Content slots ----------------------------------------------------------
  /** Hero paragraph under H1. Defaults to `description` (FR-6). */
  heroParagraph?: string;
  /** Exactly 3 numbered "How it works" steps. */
  howItWorks?: [string, string, string];
  /** 2–5 bullets for "Why use Stirling-PDF". */
  whyBullets?: string[];
  /** ≥ 3 Q/A. When omitted, a clear TODO placeholder renders (FR-6). */
  faq?: { q: string; a: string }[];
  /** Tool ids; auto-filled to 3–4 same-category siblings if omitted. */
  relatedTools?: string[];

  /** Optional hero/LCP image. Above-the-fold, must not be lazy-loaded. */
  heroImage?: { src: string; alt: string; width: number; height: number };
}

// ---------------------------------------------------------------------------
// Component
//
// Returns the full document tree (<html> through </html>). The renderer
// prepends `<!doctype html>` when serializing. design.md §3 shows this
// shape verbatim.
// ---------------------------------------------------------------------------

export function ToolStub(props: ToolStubProps) {
  const lang: Lang = props.lang ?? "en";
  const dir: "ltr" | "rtl" = props.dir ?? (lang === "ar" ? "rtl" : "ltr");
  const t = STRINGS[lang];

  const h1 = props.h1 ?? deriveH1FromTitle(props.title);
  const heroParagraph = props.heroParagraph ?? props.description;
  const howItWorks: [string, string, string] = props.howItWorks ?? [
    t.defaultStep1,
    t.defaultStep2(props.keyword),
    t.defaultStep3,
  ];
  const whyBullets = props.whyBullets ?? t.defaultWhyBullets;

  const relatedToolIds =
    props.relatedTools && props.relatedTools.length > 0
      ? props.relatedTools
      : deriveRelatedTools(props.category, props.toolId);

  const categoryName = CATEGORY_NAMES[props.category];
  const accent = CATEGORY_ACCENTS[props.category];
  const isRtl = dir === "rtl";
  const breadcrumbOrder = isRtl
    ? "flex flex-wrap gap-2 flex-row-reverse"
    : "flex flex-wrap gap-2";

  // -------------------------------------------------------------------------
  // <head>
  //
  // Slots reserved for FR-3 / FR-5:
  //   - <link rel="canonical">                — populated by technical-seo
  //   - <link rel="alternate" hreflang>       — populated by technical-seo
  //   - OG / Twitter card meta                — populated by technical-seo
  //   - JSON-LD primary schema (FR-3)         — populated by Schema Generator hook
  //
  // The component does not invent these (FR-6). Each placeholder carries a
  // `data-managed` / `data-generated` sentinel so the post-processing layer
  // can find and rewrite it without parsing JSX.
  // -------------------------------------------------------------------------

  const head = (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />

      {/* canonical + hreflang slots — technical-seo populates href values. */}
      <link rel="canonical" href="" data-managed="technical-seo" />
      <link rel="alternate" hrefLang={lang} href="" data-managed="technical-seo" />
      <link rel="alternate" hrefLang="x-default" href="" data-managed="technical-seo" />

      {/* OG / Twitter slot — technical-seo populates content values. */}
      <meta property="og:type" content="website" data-managed="technical-seo" />
      <meta property="og:title" content={props.title} data-managed="technical-seo" />
      <meta property="og:description" content={props.description} data-managed="technical-seo" />
      <meta property="og:url" content="" data-managed="technical-seo" />
      <meta name="twitter:card" content="summary" data-managed="technical-seo" />

      {/* JSON-LD slot (FR-3) — Schema Generator hook writes the body. */}
      <script
        type="application/ld+json"
        data-generated="schema-generator"
        data-tool-id={props.toolId}
      />

      <link rel="dns-prefetch" href="http://localhost:8080" />
      <link rel="stylesheet" href="/dist/tailwind.css" />
    </head>
  );

  // -------------------------------------------------------------------------
  // <body>  (FR-2 sections, in DOM order)
  // -------------------------------------------------------------------------

  return (
    <html lang={lang} dir={dir}>
      {head}
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {/* (1) Skip-to-content link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-blue-700 focus:px-3 focus:py-2 focus:rounded focus:shadow"
        >
          {t.skip}
        </a>

        {/* (2) Header — logo, category nav, language switcher placeholder */}
        <header role="banner" className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <a href="/" className="font-semibold text-gray-900">
              {t.brand}
            </a>
            <nav aria-label="Categories" className="hidden md:block">
              <ul className="flex items-center gap-4 text-sm text-gray-700">
                <li><a href="/tools/page-operations" className="hover:text-blue-700">{CATEGORY_NAMES["page-operations"]}</a></li>
                <li><a href="/tools/convert"         className="hover:text-blue-700">{CATEGORY_NAMES["convert"]}</a></li>
                <li><a href="/tools/security"        className="hover:text-blue-700">{CATEGORY_NAMES["security"]}</a></li>
                <li><a href="/tools/other"           className="hover:text-blue-700">{CATEGORY_NAMES["other"]}</a></li>
                <li><a href="/tools/advance"         className="hover:text-blue-700">{CATEGORY_NAMES["advance"]}</a></li>
              </ul>
            </nav>
            {/* Language switcher placeholder; populated when i18n routing ships. */}
            <div
              className="text-sm text-gray-500"
              aria-label={t.langSwitcher}
              data-managed="i18n-routing"
            >
              {lang.toUpperCase()}
            </div>
          </div>
        </header>

        <main id="main" role="main" data-tool-id={props.toolId} data-category={props.category} className="max-w-3xl mx-auto px-4 py-8">
          {/* (3) Breadcrumb — Home / Category / Tool. Auto-derived. */}
          <nav aria-label={t.breadcrumb} className="text-sm text-gray-600 mb-6">
            <ol className={breadcrumbOrder}>
              <li><a href="/" className="hover:text-blue-700">{t.home}</a></li>
              <li aria-hidden="true">/</li>
              <li><a href={`/tools/${props.category}`} className="hover:text-blue-700">{categoryName}</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">{h1}</li>
            </ol>
          </nav>

          {/* (4) H1 with keyword + (5) Hero paragraph + primary CTA */}
          <header className="mb-8">
            <span className={`inline-block text-xs font-medium border px-2 py-0.5 rounded ${accent}`}>
              {categoryName}
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">{h1}</h1>
            {props.heroImage ? (
              <img
                src={props.heroImage.src}
                alt={props.heroImage.alt}
                width={props.heroImage.width}
                height={props.heroImage.height}
                fetchpriority="high"
                decoding="async"
                data-fold="above"
                className="mt-4 rounded-lg w-full h-auto"
              />
            ) : null}
            <p className="mt-4 text-lg text-gray-700">{heroParagraph}</p>
            <a
              href={props.appUrl}
              data-tool-id={props.toolId}
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg"
            >
              {t.cta(h1)}
            </a>
          </header>

          {/* (6) How it works — 3 numbered steps */}
          <section aria-labelledby="how-it-works" className="mb-10">
            <h2 id="how-it-works" className="text-2xl font-semibold text-gray-900 mb-4">
              {t.howItWorks}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-800">
              {howItWorks.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </section>

          {/* (7) Why use Stirling-PDF — bullets pulled from product.md differentiators */}
          <section aria-labelledby="why" className="mb-10">
            <h2 id="why" className="text-2xl font-semibold text-gray-900 mb-4">
              {t.whyTitle}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {whyBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </section>

          {/* (8) FAQ — ≥ 3 Q/A; if not provided, render an explicit TODO (FR-6) */}
          <section aria-labelledby="faq" className="mb-10">
            <h2 id="faq" className="text-2xl font-semibold text-gray-900 mb-4">
              {t.faqTitle}
            </h2>
            {props.faq && props.faq.length >= 3 ? (
              <div className="space-y-3">
                {props.faq.map((qa, i) => (
                  <details key={i} className="border border-gray-200 rounded-md p-3 bg-white">
                    <summary className="font-medium cursor-pointer text-gray-900">{qa.q}</summary>
                    <p className="mt-2 text-gray-700">{qa.a}</p>
                  </details>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic" data-todo="faq">{t.faqPlaceholder}</p>
            )}
          </section>

          {/* (9) Related tools — 3–4 same-category siblings, auto-derived */}
          <section aria-labelledby="related" className="mb-10">
            <h2 id="related" className="text-2xl font-semibold text-gray-900 mb-4">
              {t.relatedTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedToolIds.map((id) => {
                const entry = lookupTool(id);
                const name = entry ? entry.name : id;
                return (
                  <li key={id}>
                    <a
                      href={`/tools/${slugForId(id)}`}
                      className="block border border-gray-200 rounded-md p-3 bg-white hover:border-blue-400 hover:text-blue-700"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>

        {/* (10) Footer */}
        <footer role="contentinfo" className="border-t border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
            <p>
              © <a href="/" className="hover:text-blue-700">{t.copyright}</a>
            </p>
            <ul className="flex flex-wrap gap-4">
              <li><a href="/tools/page-operations" className="hover:text-blue-700">{CATEGORY_NAMES["page-operations"]}</a></li>
              <li><a href="/tools/convert"         className="hover:text-blue-700">{CATEGORY_NAMES["convert"]}</a></li>
              <li><a href="/tools/security"        className="hover:text-blue-700">{CATEGORY_NAMES["security"]}</a></li>
              <li><a href="/tools/other"           className="hover:text-blue-700">{CATEGORY_NAMES["other"]}</a></li>
              <li><a href="/tools/advance"         className="hover:text-blue-700">{CATEGORY_NAMES["advance"]}</a></li>
            </ul>
            {/* Footer language switcher mirrors the header. */}
            <div data-managed="i18n-routing" aria-label={t.langSwitcher}>
              {lang.toUpperCase()}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default ToolStub;
