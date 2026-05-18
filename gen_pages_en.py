#!/usr/bin/env python3
"""Generate 50 English SEO pages for Stirling PDF Free Tools.
Each page has 1000+ UNIQUE keywords (no repetition across pages)."""
import os

os.makedirs("seo/en", exist_ok=True)

pages = [
    ("merge-pdf", "Merge PDF Files", "PDF Merger"),
    ("split-pdf", "Split PDF Files", "PDF Splitter"),
    ("compress-pdf", "Compress PDF Files", "PDF Compressor"),
    ("convert-pdf-to-word", "Convert PDF to Word", "PDF to DOCX"),
    ("convert-word-to-pdf", "Convert Word to PDF", "DOCX to PDF"),
    ("convert-pdf-to-excel", "Convert PDF to Excel", "PDF to XLSX"),
    ("convert-excel-to-pdf", "Convert Excel to PDF", "XLSX to PDF"),
    ("convert-pdf-to-ppt", "Convert PDF to PowerPoint", "PDF to PPTX"),
    ("convert-ppt-to-pdf", "Convert PowerPoint to PDF", "PPTX to PDF"),
    ("convert-pdf-to-image", "Convert PDF to Image", "PDF to JPG PNG"),
    ("convert-image-to-pdf", "Convert Image to PDF", "JPG PNG to PDF"),
    ("ocr-pdf", "OCR PDF Recognition", "PDF OCR Text Extract"),
    ("edit-pdf", "Edit PDF Online", "PDF Editor"),
    ("rotate-pdf", "Rotate PDF Pages", "PDF Rotation Tool"),
    ("watermark-pdf", "Add Watermark to PDF", "PDF Watermarking"),
    ("password-protect-pdf", "Password Protect PDF", "PDF Encryption"),
    ("unlock-pdf", "Unlock PDF Files", "Remove PDF Password"),
    ("sign-pdf", "Sign PDF Electronically", "PDF E-Signature"),
    ("pdf-to-html", "Convert PDF to HTML", "PDF to Webpage"),
    ("html-to-pdf", "Convert HTML to PDF", "Webpage to PDF"),
    ("extract-pages-pdf", "Extract Pages from PDF", "PDF Page Extractor"),
    ("delete-pages-pdf", "Delete Pages from PDF", "PDF Page Remover"),
    ("reorder-pages-pdf", "Reorder PDF Pages", "PDF Page Organizer"),
    ("add-page-numbers-pdf", "Add Page Numbers to PDF", "PDF Numbering"),
    ("pdf-metadata", "Edit PDF Metadata", "PDF Properties Editor"),
    ("flatten-pdf", "Flatten PDF Files", "PDF Flattener"),
    ("repair-pdf", "Repair Corrupted PDF", "PDF Recovery Tool"),
    ("crop-pdf", "Crop PDF Pages", "PDF Cropping Tool"),
    ("resize-pdf", "Resize PDF Documents", "PDF Resizer"),
    ("pdf-to-text", "Convert PDF to Text", "PDF Text Extractor"),
    ("add-image-to-pdf", "Add Image to PDF", "PDF Image Inserter"),
    ("pdf-bookmarks", "Add Bookmarks to PDF", "PDF Table of Contents"),
    ("compare-pdf", "Compare PDF Files", "PDF Diff Checker"),
    ("redact-pdf", "Redact PDF Content", "PDF Censoring Tool"),
    ("pdf-accessibility", "PDF Accessibility Checker", "ADA Compliant PDF"),
    ("pdf-forms", "Create PDF Forms", "PDF Form Builder"),
    ("fill-pdf-forms", "Fill PDF Forms Online", "PDF Form Filler"),
    ("pdf-annotations", "Annotate PDF Files", "PDF Markup Tool"),
    ("stamp-pdf", "Stamp PDF Documents", "PDF Stamping Tool"),
    ("grayscale-pdf", "Convert PDF to Grayscale", "Black White PDF"),
    ("pdf-to-pdfa", "Convert PDF to PDF/A", "PDF Archival Format"),
    ("multi-page-layout", "Multi Page Layout PDF", "N-up PDF Creator"),
    ("extract-images-pdf", "Extract Images from PDF", "PDF Image Extractor"),
    ("pdf-header-footer", "Add Header Footer to PDF", "PDF Header Tool"),
    ("batch-convert-pdf", "Batch Convert PDF Files", "Bulk PDF Converter"),
    ("scan-to-pdf", "Scan Documents to PDF", "Scanner to PDF"),
    ("pdf-optimizer", "Optimize PDF for Web", "PDF Size Optimizer"),
    ("merge-images-to-pdf", "Merge Images into PDF", "Photo to PDF Combiner"),
    ("pdf-translation", "Translate PDF Documents", "PDF Language Translator"),
    ("pdf-dark-mode", "PDF Dark Mode Viewer", "Night Mode PDF Reader"),
]

# Global set to track ALL used keywords across ALL pages
global_used_keywords = set()


def get_unique_keywords(slug, title, short, page_index):
    """Generate 1000+ UNIQUE English keywords for each page with zero repetition."""
    keywords = []

    # --- Core variations unique to this tool ---
    core = [
        f"{title}", f"{title} free", f"{title} online", f"{title} no signup",
        f"{title} without software", f"{title} instantly", f"{title} tool",
        f"{title} service", f"free {title}", f"online {title}",
        f"best {title}", f"fast {title}", f"easy {title}",
        f"secure {title}", f"safe {title}", f"quick {title}",
        f"{title} 2024", f"{title} 2025", f"{title} 2026",
        f"how to {title.lower()}", f"{title.lower()} step by step",
        f"{title.lower()} tutorial", f"{title.lower()} guide",
        f"{short}", f"{short} free", f"{short} online",
        f"best {short}", f"{short} tool", f"{short} service",
        f"Stirling PDF {title.lower()}", f"Stirling {short}",
    ]
    keywords.extend(core)

    # --- Platform combinations ---
    platforms = ["Windows", "Mac", "Linux", "Chrome OS", "Android", "iOS",
                 "iPhone", "iPad", "Samsung", "tablet", "desktop", "laptop",
                 "Chromebook", "Ubuntu", "Windows 10", "Windows 11", "macOS"]
    keywords.extend([f"{title} on {p}" for p in platforms])
    keywords.extend([f"{short} for {p}" for p in platforms])

    # --- Browser combinations ---
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]
    keywords.extend([f"{title} in {b}" for b in browsers])
    keywords.extend([f"{short} {b} extension" for b in browsers])

    # --- Use case combinations ---
    users = ["students", "teachers", "lawyers", "accountants", "engineers",
             "doctors", "designers", "developers", "writers", "journalists",
             "researchers", "scientists", "marketers", "managers", "freelancers",
             "businesses", "startups", "enterprises", "nonprofits", "government",
             "schools", "universities", "hospitals", "banks", "real estate"]
    keywords.extend([f"{title} for {u}" for u in users])
    keywords.extend([f"best {short} for {u}" for u in users])

    # --- Document type combinations ---
    doc_types = ["invoices", "contracts", "resumes", "reports", "presentations",
                 "ebooks", "manuals", "certificates", "receipts", "forms",
                 "brochures", "flyers", "posters", "tickets", "statements",
                 "proposals", "quotations", "legal documents", "tax forms",
                 "academic papers", "thesis", "dissertations", "newsletters",
                 "catalogs", "portfolios"]
    keywords.extend([f"{title} {d}" for d in doc_types])

    # --- Quality/feature adjectives ---
    features = ["high quality", "lossless", "fast processing", "batch mode",
                "drag and drop", "no file size limit", "unlimited",
                "no watermark", "no ads", "privacy focused", "encrypted",
                "GDPR compliant", "auto delete", "cloud based", "offline",
                "open source", "lightweight", "professional", "enterprise grade",
                "mobile friendly", "responsive", "multilingual", "accessible",
                "ADA compliant", "Section 508", "WCAG compliant"]
    keywords.extend([f"{title} {f}" for f in features])
    keywords.extend([f"{short} with {f}" for f in features])

    # --- Action verbs ---
    actions = ["upload", "download", "save", "export", "import", "share",
               "email", "print", "preview", "view", "open", "create",
               "generate", "produce", "make", "build", "design", "customize",
               "modify", "adjust", "configure", "setup", "install"]
    keywords.extend([f"{a} {short}" for a in actions])
    keywords.extend([f"{a} and {title.lower()}" for a in actions])

    # --- Comparison keywords ---
    competitors = ["Adobe Acrobat", "iLovePDF", "SmallPDF", "Foxit",
                   "Nitro PDF", "PDF24", "Sejda", "PDFsam", "Soda PDF"]
    keywords.extend([f"{title} vs {c}" for c in competitors])
    keywords.extend([f"{short} alternative to {c}" for c in competitors])
    keywords.extend([f"free {c} alternative {short}" for c in competitors])

    # --- File format keywords ---
    formats = ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
               "JPG", "JPEG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
               "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "CSV"]
    keywords.extend([f"{short} {fmt} format" for fmt in formats])

    # --- Size keywords ---
    sizes = ["large files", "small files", "100MB", "200MB", "500MB", "1GB",
             "multiple files", "bulk files", "100 pages", "500 pages",
             "1000 pages", "long documents", "heavy PDF", "oversized PDF"]
    keywords.extend([f"{title} {s}" for s in sizes])

    # --- Speed keywords ---
    speeds = ["in seconds", "instantly", "real time", "lightning fast",
              "no waiting", "immediate", "rapid", "turbo", "express"]
    keywords.extend([f"{title} {s}" for s in speeds])

    # --- Question keywords ---
    questions = [
        f"how to {title.lower()} free",
        f"where to {title.lower()} online",
        f"what is the best way to {title.lower()}",
        f"can I {title.lower()} without Adobe",
        f"is {title.lower()} safe online",
        f"why use Stirling PDF to {title.lower()}",
        f"how much does it cost to {title.lower()}",
        f"is there a free tool to {title.lower()}",
        f"what software can {title.lower()}",
        f"how do I {title.lower()} on my phone",
        f"can I {title.lower()} on mobile",
        f"does {title.lower()} work offline",
        f"is {title.lower()} with Stirling PDF secure",
        f"how fast is {title.lower()} online",
        f"will {title.lower()} reduce quality",
    ]
    keywords.extend(questions)

    # --- Industry keywords ---
    industries = ["healthcare", "finance", "legal", "education", "technology",
                  "manufacturing", "retail", "construction", "insurance",
                  "pharmaceutical", "automotive", "aerospace", "logistics",
                  "telecommunications", "energy", "media", "publishing"]
    keywords.extend([f"{title} for {ind} industry" for ind in industries])

    # --- Country/region keywords ---
    countries = ["USA", "UK", "Canada", "Australia", "India", "Germany",
                 "France", "Spain", "Italy", "Japan", "Brazil", "Mexico",
                 "Netherlands", "Sweden", "Norway", "Singapore", "South Korea",
                 "New Zealand", "Ireland", "Switzerland"]
    keywords.extend([f"{title} {c}" for c in countries])
    keywords.extend([f"best {short} in {c}" for c in countries])

    # --- Long tail unique phrases ---
    long_tails = [
        f"completely free {title.lower()} no credit card",
        f"{title.lower()} without downloading software",
        f"{title.lower()} directly in browser",
        f"secure cloud {title.lower()} service",
        f"open source {title.lower()} solution",
        f"privacy first {title.lower()} tool",
        f"enterprise {title.lower()} solution",
        f"automated {title.lower()} workflow",
        f"API for {title.lower()} integration",
        f"self hosted {title.lower()} server",
        f"Docker {title.lower()} container",
        f"{title.lower()} with command line",
        f"programmatic {title.lower()}",
        f"{title.lower()} REST API",
        f"batch {title.lower()} automation",
    ]
    keywords.extend(long_tails)

    # --- Numbered unique tips/methods per page ---
    for i in range(1, 120):
        keywords.append(f"{title} method {i + page_index * 120}")
        keywords.append(f"{short} tip number {i + page_index * 120}")
        keywords.append(f"step {i} to {title.lower()}")
        keywords.append(f"{short} solution {i + page_index * 120}")

    # --- Unique slug-based keywords ---
    slug_words = slug.replace("-", " ").split()
    for w in slug_words:
        keywords.append(f"free {w} PDF tool online")
        keywords.append(f"best {w} PDF software 2025")
        keywords.append(f"{w} PDF documents easily")
        keywords.append(f"how to {w} PDF files free")

    # Filter out any keywords already used globally
    unique_keywords = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in global_used_keywords and kw_lower:
            global_used_keywords.add(kw_lower)
            unique_keywords.append(kw)

    # If still under 1100, add more unique numbered variants
    counter = 1000 + page_index * 500
    while len(unique_keywords) < 1100:
        extra = f"{title} unique approach {counter}"
        if extra.lower() not in global_used_keywords:
            global_used_keywords.add(extra.lower())
            unique_keywords.append(extra)
        counter += 1

    return unique_keywords[:1100]


def gen_html(slug, title, short, keywords):
    """Generate a full English SEO HTML page."""
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append(", ".join(chunk))

    section_titles = [
        f"What is {title}?",
        f"Key Features of {title}",
        f"How to {title} with Stirling PDF",
        f"Why Choose Stirling PDF for {title}?",
        f"Frequently Asked Questions about {title}",
        f"Pro Tips for {title}",
        f"Use Cases for {title}",
        f"Comparing {title} Tools",
        f"{title} on Different Devices",
        f"Security & Privacy in {title}",
        f"Related Keywords",
    ]

    sections_html = ""
    for idx, sec_title in enumerate(section_titles):
        if idx < len(kw_sections):
            sections_html += f"""
    <section class="mb-8">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">{sec_title}</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
            {kw_sections[idx]}
        </p>
    </section>"""

    html = f"""<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Free Online - Stirling PDF Free Tools</title>
    <meta name="description" content="{title} free online without software. {short} from Stirling PDF - the best free open-source PDF tools on the web.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/en/{slug}.html">
    <meta property="og:title" content="{title} Free - Stirling PDF">
    <meta property="og:description" content="Free {short} tool by Stirling PDF. {title} quickly and securely.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en_US">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <header class="bg-blue-700 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <div class="flex gap-4">
                    <a href="../../index.html" class="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">Home</a>
                    <a href="../ar/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">عربي</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-blue-900 mb-6 text-center">{title} Free Online - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Welcome to the free <strong>{title}</strong> tool by Stirling PDF.
                We provide the best solution for <strong>{short}</strong> directly in your browser without installing any software.
                Our tool is completely free, secure, and works on all devices.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p class="text-blue-800 font-semibold">&#10003; 100% Free &#10003; No Registration &#10003; Secure & Private &#10003; Open Source</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-green-50 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-green-800 mb-4">Get Started Now - {title}</h2>
            <p class="text-gray-700 mb-4">
                Use the {title} tool from Stirling PDF right now for free. No account registration or software download required.
                Simply upload your file and we handle the rest.
            </p>
            <a href="../../index.html" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition">
                Use Tool Now
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - Free & Open Source PDF Tools</p>
            <p class="text-sm">All Rights Reserved &copy; 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html


# Generate all pages
print(f"Generating {len(pages)} English SEO pages...")
for idx, (slug, title, short) in enumerate(pages):
    keywords = get_unique_keywords(slug, title, short, idx)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/en/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} unique keywords)")

print(f"\nDone! Generated {len(pages)} English SEO pages in seo/en/")
print(f"Total unique keywords used globally: {len(global_used_keywords)}")
