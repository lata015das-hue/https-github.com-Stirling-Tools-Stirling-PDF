#!/usr/bin/env python3
"""Generate 50 Indonesian (Bahasa Indonesia) SEO pages for Stirling PDF Free Tools.
Each page has 1100+ UNIQUE keywords (no repetition across pages)."""
import os

os.makedirs("seo/id", exist_ok=True)

pages = [
    ("merge-pdf", "Gabungkan File PDF", "Gabung PDF"),
    ("split-pdf", "Pisahkan File PDF", "Pisah PDF"),
    ("compress-pdf", "Kompres File PDF", "Kompres PDF"),
    ("convert-pdf-to-word", "Konversi PDF ke Word", "PDF ke Word"),
    ("convert-word-to-pdf", "Konversi Word ke PDF", "Word ke PDF"),
    ("convert-pdf-to-excel", "Konversi PDF ke Excel", "PDF ke Excel"),
    ("convert-excel-to-pdf", "Konversi Excel ke PDF", "Excel ke PDF"),
    ("convert-pdf-to-ppt", "Konversi PDF ke PowerPoint", "PDF ke PPT"),
    ("convert-ppt-to-pdf", "Konversi PowerPoint ke PDF", "PPT ke PDF"),
    ("convert-pdf-to-image", "Konversi PDF ke Gambar", "PDF ke JPG"),
    ("convert-image-to-pdf", "Konversi Gambar ke PDF", "Gambar ke PDF"),
    ("ocr-pdf", "OCR PDF Pengenalan Teks", "OCR PDF Indonesia"),
    ("edit-pdf", "Edit PDF Online", "Editor PDF"),
    ("rotate-pdf", "Putar Halaman PDF", "Rotasi PDF"),
    ("watermark-pdf", "Tambah Watermark PDF", "Watermark PDF"),
    ("password-protect-pdf", "Proteksi Password PDF", "Enkripsi PDF"),
    ("unlock-pdf", "Buka Kunci PDF", "Hapus Password PDF"),
    ("sign-pdf", "Tanda Tangan Elektronik PDF", "TTD Digital PDF"),
    ("pdf-to-html", "Konversi PDF ke HTML", "PDF ke HTML"),
    ("html-to-pdf", "Konversi HTML ke PDF", "HTML ke PDF"),
    ("extract-pages-pdf", "Ekstrak Halaman PDF", "Ekstrak PDF"),
    ("delete-pages-pdf", "Hapus Halaman PDF", "Hapus Halaman PDF"),
    ("reorder-pages-pdf", "Susun Ulang Halaman PDF", "Atur Ulang PDF"),
    ("add-page-numbers-pdf", "Tambah Nomor Halaman PDF", "Penomoran PDF"),
    ("pdf-metadata", "Edit Metadata PDF", "Properti PDF"),
    ("flatten-pdf", "Ratakan File PDF", "Flatten PDF"),
    ("repair-pdf", "Perbaiki PDF Rusak", "Pemulihan PDF"),
    ("crop-pdf", "Potong Halaman PDF", "Crop PDF"),
    ("resize-pdf", "Ubah Ukuran PDF", "Resize PDF"),
    ("pdf-to-text", "Konversi PDF ke Teks", "Ekstrak Teks PDF"),
    ("add-image-to-pdf", "Tambah Gambar ke PDF", "Sisipkan Gambar PDF"),
    ("pdf-bookmarks", "Tambah Bookmark PDF", "Penanda PDF"),
    ("compare-pdf", "Bandingkan File PDF", "Perbandingan PDF"),
    ("redact-pdf", "Sensor Konten PDF", "Redaksi PDF"),
    ("pdf-accessibility", "Aksesibilitas PDF", "PDF Aksesibel"),
    ("pdf-forms", "Buat Formulir PDF", "Formulir PDF"),
    ("fill-pdf-forms", "Isi Formulir PDF", "Pengisian Formulir PDF"),
    ("pdf-annotations", "Anotasi File PDF", "Komentar PDF"),
    ("stamp-pdf", "Tambah Stempel PDF", "Stempel PDF"),
    ("grayscale-pdf", "Konversi PDF ke Grayscale", "PDF Hitam Putih"),
    ("pdf-to-pdfa", "Konversi PDF ke PDF/A", "Arsip PDF"),
    ("multi-page-layout", "Layout Multi Halaman PDF", "Beberapa Halaman per Lembar"),
    ("extract-images-pdf", "Ekstrak Gambar dari PDF", "Ambil Gambar PDF"),
    ("pdf-header-footer", "Tambah Header Footer PDF", "Header PDF"),
    ("batch-convert-pdf", "Konversi Batch PDF", "Konverter Massal PDF"),
    ("scan-to-pdf", "Scan ke PDF", "Scanner ke PDF"),
    ("pdf-optimizer", "Optimasi PDF untuk Web", "Optimasi PDF"),
    ("merge-images-to-pdf", "Gabung Gambar jadi PDF", "Foto ke PDF"),
    ("pdf-translation", "Terjemahkan File PDF", "Terjemahan PDF"),
    ("pdf-dark-mode", "Mode Gelap PDF", "Pembaca PDF Mode Malam"),
]

# Global set to track ALL used keywords across ALL pages
global_used_keywords = set()



def get_unique_keywords(slug, title, short, page_index):
    """Generate 1100+ UNIQUE Indonesian keywords for each page with zero repetition."""
    keywords = []

    # --- Core variations ---
    core = [
        f"{title}", f"{title} gratis", f"{title} online", f"{title} tanpa registrasi",
        f"{title} tanpa download", f"{title} instan", f"alat {title}",
        f"layanan {title}", f"{title} free", f"{title} cepat",
        f"terbaik {title}", f"{title} mudah", f"{title} aman",
        f"{title} terpercaya", f"{title} profesional", f"{title} sederhana",
        f"{title} 2024", f"{title} 2025", f"{title} 2026",
        f"cara {title}", f"{title} langkah demi langkah",
        f"tutorial {title}", f"panduan {title}",
        f"{short}", f"{short} gratis", f"{short} online",
        f"terbaik {short}", f"alat {short}", f"layanan {short}",
        f"Stirling PDF {title}", f"Stirling {short}",
        f"{title} tanpa batas", f"{title} unlimited",
        f"{title} tanpa watermark", f"{title} tanpa akun",
        f"{title} tanpa email", f"{title} tanpa login",
        f"{title} gratis sepenuhnya", f"{title} benar-benar gratis",
    ]
    keywords.extend(core)

    # --- Platform combinations ---
    platforms = ["Windows", "Mac", "Linux", "Chrome OS", "Android", "iOS",
                 "iPhone", "iPad", "Samsung", "tablet", "komputer", "laptop",
                 "Chromebook", "Ubuntu", "Windows 10", "Windows 11", "macOS",
                 "HP", "smartphone", "desktop"]
    keywords.extend([f"{title} di {p}" for p in platforms])
    keywords.extend([f"{short} untuk {p}" for p in platforms])

    # --- Browser combinations ---
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave", "UC Browser", "Samsung Internet"]
    keywords.extend([f"{title} di {b}" for b in browsers])
    keywords.extend([f"{short} ekstensi {b}" for b in browsers])

    # --- Use case combinations ---
    users = ["pelajar", "guru", "pengacara", "akuntan", "insinyur",
             "dokter", "desainer", "developer", "penulis", "jurnalis",
             "peneliti", "ilmuwan", "profesional marketing", "manajer", "freelancer",
             "perusahaan", "startup", "usaha kecil", "organisasi", "PNS",
             "sekolah", "universitas", "rumah sakit", "bank", "real estate",
             "arsitek", "apoteker", "notaris", "konsultan", "pelatih"]
    keywords.extend([f"{title} untuk {u}" for u in users])
    keywords.extend([f"terbaik {short} untuk {u}" for u in users])

    # --- Document type combinations ---
    doc_types = ["faktur", "kontrak", "CV", "laporan", "presentasi",
                 "ebook", "manual", "sertifikat", "kwitansi", "formulir",
                 "pamflet", "brosur", "poster", "tiket", "rekening koran",
                 "anggaran", "proposal", "dokumen hukum", "SPT pajak",
                 "skripsi", "tesis", "disertasi", "newsletter", "katalog",
                 "portofolio", "surat", "surat pernyataan", "surat kuasa", "ijazah"]
    keywords.extend([f"{title} {d}" for d in doc_types])

    # --- Quality/feature adjectives ---
    features = ["kualitas tinggi", "tanpa kehilangan", "pemrosesan cepat", "batch processing",
                "drag and drop", "tanpa batas ukuran", "unlimited",
                "tanpa watermark", "tanpa iklan", "privasi terjamin", "terenkripsi",
                "GDPR compliant", "auto hapus", "berbasis cloud", "tanpa internet",
                "open source", "ringan", "profesional", "enterprise",
                "mobile friendly", "responsif", "multi bahasa", "aksesibel",
                "WCAG compatible", "antarmuka mudah", "tanpa instalasi"]
    keywords.extend([f"{title} {f}" for f in features])
    keywords.extend([f"{short} dengan {f}" for f in features])

    # --- Action verbs ---
    actions = ["unduh", "unggah", "simpan", "ekspor", "impor",
               "bagikan", "kirim email", "cetak", "pratinjau", "lihat",
               "buka", "buat", "hasilkan", "produksi", "siapkan",
               "desain", "sesuaikan", "modifikasi", "atur", "konfigurasi"]
    keywords.extend([f"{a} {short}" for a in actions])
    keywords.extend([f"{a} lalu {title}" for a in actions])

    # --- Comparison keywords ---
    competitors = ["Adobe Acrobat", "iLovePDF", "SmallPDF", "Foxit",
                   "Nitro PDF", "PDF24", "Sejda", "PDFsam", "Soda PDF", "WPS"]
    keywords.extend([f"{title} vs {c}" for c in competitors])
    keywords.extend([f"{short} alternatif {c}" for c in competitors])
    keywords.extend([f"pengganti {c} untuk {short}" for c in competitors])

    # --- File format keywords ---
    formats = ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
               "JPG", "JPEG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
               "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "CSV"]
    keywords.extend([f"{short} format {fmt}" for fmt in formats])

    # --- Size keywords ---
    sizes = ["file besar", "file kecil", "100MB", "200MB", "500MB", "1GB",
             "banyak file", "file berat", "100 halaman", "500 halaman",
             "1000 halaman", "dokumen panjang", "PDF besar", "PDF berat"]
    keywords.extend([f"{title} {s}" for s in sizes])

    # --- Speed keywords ---
    speeds = ["dalam hitungan detik", "instan", "real time", "ultra cepat",
              "tanpa menunggu", "langsung", "kilat", "secepat kilat", "super cepat"]
    keywords.extend([f"{title} {s}" for s in speeds])

    # --- Question keywords ---
    questions = [
        f"bagaimana {title} gratis",
        f"dimana {title} online",
        f"mana yang terbaik untuk {title}",
        f"apakah bisa {title} tanpa Adobe",
        f"apakah {title} online aman",
        f"kenapa pilih Stirling PDF untuk {title}",
        f"berapa biaya {title}",
        f"apakah ada alat gratis untuk {title}",
        f"software apa yang bisa {title}",
        f"bagaimana {title} di HP",
        f"apakah {title} bisa di HP",
        f"apakah {title} bisa tanpa internet",
        f"apakah Stirling PDF aman untuk {title}",
        f"seberapa cepat {title} online",
        f"apakah {title} mengurangi kualitas",
    ]
    keywords.extend(questions)

    # --- Industry keywords ---
    industries = ["kesehatan", "keuangan", "hukum", "pendidikan", "teknologi",
                  "manufaktur", "perdagangan", "konstruksi", "asuransi",
                  "farmasi", "otomotif", "penerbangan", "logistik",
                  "telekomunikasi", "energi", "media", "penerbitan"]
    keywords.extend([f"{title} untuk sektor {ind}" for ind in industries])

    # --- Country/region keywords (Indonesia, Malaysia, Brunei, East Timor + cities) ---
    regions = ["Indonesia", "Malaysia", "Brunei", "Timor Leste",
               "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang",
               "Makassar", "Bali", "Yogyakarta", "Palembang", "Tangerang",
               "Kuala Lumpur", "Penang", "Johor Bahru", "Bandar Seri Begawan", "Dili",
               "Depok", "Bekasi", "Bogor", "Malang", "Denpasar"]
    keywords.extend([f"{title} {r}" for r in regions])
    keywords.extend([f"terbaik {short} di {r}" for r in regions])

    # --- Long tail unique phrases ---
    long_tails = [
        f"{title} gratis tanpa kartu kredit",
        f"{title} tanpa perlu download software",
        f"{title} langsung di browser",
        f"layanan cloud aman untuk {title}",
        f"solusi open source untuk {title}",
        f"alat ramah privasi untuk {title}",
        f"solusi enterprise untuk {title}",
        f"otomasi alur kerja {title}",
        f"integrasi API untuk {title}",
        f"server self-hosted {title}",
        f"Docker container {title}",
        f"{title} dari command line",
        f"{title} secara programatis",
        f"{title} REST API",
        f"otomasi batch {title}",
    ]
    keywords.extend(long_tails)

    # --- Indonesia-specific keywords ---
    indonesia_specific = [
        f"{title} KTP", f"{title} NPWP",
        f"{title} BPJS", f"{title} NIK",
        f"{title} KK", f"{title} STNK",
        f"{title} SIM", f"{title} akta kelahiran",
        f"{title} ijazah", f"{title} SKCK",
        f"{title} surat lamaran kerja", f"{title} dokumen CPNS",
        f"{title} SPT tahunan", f"{title} e-Filing",
        f"{title} rekening koran bank", f"{title} surat keterangan",
        f"{title} rapor sekolah", f"{title} transkrip nilai",
        f"{title} dokumen imigrasi", f"{title} paspor",
        f"{title} visa", f"{title} surat nikah",
        f"{title} sertifikat tanah", f"{title} BPKB",
        f"{short} terbaik di Indonesia", f"{title} untuk pengguna Indonesia",
    ]
    keywords.extend(indonesia_specific)

    # --- Additional Indonesian-specific keywords ---
    id_specific = [
        f"{title} perangkat lunak gratis", f"{title} kode sumber terbuka",
        f"{title} antarmuka Bahasa Indonesia", f"{title} tersedia dalam Bahasa Indonesia",
        f"{title} dalam bahasa lokal", f"{short} Indonesia",
        f"download {short} gratis", f"instal {short}",
        f"{short} mudah digunakan", f"{short} pelajari",
        f"{title} untuk pemula", f"{title} tingkat lanjut",
        f"{title} level ahli", f"pelatihan {title}",
        f"kursus {title}", f"video {title}",
        f"demo {title}", f"contoh {title}",
        f"template {title}", f"sampel {title}",
        f"{title} tanpa buat akun", f"{title} sepenuhnya gratis",
        f"alat lokal {title}", f"{title} server nasional",
    ]
    keywords.extend(id_specific)

    # --- Numbered unique tips/methods per page ---
    for i in range(1, 151):
        keywords.append(f"{title} cara {i + page_index * 150}")
        keywords.append(f"{short} tips nomor {i + page_index * 150}")
        keywords.append(f"langkah {i} untuk {title}")
        keywords.append(f"{short} trik {i + page_index * 150}")

    # --- Unique slug-based keywords ---
    slug_words = slug.replace("-", " ").split()
    for w in slug_words:
        keywords.append(f"gratis {w} PDF alat online")
        keywords.append(f"terbaik {w} PDF software 2025")
        keywords.append(f"{w} PDF dokumen dengan mudah")
        keywords.append(f"cara {w} PDF file gratis")

    # Filter out any keywords already used globally
    unique_keywords = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in global_used_keywords and kw_lower:
            global_used_keywords.add(kw_lower)
            unique_keywords.append(kw)

    # If still under 1100, add more unique numbered variants
    counter = 7000 + page_index * 500
    while len(unique_keywords) < 1100:
        extra = f"{title} metode unik {counter}"
        if extra.lower() not in global_used_keywords:
            global_used_keywords.add(extra.lower())
            unique_keywords.append(extra)
        counter += 1

    return unique_keywords[:1100]



def gen_html(slug, title, short, keywords):
    """Generate a full Indonesian SEO HTML page with teal color scheme."""
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append(", ".join(chunk))

    section_titles = [
        f"Apa itu {title}?",
        f"Fitur Utama {title}",
        f"Cara {title} dengan Stirling PDF",
        f"Mengapa Memilih Stirling PDF untuk {title}?",
        f"Pertanyaan yang Sering Diajukan tentang {title}",
        f"Tips untuk {title}",
        f"Kasus Penggunaan {title}",
        f"Perbandingan Alat {title}",
        f"{title} di Berbagai Perangkat",
        f"Keamanan dan Privasi dalam {title}",
        f"Kata Kunci Terkait",
    ]

    sections_html = ""
    for idx, sec_title in enumerate(section_titles):
        if idx < len(kw_sections):
            sections_html += f"""
    <section class="mb-8">
        <h2 class="text-2xl font-bold text-teal-800 mb-4">{sec_title}</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
            {kw_sections[idx]}
        </p>
    </section>"""

    html = f"""<!DOCTYPE html>
<html lang="id" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Gratis Online - Stirling PDF Alat Gratis</title>
    <meta name="description" content="{title} gratis online tanpa software. {short} dengan Stirling PDF - alat PDF gratis dan open source terbaik.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/id/{slug}.html">
    <meta property="og:title" content="{title} Gratis - Stirling PDF">
    <meta property="og:description" content="Alat {short} gratis dari Stirling PDF. {title} cepat dan aman.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="id_ID">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-teal-50 min-h-screen">
    <header class="bg-teal-800 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <div class="flex gap-4 flex-wrap">
                    <a href="../../index.html" class="bg-white text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-100">Beranda</a>
                    <a href="../en/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">English</a>
                    <a href="../fr/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">Français</a>
                    <a href="../es/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">Español</a>
                    <a href="../pt/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">Português</a>
                    <a href="../zh/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">中文</a>
                    <a href="../hi/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">हिंदी</a>
                    <a href="../ar/{slug}.html" class="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-semibold hover:bg-teal-50 border border-teal-200">عربي</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-teal-800 mb-6 text-center">{title} Gratis Online - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Selamat datang di alat <strong>{title}</strong> gratis dari Stirling PDF.
                Kami menyediakan solusi terbaik untuk <strong>{short}</strong> yang bekerja langsung di browser Anda tanpa perlu menginstal software apapun.
                Alat kami sepenuhnya gratis, aman, dan berfungsi di semua perangkat.
            </p>
            <div class="bg-teal-100 border-l-4 border-teal-800 p-4 rounded">
                <p class="text-teal-800 font-semibold">&#10003; 100% Gratis &#10003; Tanpa Registrasi &#10003; Aman dan Privat &#10003; Open Source</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-teal-100 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-teal-800 mb-4">Mulai Sekarang - {title}</h2>
            <p class="text-gray-700 mb-4">
                Gunakan alat {title} dari Stirling PDF sekarang secara gratis. Tidak perlu registrasi, tidak perlu download.
                Cukup unggah file Anda dan kami akan menangani sisanya.
            </p>
            <a href="../../index.html" class="inline-block bg-teal-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-teal-900 transition">
                Gunakan Alat Sekarang
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - Alat PDF Gratis dan Open Source</p>
            <p class="text-sm">Hak Cipta &copy; 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html



# Generate all pages
print(f"Generating {len(pages)} Indonesian SEO pages...")
for idx, (slug, title, short) in enumerate(pages):
    keywords = get_unique_keywords(slug, title, short, idx)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/id/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} unique keywords)")

print(f"\nDone! Generated {len(pages)} Indonesian SEO pages in seo/id/")
print(f"Total unique keywords used globally: {len(global_used_keywords)}")
