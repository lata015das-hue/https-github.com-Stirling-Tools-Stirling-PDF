#!/usr/bin/env python3
import os

os.makedirs("seo/ar", exist_ok=True)

pages = [
    ("merge-pdf", "دمج ملفات PDF", "دمج PDF"),
    ("split-pdf", "تقسيم ملفات PDF", "تقسيم PDF"),
    ("compress-pdf", "ضغط ملفات PDF", "ضغط PDF"),
    ("convert-pdf-to-word", "تحويل PDF إلى Word", "تحويل PDF وورد"),
    ("convert-word-to-pdf", "تحويل Word إلى PDF", "تحويل وورد PDF"),
    ("convert-pdf-to-excel", "تحويل PDF إلى Excel", "تحويل PDF اكسل"),
    ("convert-excel-to-pdf", "تحويل Excel إلى PDF", "تحويل اكسل PDF"),
    ("convert-pdf-to-ppt", "تحويل PDF إلى PowerPoint", "تحويل PDF بوربوينت"),
    ("convert-ppt-to-pdf", "تحويل PowerPoint إلى PDF", "تحويل بوربوينت PDF"),
    ("convert-pdf-to-image", "تحويل PDF إلى صور", "تحويل PDF صور"),
    ("convert-image-to-pdf", "تحويل الصور إلى PDF", "تحويل صور PDF"),
    ("ocr-pdf", "التعرف الضوئي على النصوص OCR", "OCR عربي PDF"),
    ("edit-pdf", "تعديل ملفات PDF", "تعديل PDF"),
    ("rotate-pdf", "تدوير صفحات PDF", "تدوير PDF"),
    ("watermark-pdf", "إضافة علامة مائية PDF", "علامة مائية PDF"),
    ("password-protect-pdf", "حماية PDF بكلمة مرور", "تشفير PDF"),
    ("unlock-pdf", "فك حماية PDF", "إزالة كلمة مرور PDF"),
    ("sign-pdf", "توقيع ملفات PDF", "توقيع إلكتروني PDF"),
    ("pdf-to-html", "تحويل PDF إلى HTML", "تحويل PDF HTML"),
    ("html-to-pdf", "تحويل HTML إلى PDF", "تحويل صفحة ويب PDF"),
    ("extract-pages-pdf", "استخراج صفحات من PDF", "استخراج صفحات PDF"),
    ("delete-pages-pdf", "حذف صفحات من PDF", "حذف صفحات PDF"),
    ("reorder-pages-pdf", "إعادة ترتيب صفحات PDF", "ترتيب صفحات PDF"),
    ("add-page-numbers-pdf", "إضافة أرقام صفحات PDF", "ترقيم صفحات PDF"),
    ("pdf-metadata", "تعديل بيانات PDF الوصفية", "ميتاداتا PDF"),
    ("flatten-pdf", "تسطيح ملفات PDF", "تسطيح PDF"),
    ("repair-pdf", "إصلاح ملفات PDF التالفة", "إصلاح PDF"),
    ("crop-pdf", "قص صفحات PDF", "اقتصاص PDF"),
    ("resize-pdf", "تغيير حجم PDF", "تغيير أبعاد PDF"),
    ("pdf-to-text", "تحويل PDF إلى نص", "استخراج نص PDF"),
    ("add-image-to-pdf", "إضافة صور إلى PDF", "إدراج صورة PDF"),
    ("pdf-bookmarks", "إضافة إشارات مرجعية PDF", "فهرس PDF"),
    ("compare-pdf", "مقارنة ملفات PDF", "مقارنة PDF"),
    ("redact-pdf", "تنقيح ملفات PDF", "حجب محتوى PDF"),
    ("pdf-accessibility", "إمكانية الوصول PDF", "PDF سهل الوصول"),
    ("pdf-forms", "إنشاء نماذج PDF", "نماذج PDF تفاعلية"),
    ("fill-pdf-forms", "ملء نماذج PDF", "تعبئة نماذج PDF"),
    ("pdf-annotations", "إضافة تعليقات PDF", "تعليقات PDF"),
    ("stamp-pdf", "إضافة ختم على PDF", "ختم PDF"),
    ("grayscale-pdf", "تحويل PDF لأبيض وأسود", "PDF أبيض أسود"),
    ("pdf-to-pdfa", "تحويل PDF إلى PDF/A", "أرشفة PDF"),
    ("multi-page-layout", "تخطيط متعدد الصفحات", "عدة صفحات في صفحة"),
    ("extract-images-pdf", "استخراج الصور من PDF", "استخراج صور PDF"),
    ("pdf-header-footer", "إضافة رأس وتذييل PDF", "ترويسة PDF"),
    ("batch-convert-pdf", "تحويل دفعي PDF", "تحويل ملفات متعددة PDF"),
    ("scan-to-pdf", "مسح ضوئي إلى PDF", "سكانر PDF"),
    ("pdf-optimizer", "تحسين ملفات PDF", "تحسين PDF للويب"),
    ("merge-images-to-pdf", "دمج صور في PDF", "تجميع صور PDF"),
    ("pdf-translation", "ترجمة ملفات PDF", "ترجمة PDF عربي"),
    ("pdf-dark-mode", "الوضع الداكن PDF", "PDF وضع ليلي"),
]

print(f"Generating {len(pages)} pages...")


def get_keywords(slug, title, short):
    """Generate 1000+ Arabic keywords for each page."""
    base = [
        title, short,
        f"{title} مجاناً", f"{title} أونلاين", f"{title} بدون برامج",
        f"{title} على الإنترنت", f"{title} مباشرة", f"أداة {title}",
        f"برنامج {title}", f"موقع {title}", f"{title} بسرعة",
        f"{title} بسهولة", f"{title} آمن", f"{title} مجاني",
        f"أفضل أداة {title}", f"أفضل موقع {title}",
        f"{title} بدون تسجيل", f"{title} بدون حدود",
        f"{title} للجوال", f"{title} للكمبيوتر", f"{title} للأندرويد",
        f"{title} للآيفون", f"{title} ويندوز", f"{title} ماك",
        f"{title} لينكس", f"كيفية {title}", f"طريقة {title}",
        f"شرح {title}", f"خطوات {title}", f"{title} احترافي",
        f"{title} سريع", f"{title} مضمون", f"{title} بجودة عالية",
    ]
    # PDF generic keywords
    pdf_generic = [
        "PDF عربي", "ملفات PDF", "أدوات PDF مجانية", "تحرير PDF",
        "معالجة PDF", "PDF أونلاين", "أدوات PDF على الإنترنت",
        "Stirling PDF", "Stirling PDF مجاني", "أدوات Stirling PDF",
        "تحميل PDF", "رفع PDF", "مشاركة PDF", "طباعة PDF",
        "قراءة PDF", "عرض PDF", "فتح PDF", "إنشاء PDF",
        "PDF محمول", "PDF رقمي", "مستندات PDF", "وثائق PDF",
        "ملف PDF", "صيغة PDF", "تنسيق PDF", "PDF عالي الجودة",
        "PDF صغير الحجم", "PDF خفيف", "PDF سريع التحميل",
        "PDF متوافق", "PDF قياسي", "PDF احترافي",
        "أمان PDF", "خصوصية PDF", "PDF آمن", "PDF مشفر",
        "PDF بدون فيروسات", "PDF نظيف", "PDF موثوق",
    ]
    # Action keywords
    actions = [
        "تحميل", "رفع", "تنزيل", "حفظ", "إرسال", "مشاركة",
        "طباعة", "نسخ", "لصق", "نقل", "حذف", "إضافة",
        "تعديل", "تغيير", "تحسين", "تصغير", "تكبير", "ضبط",
    ]
    action_kw = [f"{a} {short}" for a in actions] + [f"{a} ملفات PDF" for a in actions]
    # Device keywords
    devices = [
        "هاتف", "جوال", "موبايل", "تابلت", "لابتوب", "كمبيوتر",
        "آيباد", "سامسونج", "هواوي", "شاومي", "أوبو", "فيفو",
    ]
    device_kw = [f"{title} على {d}" for d in devices]
    # OS keywords
    systems = ["ويندوز 10", "ويندوز 11", "ماك", "لينكس", "أوبنتو", "كروم بوك"]
    sys_kw = [f"{title} {s}" for s in systems]
    # Browser keywords
    browsers = ["كروم", "فايرفوكس", "سفاري", "إيدج", "أوبرا"]
    browser_kw = [f"{title} متصفح {b}" for b in browsers]
    # Use case keywords
    uses = [
        "للطلاب", "للمعلمين", "للشركات", "للموظفين", "للمحامين",
        "للمهندسين", "للأطباء", "للمحاسبين", "للمصممين", "للمبرمجين",
        "للكتاب", "للصحفيين", "للباحثين", "للجامعات", "للمدارس",
        "للمؤسسات", "للحكومة", "للبنوك", "للتعليم", "للعمل",
        "للدراسة", "للبحث العلمي", "للتقارير", "للعقود", "للفواتير",
        "للسيرة الذاتية", "للعروض التقديمية", "للكتب", "للمجلات",
        "للنشرات", "للإعلانات", "للملصقات", "للبطاقات",
    ]
    use_kw = [f"{title} {u}" for u in uses]
    # Quality keywords
    quality = [
        "بدقة عالية", "بجودة ممتازة", "بدون فقدان جودة", "بأفضل جودة",
        "بدقة 300 DPI", "بدقة الطباعة", "بجودة الأصل", "بدون تشويش",
        "واضح", "نقي", "حاد", "مفصل", "دقيق",
    ]
    quality_kw = [f"{title} {q}" for q in quality]
    # Speed keywords
    speed = [
        "في ثوانٍ", "في دقيقة", "فوري", "لحظي", "سريع جداً",
        "بدون انتظار", "تلقائي", "آلي", "ذكي", "متقدم",
    ]
    speed_kw = [f"{title} {s}" for s in speed]
    # Language keywords
    langs = [
        "عربي", "إنجليزي", "فرنسي", "ألماني", "إسباني", "تركي",
        "أوردو", "فارسي", "هندي", "صيني", "ياباني", "كوري",
    ]
    lang_kw = [f"{title} {l}" for l in langs]
    # Size keywords
    sizes = [
        "ملفات كبيرة", "ملفات صغيرة", "100 ميجا", "200 ميجا",
        "500 ميجا", "1 جيجا", "بدون حد حجم", "ملفات ضخمة",
        "مستندات طويلة", "100 صفحة", "500 صفحة", "1000 صفحة",
    ]
    size_kw = [f"{title} {s}" for s in sizes]
    # Question keywords
    questions = [
        f"كيف أستطيع {title}؟", f"ما أفضل طريقة لـ{title}؟",
        f"هل يمكنني {title} مجاناً؟", f"أين أستطيع {title}؟",
        f"لماذا أحتاج {title}؟", f"متى أحتاج {title}؟",
        f"ما الفرق بين أدوات {title}؟", f"هل {title} آمن؟",
        f"هل {title} يحافظ على الجودة؟", f"كم يستغرق {title}؟",
    ]
    # Comparison keywords
    comparisons = [
        f"{title} مقابل Adobe", f"{title} بديل Adobe Acrobat",
        f"{title} أفضل من iLovePDF", f"{title} أفضل من SmallPDF",
        f"{title} بديل Foxit", f"{title} مقارنة بالبرامج المدفوعة",
        f"Stirling PDF مقابل Adobe", f"Stirling PDF أفضل بديل مجاني",
    ]
    # Year keywords
    years = [f"{title} 2024", f"{title} 2025", f"{title} 2026",
             f"أفضل أداة {title} 2024", f"أفضل أداة {title} 2025",
             f"أفضل أداة {title} 2026", f"أحدث أداة {title}"]
    # Format keywords
    formats = [
        "PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
        "JPG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
        "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB",
    ]
    format_kw = [f"تحويل {f} PDF" for f in formats] + [f"PDF إلى {f}" for f in formats]
    # Feature keywords
    features = [
        "مجاني بالكامل", "بدون إعلانات", "بدون علامة مائية",
        "بدون تسجيل حساب", "بدون بريد إلكتروني", "سحب وإفلات",
        "واجهة عربية", "دعم اللغة العربية", "RTL", "يمين لليسار",
        "خطوط عربية", "ترميز UTF-8", "معالجة سحابية",
        "معالجة محلية", "بدون رفع للسيرفر", "خصوصية تامة",
        "حذف تلقائي", "SSL مشفر", "HTTPS آمن",
        "متوافق مع الجوال", "تصميم متجاوب", "سهل الاستخدام",
        "بدون خبرة تقنية", "للمبتدئين", "احترافي",
        "دفعي", "معالجة متعددة", "batch processing",
        "API متاح", "تكامل", "أتمتة",
    ]
    feature_kw = [f"{title} - {f}" for f in features]
    # Combine all
    all_kw = (base + pdf_generic + action_kw + device_kw + sys_kw +
              browser_kw + use_kw + quality_kw + speed_kw + lang_kw +
              size_kw + questions + comparisons + years + format_kw +
              feature_kw)
    # Additional topic keywords
    topics = [
        "تعليم", "تدريب", "ورشة عمل", "دورة", "فيديو تعليمي",
        "مقال", "دليل", "كتيب", "شرح مفصل", "خطوة بخطوة",
        "مبتدئ", "متوسط", "متقدم", "خبير", "محترف",
        "أعمال", "تجارة", "مكتب", "إدارة", "أرشيف",
        "مكتبة", "جامعة", "مدرسة", "معهد", "أكاديمية",
        "مستشفى", "عيادة", "محكمة", "شركة", "مؤسسة",
    ]
    topic_kw = [f"{title} {t}" for t in topics] + [f"{short} {t}" for t in topics]
    all_kw += topic_kw
    # Region keywords
    regions = [
        "السعودية", "مصر", "الإمارات", "الكويت", "قطر", "البحرين",
        "عمان", "الأردن", "لبنان", "العراق", "سوريا", "ليبيا",
        "تونس", "الجزائر", "المغرب", "السودان", "اليمن", "فلسطين",
    ]
    region_kw = [f"{title} في {r}" for r in regions] + [f"أفضل أداة {short} {r}" for r in regions]
    all_kw += region_kw
    # Add numbered variations to ensure 1000+
    extra = []
    for i in range(1, 250):
        extra.append(f"{title} الطريقة {i}")
        extra.append(f"خطوة {i} {short}")
        extra.append(f"{short} نصيحة {i}")
        extra.append(f"حل مشكلة {short} رقم {i}")
    all_kw += extra
    return all_kw[:1100]  # Ensure 1000+


def gen_html(slug, title, short, keywords):
    """Generate an HTML page with structured content and keywords."""
    kw_str = "، ".join(keywords[:50])
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    # Split keywords into sections of 100
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append("، ".join(chunk))

    sections_html = ""
    section_titles = [
        "ما هي أداة {}؟".format(title),
        "مميزات أداة {}".format(title),
        "كيفية استخدام أداة {}".format(title),
        "لماذا تختار Stirling PDF لـ{}؟".format(title),
        "أسئلة شائعة حول {}".format(title),
        "نصائح لـ{}".format(title),
        "استخدامات {} المتنوعة".format(title),
        "مقارنة أدوات {}".format(title),
        "{} للأجهزة المختلفة".format(title),
        "الأمان والخصوصية في {}".format(title),
        "الكلمات المفتاحية ذات الصلة",
    ]

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
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} مجاناً - Stirling PDF أدوات PDF المجانية</title>
    <meta name="description" content="{title} مجاناً أونلاين بدون برامج. أداة {short} من Stirling PDF - أفضل أدوات PDF المجانية على الإنترنت.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/ar/{slug}.html">
    <meta property="og:title" content="{title} مجاناً - Stirling PDF">
    <meta property="og:description" content="أداة {short} مجانية من Stirling PDF. {title} بسرعة وأمان.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ar_AR">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }}
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <header class="bg-blue-700 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <a href="../../index.html" class="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">الصفحة الرئيسية</a>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-blue-900 mb-6 text-center">{title} مجاناً أونلاين - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                مرحباً بك في أداة <strong>{title}</strong> المجانية من Stirling PDF.
                نقدم لك أفضل حل لـ<strong>{short}</strong> مباشرة من المتصفح بدون الحاجة لتحميل أي برنامج.
                أداتنا تدعم اللغة العربية بالكامل وتعمل على جميع الأجهزة.
            </p>
            <div class="bg-blue-50 border-r-4 border-blue-500 p-4 rounded">
                <p class="text-blue-800 font-semibold">✓ مجاني بالكامل ✓ بدون تسجيل ✓ آمن وخاص ✓ يدعم العربية</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-green-50 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-green-800 mb-4">ابدأ الآن - {title}</h2>
            <p class="text-gray-700 mb-4">
                استخدم أداة {title} من Stirling PDF الآن مجاناً. لا تحتاج لتسجيل حساب أو تحميل برنامج.
                فقط ارفع ملفك وسنقوم بالباقي.
            </p>
            <a href="../../index.html" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition">
                استخدم الأداة الآن
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - أدوات PDF مجانية ومفتوحة المصدر</p>
            <p class="text-sm">جميع الحقوق محفوظة © 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html


# Generate all pages
for slug, title, short in pages:
    keywords = get_keywords(slug, title, short)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/ar/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} keywords)")

print(f"\nDone! Generated {len(pages)} Arabic SEO pages in seo/ar/")
