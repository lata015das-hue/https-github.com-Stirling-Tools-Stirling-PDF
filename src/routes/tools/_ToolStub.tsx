/**
 * _ToolStub.tsx — Full layout component for tool landing pages.
 *
 * Implements all 10 DOM sections from .kiro/specs/tool-pages-seo/design.md §3:
 *   1. Skip-to-content link
 *   2. Header (logo, nav, language switcher placeholder)
 *   3. Breadcrumb (Home → Category → Tool)
 *   4. H1 with keyword
 *   5. Hero (description + primary CTA)
 *   6. "How it works" — 3 numbered steps
 *   7. "Why use it" — bullets
 *   8. FAQ — ≥3 Q/A via <details>
 *   9. Related tools — sibling tools from same category
 *  10. Footer
 *
 * Plus <head> slots for:
 *   - <title> and <meta description>
 *   - Canonical + hreflang (placeholder slots, populated by technical-seo)
 *   - OG tags
 *   - JSON-LD (placeholder slot, populated by Schema Generator hook)
 *
 * This file is framework-agnostic JSX. It does NOT depend on React, Preact,
 * or Astro at runtime. It's scaffolding for a future static-page renderer.
 * Until that renderer ships, treat this as the *contract* the per-page files
 * must satisfy.
 *
 * Rules enforced:
 *   - All Tailwind classes are COMPLETE LITERALS (R-3).
 *   - No images shipped without width/height/alt/loading (R-4).
 *   - No third-party CDN scripts (Lighthouse budget).
 *   - No fabricated data (seo-rules.md §7).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FaqItem {
  q: string;
  a: string;
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ToolStubProps {
  // --- Identification (required, from per-page meta) ---
  title: string;
  description: string;
  keyword: string;
  toolId: string;
  category: "page-operations" | "convert" | "security" | "other" | "advance";
  appUrl: string;

  // --- i18n ---
  lang?: "en" | "ar";
  dir?: "ltr" | "rtl";

  // --- Content slots (optional — fallbacks provided) ---
  heroParagraph?: string;
  howItWorks?: [string, string, string];
  whyBullets?: string[];
  faq?: FaqItem[];
  relatedTools?: string[];

  // --- Optional visual ---
  heroImage?: HeroImage;
}

// ---------------------------------------------------------------------------
// Category metadata (derived from js/tools-data.js shape)
// ---------------------------------------------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  "page-operations": "Page Operations",
  "convert": "Convert",
  "security": "Security",
  "other": "Other Tools",
  "advance": "Advanced",
};

const CATEGORY_LABELS_AR: Record<string, string> = {
  "page-operations": "عمليات الصفحات",
  "convert": "تحويل",
  "security": "الأمان",
  "other": "أدوات أخرى",
  "advance": "متقدم",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ToolStub(props: ToolStubProps) {
  const {
    title,
    description,
    keyword,
    toolId,
    category,
    appUrl,
    lang = "en",
    dir = "ltr",
    heroParagraph,
    howItWorks,
    whyBullets,
    faq,
    relatedTools,
    heroImage,
  } = props;

  const isAr = lang === "ar";
  const catLabel = isAr ? CATEGORY_LABELS_AR[category] : CATEGORY_LABELS[category];
  const catSlug = category;

  // Default content when per-page overrides aren't provided
  const defaultHero = description;
  const defaultSteps: [string, string, string] = [
    isAr
      ? "ارفع ملف PDF الخاص بك إلى الأداة."
      : "Drop your PDF into the tool.",
    isAr
      ? `شغّل عملية ${keyword} — بدون تسجيل، بدون بريد إلكتروني.`
      : `Run the ${keyword} action — no signup, no email required.`,
    isAr
      ? "نزّل النتيجة. ملفاتك تبقى على بنيتك التحتية عند الاستضافة الذاتية."
      : "Download the result. Files stay on your own infrastructure when self-hosted.",
  ];
  const defaultWhy = isAr
    ? [
        "مجاني ومفتوح المصدر.",
        "قابل للاستضافة الذاتية — ملفاتك لا تغادر شبكتك.",
        "يغطي أكثر من 56 أداة PDF ضمن 5 فئات.",
      ]
    : [
        "Free and open source.",
        "Self-hostable — your files never leave your network.",
        "Covers 56+ PDF tools across 5 categories.",
      ];
  const defaultFaq: FaqItem[] = [];

  const steps = howItWorks || defaultSteps;
  const bullets = whyBullets || defaultWhy;
  const faqItems = faq && faq.length > 0 ? faq : defaultFaq;
  const related = relatedTools || [];

  return (
    <>
      {/* ===== HEAD SLOTS (rendered by the static-page framework) ===== */}
      {/*
        The following would be in <head> when rendered:
        <html lang={lang} dir={dir}>
        <head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href="PLACEHOLDER — populated by technical-seo" />
          <link rel="alternate" hreflang="en" href="PLACEHOLDER" />
          <link rel="alternate" hreflang="ar" href="PLACEHOLDER" />
          <link rel="alternate" hreflang="x-default" href="PLACEHOLDER" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={isAr ? "ar_SA" : "en_US"} />
          <script type="application/ld+json" data-generated="schema-generator">
            // Populated by Schema Generator hook
          </script>
        </head>
      */}

      {/* ===== 1. SKIP LINK ===== */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-primary-700 focus:underline"
      >
        {isAr ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>

      {/* ===== 2. HEADER ===== */}
      <header role="banner" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-primary-600 p-2.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">Stirling-PDF</span>
          </a>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm">
              {isAr ? "جميع الأدوات" : "All Tools"}
            </a>
            {/* Language switcher placeholder */}
            <div className="text-xs bg-gray-100 px-3 py-1.5 rounded-lg">
              {isAr ? "EN" : "عربي"}
            </div>
          </nav>
        </div>
      </header>

      {/* ===== 3. BREADCRUMB ===== */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-primary-600">{isAr ? "الرئيسية" : "Home"}</a></li>
          <li className="text-gray-300">/</li>
          <li><a href={`/#/category/${catSlug}`} className="hover:text-primary-600">{catLabel}</a></li>
          <li className="text-gray-300">/</li>
          <li className="text-gray-900 font-medium" aria-current="page">{title.split(" — ")[0]}</li>
        </ol>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main id="main" role="main" className="max-w-4xl mx-auto px-4 py-8" data-tool-id={toolId} data-category={category}>

        {/* ===== 4. H1 ===== */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title.split(" — ")[0]}</h1>

        {/* ===== 5. HERO ===== */}
        {heroImage && (
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            fetchpriority="high"
            decoding="async"
            className="w-full rounded-xl mb-6"
          />
        )}
        <p className="text-lg text-gray-600 mb-6">{heroParagraph || defaultHero}</p>
        <a
          href={appUrl}
          className="inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors mb-12"
        >
          {isAr ? `افتح أداة ${title.split(" — ")[0]}` : `Open the ${title.split(" — ")[0]} tool`}
        </a>

        {/* ===== 6. HOW IT WORKS ===== */}
        <section aria-labelledby="how-it-works" className="mb-12">
          <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mb-4">
            {isAr ? "كيف تعمل" : "How it works"}
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="pl-2">{steps[0]}</li>
            <li className="pl-2">{steps[1]}</li>
            <li className="pl-2">{steps[2]}</li>
          </ol>
        </section>

        {/* ===== 7. WHY USE IT ===== */}
        <section aria-labelledby="why-stirling" className="mb-12">
          <h2 id="why-stirling" className="text-2xl font-bold text-gray-900 mb-4">
            {isAr ? "لماذا Stirling-PDF" : "Why Stirling-PDF"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {bullets.map((b, i) => (
              <li key={i} className="pl-2">{b}</li>
            ))}
          </ul>
        </section>

        {/* ===== 8. FAQ ===== */}
        <section aria-labelledby="faq" className="mb-12">
          <h2 id="faq" className="text-2xl font-bold text-gray-900 mb-4">
            {isAr ? "أسئلة شائعة" : "Frequently asked questions"}
          </h2>
          {faqItems.length > 0 ? (
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-lg p-4 group">
                  <summary className="font-medium text-gray-900 cursor-pointer group-open:mb-2">
                    {item.q}
                  </summary>
                  <p className="text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              {isAr ? "الأسئلة الشائعة قيد الإعداد." : "FAQ to be authored before publish."}
            </p>
          )}
        </section>

        {/* ===== 9. RELATED TOOLS ===== */}
        {related.length > 0 && (
          <section aria-labelledby="related" className="mb-12">
            <h2 id="related" className="text-2xl font-bold text-gray-900 mb-4">
              {isAr ? "أدوات ذات صلة" : "Related tools"}
            </h2>
            <ul className="grid grid-cols-2 gap-4">
              {related.map((id) => (
                <li key={id}>
                  <a
                    href={`/tools/${id}`}
                    className="block p-4 border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all text-gray-900 font-medium"
                  >
                    {id.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      {/* ===== 10. FOOTER ===== */}
      <footer role="contentinfo" className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-semibold text-gray-900">Stirling-PDF</span>
              <span>•</span>
              <span>{isAr ? "مجاني ومفتوح المصدر" : "Free & Open Source"}</span>
            </div>
            <nav className="flex items-center gap-4 text-sm text-gray-500">
              <a href="/" className="hover:text-primary-600">{isAr ? "جميع الأدوات" : "All Tools"}</a>
              <a href="https://github.com/Stirling-Tools/Stirling-PDF" className="hover:text-primary-600">GitHub</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ToolStub;
