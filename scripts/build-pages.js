#!/usr/bin/env node
/**
 * Static Page Generator — converts src/routes/tools/*.tsx into real HTML.
 *
 * This is the missing link between "56 TSX stubs exist" and "Google can crawl them."
 * No React runtime, no Astro, no framework. Pure Node.js reading the meta exports
 * and the _ToolStub layout contract, producing static HTML files.
 *
 * Output: dist/tools/<slug>.html (EN) and dist/ar/tools/<slug>.html (AR)
 *
 * Usage:
 *   node scripts/build-pages.js
 *   # or via npm:
 *   npm run build:pages
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TOOLS_DIR = path.join(ROOT, 'src/routes/tools');
const DIST = path.join(ROOT, 'dist');
const TOOLS_DATA = path.join(ROOT, 'js/tools-data.js');

// ---------------------------------------------------------------------------
// Read tool catalog for category labels and related tools
// ---------------------------------------------------------------------------
const toolsJs = fs.readFileSync(TOOLS_DATA, 'utf8');
const toolMatches = [...toolsJs.matchAll(/\{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*desc:\s*'([^']+)',\s*category:\s*'([^']+)'/g)];
const catIds = new Set(['page-operations', 'convert', 'security', 'other', 'advance']);
const tools = toolMatches.filter(m => !catIds.has(m[1])).map(m => ({
  id: m[1], name: m[2], desc: m[3], category: m[4]
}));

const CATEGORY_LABELS = {
  'page-operations': 'Page Operations',
  'convert': 'Convert',
  'security': 'Security',
  'other': 'Other Tools',
  'advance': 'Advanced',
};
const CATEGORY_LABELS_AR = {
  'page-operations': 'عمليات الصفحات',
  'convert': 'تحويل',
  'security': 'الأمان',
  'other': 'أدوات أخرى',
  'advance': 'متقدم',
};

// Group by category
const byCat = {};
tools.forEach(t => { if (!byCat[t.category]) byCat[t.category] = []; byCat[t.category].push(t); });

function getRelatedTools(toolId, category) {
  const siblings = (byCat[category] || []).filter(t => t.id !== toolId).slice(0, 4);
  return siblings;
}

// ---------------------------------------------------------------------------
// Extract meta from TSX file (regex-based, no TS compiler needed)
// ---------------------------------------------------------------------------
function extractMeta(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const get = (key) => {
    const m = content.match(new RegExp(key + ':\\s*["\']([^"\']+)["\']'));
    return m ? m[1] : '';
  };
  // lang/dir may be in JSX props, not in meta object
  // e.g. lang="ar" dir="rtl" in the component call
  const langMatch = content.match(/lang="(ar|en)"/);
  const dirMatch = content.match(/dir="(rtl|ltr)"/);
  return {
    title: get('title'),
    description: get('description'),
    keyword: get('keyword'),
    toolId: get('toolId'),
    category: get('category'),
    appUrl: get('appUrl'),
    lang: (langMatch ? langMatch[1] : get('lang')) || 'en',
    dir: (dirMatch ? dirMatch[1] : get('dir')) || 'ltr',
  };
}

// ---------------------------------------------------------------------------
// HTML template — the REAL static page Google will crawl
// ---------------------------------------------------------------------------
function renderPage(meta, related) {
  const isAr = meta.lang === 'ar';
  const catLabel = isAr ? CATEGORY_LABELS_AR[meta.category] : CATEGORY_LABELS[meta.category];
  const titleClean = meta.title.split(' — ')[0];
  const cssPath = isAr ? '../../dist/tailwind.css' : '../dist/tailwind.css';

  // Default steps
  const steps = isAr
    ? ['ارفع ملف PDF الخاص بك إلى الأداة.', `شغّل عملية ${meta.keyword} — بدون تسجيل.`, 'نزّل النتيجة. ملفاتك تبقى على بنيتك التحتية.']
    : ['Drop your PDF into the tool.', `Run the ${meta.keyword} action — no signup required.`, 'Download the result. Files stay on your infrastructure when self-hosted.'];

  const whyBullets = isAr
    ? ['مجاني ومفتوح المصدر.', 'قابل للاستضافة الذاتية — ملفاتك لا تغادر شبكتك.', 'أكثر من 56 أداة PDF ضمن 5 فئات.']
    : ['Free and open source.', 'Self-hostable — your files never leave your network.', '56+ PDF tools across 5 categories.'];

  const relatedHtml = related.map(t => {
    const slug = t.id;
    const href = isAr ? `/ar/tools/${slug}.html` : `/tools/${slug}.html`;
    return `<li><a href="${href}" class="block p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all text-gray-900 font-medium">${t.name}</a></li>`;
  }).join('\n            ');

  return `<!DOCTYPE html>
<html lang="${meta.lang}" dir="${meta.dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}">
    <link rel="canonical" href="https://example.com/${isAr ? 'ar/' : ''}tools/${meta.toolId}.html">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="${isAr ? 'ar_SA' : 'en_US'}">
    <link rel="stylesheet" href="${cssPath}">
    <script type="application/ld+json" data-generated="schema-generator">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "${titleClean}",
      "description": "${meta.description}",
      "applicationCategory": "Utilities",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    }
    </script>
</head>
<body class="bg-gray-50 min-h-screen">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg">${isAr ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>

    <header class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" class="font-bold text-xl text-gray-900">Stirling-PDF</a>
            <nav class="flex items-center gap-4">
                <a href="/" class="text-gray-600 hover:text-blue-600 text-sm font-medium">${isAr ? 'جميع الأدوات' : 'All Tools'}</a>
            </nav>
        </div>
    </header>

    <nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 py-3">
        <ol class="flex items-center gap-2 text-sm text-gray-500">
            <li><a href="/">${isAr ? 'الرئيسية' : 'Home'}</a></li>
            <li>/</li>
            <li>${catLabel}</li>
            <li>/</li>
            <li class="text-gray-900 font-medium">${titleClean}</li>
        </ol>
    </nav>

    <main id="main" class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">${titleClean}</h1>
        <p class="text-lg text-gray-600 mb-6">${meta.description}</p>
        <a href="${meta.appUrl}" class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors mb-12">
            ${isAr ? `افتح أداة ${titleClean}` : `Open the ${titleClean} tool`}
        </a>

        <section class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">${isAr ? 'كيف تعمل' : 'How it works'}</h2>
            <ol class="list-decimal list-inside space-y-3 text-gray-700">
                <li>${steps[0]}</li>
                <li>${steps[1]}</li>
                <li>${steps[2]}</li>
            </ol>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">${isAr ? 'لماذا Stirling-PDF' : 'Why Stirling-PDF'}</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
                ${whyBullets.map(b => `<li>${b}</li>`).join('\n                ')}
            </ul>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">${isAr ? 'أدوات ذات صلة' : 'Related tools'}</h2>
            <ul class="grid grid-cols-2 gap-4">
            ${relatedHtml}
            </ul>
        </section>
    </main>

    <footer class="bg-gray-50 border-t border-gray-200 mt-16">
        <div class="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
            Stirling-PDF — ${isAr ? 'مجاني ومفتوح المصدر' : 'Free & Open Source'}
        </div>
    </footer>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Build all pages
// ---------------------------------------------------------------------------
function buildAll() {
  const enDir = path.join(DIST, 'tools');
  const arDir = path.join(DIST, 'ar', 'tools');
  fs.mkdirSync(enDir, { recursive: true });
  fs.mkdirSync(arDir, { recursive: true });

  let enCount = 0, arCount = 0;

  // EN pages
  const enFiles = fs.readdirSync(TOOLS_DIR).filter(f => f.endsWith('.tsx') && !f.startsWith('_'));
  enFiles.forEach(f => {
    const meta = extractMeta(path.join(TOOLS_DIR, f));
    const related = getRelatedTools(meta.toolId, meta.category);
    const html = renderPage(meta, related);
    const outFile = path.join(enDir, f.replace('.tsx', '.html'));
    fs.writeFileSync(outFile, html);
    enCount++;
  });

  // AR pages
  const arSrcDir = path.join(TOOLS_DIR, 'ar');
  if (fs.existsSync(arSrcDir)) {
    const arFiles = fs.readdirSync(arSrcDir).filter(f => f.endsWith('.tsx'));
    arFiles.forEach(f => {
      const meta = extractMeta(path.join(arSrcDir, f));
      const related = getRelatedTools(meta.toolId, meta.category);
      const html = renderPage(meta, related);
      const outFile = path.join(arDir, f.replace('.tsx', '.html'));
      fs.writeFileSync(outFile, html);
      arCount++;
    });
  }

  console.log(`Built ${enCount} EN pages -> dist/tools/`);
  console.log(`Built ${arCount} AR pages -> dist/ar/tools/`);
  console.log(`Total: ${enCount + arCount} static HTML files`);
  console.log(`\nGoogle can now crawl: /tools/<slug>.html and /ar/tools/<slug>.html`);
}

buildAll();
