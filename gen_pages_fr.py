#!/usr/bin/env python3
"""Generate 50 French SEO pages for Stirling PDF Free Tools.
Each page has 1000+ UNIQUE keywords (no repetition across pages)."""
import os

os.makedirs("seo/fr", exist_ok=True)

pages = [
    ("merge-pdf", "Fusionner des fichiers PDF", "Fusion PDF"),
    ("split-pdf", "Diviser des fichiers PDF", "Scinder PDF"),
    ("compress-pdf", "Compresser des fichiers PDF", "Compression PDF"),
    ("convert-pdf-to-word", "Convertir PDF en Word", "PDF vers Word"),
    ("convert-word-to-pdf", "Convertir Word en PDF", "Word vers PDF"),
    ("convert-pdf-to-excel", "Convertir PDF en Excel", "PDF vers Excel"),
    ("convert-excel-to-pdf", "Convertir Excel en PDF", "Excel vers PDF"),
    ("convert-pdf-to-ppt", "Convertir PDF en PowerPoint", "PDF vers PPT"),
    ("convert-ppt-to-pdf", "Convertir PowerPoint en PDF", "PPT vers PDF"),
    ("convert-pdf-to-image", "Convertir PDF en image", "PDF vers JPG"),
    ("convert-image-to-pdf", "Convertir image en PDF", "Image vers PDF"),
    ("ocr-pdf", "Reconnaissance OCR PDF", "OCR PDF texte"),
    ("edit-pdf", "Modifier un PDF en ligne", "Editeur PDF"),
    ("rotate-pdf", "Pivoter les pages PDF", "Rotation PDF"),
    ("watermark-pdf", "Ajouter un filigrane au PDF", "Filigrane PDF"),
    ("password-protect-pdf", "Proteger PDF par mot de passe", "Chiffrement PDF"),
    ("unlock-pdf", "Deverrouiller un PDF", "Supprimer mot de passe PDF"),
    ("sign-pdf", "Signer un PDF electroniquement", "Signature PDF"),
    ("pdf-to-html", "Convertir PDF en HTML", "PDF vers HTML"),
    ("html-to-pdf", "Convertir HTML en PDF", "HTML vers PDF"),
    ("extract-pages-pdf", "Extraire des pages PDF", "Extraction pages PDF"),
    ("delete-pages-pdf", "Supprimer des pages PDF", "Suppression pages PDF"),
    ("reorder-pages-pdf", "Reorganiser les pages PDF", "Reordonner PDF"),
    ("add-page-numbers-pdf", "Ajouter des numeros de page PDF", "Numerotation PDF"),
    ("pdf-metadata", "Modifier les metadonnees PDF", "Proprietes PDF"),
    ("flatten-pdf", "Aplatir un fichier PDF", "Aplatissement PDF"),
    ("repair-pdf", "Reparer un PDF corrompu", "Reparation PDF"),
    ("crop-pdf", "Rogner les pages PDF", "Recadrage PDF"),
    ("resize-pdf", "Redimensionner un PDF", "Taille PDF"),
    ("pdf-to-text", "Convertir PDF en texte", "Extraction texte PDF"),
    ("add-image-to-pdf", "Ajouter une image au PDF", "Insertion image PDF"),
    ("pdf-bookmarks", "Ajouter des signets au PDF", "Signets PDF"),
    ("compare-pdf", "Comparer des fichiers PDF", "Comparaison PDF"),
    ("redact-pdf", "Caviarder un PDF", "Masquage contenu PDF"),
    ("pdf-accessibility", "Accessibilite PDF", "PDF accessible"),
    ("pdf-forms", "Creer des formulaires PDF", "Formulaires PDF"),
    ("fill-pdf-forms", "Remplir des formulaires PDF", "Saisie formulaire PDF"),
    ("pdf-annotations", "Annoter des fichiers PDF", "Annotations PDF"),
    ("stamp-pdf", "Ajouter un tampon au PDF", "Tampon PDF"),
    ("grayscale-pdf", "Convertir PDF en niveaux de gris", "PDF noir et blanc"),
    ("pdf-to-pdfa", "Convertir PDF en PDF/A", "Archivage PDF"),
    ("multi-page-layout", "Mise en page multiple PDF", "Plusieurs pages par feuille"),
    ("extract-images-pdf", "Extraire les images du PDF", "Extraction images PDF"),
    ("pdf-header-footer", "Ajouter en-tete et pied de page PDF", "En-tete PDF"),
    ("batch-convert-pdf", "Conversion par lots PDF", "Convertisseur PDF en masse"),
    ("scan-to-pdf", "Numeriser vers PDF", "Scanner en PDF"),
    ("pdf-optimizer", "Optimiser un PDF pour le web", "Optimisation PDF"),
    ("merge-images-to-pdf", "Fusionner des images en PDF", "Combiner photos PDF"),
    ("pdf-translation", "Traduire des fichiers PDF", "Traduction PDF"),
    ("pdf-dark-mode", "Mode sombre PDF", "Lecteur PDF mode nuit"),
]

# Global set to track ALL used keywords across ALL pages
global_used_keywords = set()


def get_unique_keywords(slug, title, short, page_index):
    """Generate 1000+ UNIQUE French keywords for each page with zero repetition."""
    keywords = []

    # --- Core variations ---
    core = [
        f"{title}", f"{title} gratuit", f"{title} en ligne", f"{title} sans inscription",
        f"{title} sans logiciel", f"{title} instantanement", f"outil {title}",
        f"service {title}", f"{title} gratuitement", f"{title} rapide",
        f"meilleur {title}", f"{title} facile", f"{title} securise",
        f"{title} fiable", f"{title} professionnel", f"{title} simple",
        f"{title} 2024", f"{title} 2025", f"{title} 2026",
        f"comment {title.lower()}", f"{title.lower()} etape par etape",
        f"tutoriel {title.lower()}", f"guide {title.lower()}",
        f"{short}", f"{short} gratuit", f"{short} en ligne",
        f"meilleur {short}", f"outil {short}", f"service {short}",
        f"Stirling PDF {title.lower()}", f"Stirling {short}",
        f"{title} sans limite", f"{title} illimite",
    ]
    keywords.extend(core)

    # --- Platform combinations ---
    platforms = ["Windows", "Mac", "Linux", "Chrome OS", "Android", "iOS",
                 "iPhone", "iPad", "Samsung", "tablette", "ordinateur", "portable",
                 "Chromebook", "Ubuntu", "Windows 10", "Windows 11", "macOS Sonoma"]
    keywords.extend([f"{title} sur {p}" for p in platforms])
    keywords.extend([f"{short} pour {p}" for p in platforms])

    # --- Browser combinations ---
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]
    keywords.extend([f"{title} dans {b}" for b in browsers])
    keywords.extend([f"{short} extension {b}" for b in browsers])

    # --- Use case combinations ---
    users = ["etudiants", "enseignants", "avocats", "comptables", "ingenieurs",
             "medecins", "designers", "developpeurs", "ecrivains", "journalistes",
             "chercheurs", "scientifiques", "marketeurs", "gestionnaires", "freelances",
             "entreprises", "startups", "PME", "associations", "gouvernement",
             "ecoles", "universites", "hopitaux", "banques", "immobilier",
             "architectes", "pharmaciens", "notaires", "consultants", "formateurs"]
    keywords.extend([f"{title} pour {u}" for u in users])
    keywords.extend([f"meilleur {short} pour {u}" for u in users])

    # --- Document type combinations ---
    doc_types = ["factures", "contrats", "CV", "rapports", "presentations",
                 "ebooks", "manuels", "certificats", "recus", "formulaires",
                 "brochures", "depliants", "affiches", "billets", "releves",
                 "devis", "propositions", "documents juridiques", "declarations fiscales",
                 "memoires", "theses", "dissertations", "bulletins", "catalogues",
                 "portfolios", "lettres", "attestations", "permis", "diplomes"]
    keywords.extend([f"{title} {d}" for d in doc_types])

    # --- Quality/feature adjectives ---
    features = ["haute qualite", "sans perte", "traitement rapide", "mode batch",
                "glisser deposer", "sans limite de taille", "illimite",
                "sans filigrane", "sans publicite", "respect vie privee", "chiffre",
                "conforme RGPD", "suppression automatique", "cloud", "hors ligne",
                "open source", "leger", "professionnel", "entreprise",
                "compatible mobile", "responsive", "multilingue", "accessible",
                "conforme WCAG", "interface intuitive", "sans installation"]
    keywords.extend([f"{title} {f}" for f in features])
    keywords.extend([f"{short} avec {f}" for f in features])

    # --- Action verbs ---
    actions = ["telecharger", "envoyer", "sauvegarder", "exporter", "importer",
               "partager", "envoyer par email", "imprimer", "apercu", "visualiser",
               "ouvrir", "creer", "generer", "produire", "fabriquer",
               "concevoir", "personnaliser", "modifier", "ajuster", "configurer"]
    keywords.extend([f"{a} {short}" for a in actions])
    keywords.extend([f"{a} et {title.lower()}" for a in actions])

    # --- Comparison keywords ---
    competitors = ["Adobe Acrobat", "iLovePDF", "SmallPDF", "Foxit",
                   "Nitro PDF", "PDF24", "Sejda", "PDFsam", "Soda PDF"]
    keywords.extend([f"{title} vs {c}" for c in competitors])
    keywords.extend([f"{short} alternative a {c}" for c in competitors])
    keywords.extend([f"remplacer {c} par {short}" for c in competitors])

    # --- File format keywords ---
    formats = ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
               "JPG", "JPEG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
               "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "CSV"]
    keywords.extend([f"{short} format {fmt}" for fmt in formats])

    # --- Size keywords ---
    sizes = ["gros fichiers", "petits fichiers", "100 Mo", "200 Mo", "500 Mo", "1 Go",
             "fichiers multiples", "fichiers en masse", "100 pages", "500 pages",
             "1000 pages", "documents longs", "PDF volumineux", "PDF surdimensionne"]
    keywords.extend([f"{title} {s}" for s in sizes])

    # --- Speed keywords ---
    speeds = ["en quelques secondes", "instantanement", "en temps reel", "ultra rapide",
              "sans attente", "immediat", "express", "turbo", "eclair"]
    keywords.extend([f"{title} {s}" for s in speeds])

    # --- Question keywords ---
    questions = [
        f"comment {title.lower()} gratuitement",
        f"ou {title.lower()} en ligne",
        f"quelle est la meilleure facon de {title.lower()}",
        f"peut-on {title.lower()} sans Adobe",
        f"est-ce que {title.lower()} en ligne est securise",
        f"pourquoi utiliser Stirling PDF pour {title.lower()}",
        f"combien coute {title.lower()}",
        f"existe-t-il un outil gratuit pour {title.lower()}",
        f"quel logiciel peut {title.lower()}",
        f"comment {title.lower()} sur telephone",
        f"peut-on {title.lower()} sur mobile",
        f"est-ce que {title.lower()} fonctionne hors ligne",
        f"{title.lower()} avec Stirling PDF est-il sur",
        f"quelle est la vitesse de {title.lower()} en ligne",
        f"est-ce que {title.lower()} reduit la qualite",
    ]
    keywords.extend(questions)

    # --- Industry keywords ---
    industries = ["sante", "finance", "juridique", "education", "technologie",
                  "industrie", "commerce", "construction", "assurance",
                  "pharmaceutique", "automobile", "aeronautique", "logistique",
                  "telecommunications", "energie", "media", "edition"]
    keywords.extend([f"{title} pour le secteur {ind}" for ind in industries])

    # --- Country/region keywords ---
    countries = ["France", "Belgique", "Suisse", "Canada", "Quebec",
                 "Luxembourg", "Monaco", "Tunisie", "Maroc", "Algerie",
                 "Senegal", "Cote d'Ivoire", "Cameroun", "Haiti",
                 "Madagascar", "Congo", "Mali", "Burkina Faso",
                 "Gabon", "Togo"]
    keywords.extend([f"{title} {c}" for c in countries])
    keywords.extend([f"meilleur {short} en {c}" for c in countries])

    # --- Long tail unique phrases ---
    long_tails = [
        f"{title.lower()} completement gratuit sans carte bancaire",
        f"{title.lower()} sans telecharger de logiciel",
        f"{title.lower()} directement dans le navigateur",
        f"service cloud securise pour {title.lower()}",
        f"solution open source pour {title.lower()}",
        f"outil {title.lower()} respectueux de la vie privee",
        f"solution entreprise pour {title.lower()}",
        f"automatisation {title.lower()} workflow",
        f"API pour integration {title.lower()}",
        f"serveur auto-heberge {title.lower()}",
        f"conteneur Docker {title.lower()}",
        f"{title.lower()} en ligne de commande",
        f"{title.lower()} programmatique",
        f"{title.lower()} API REST",
        f"automatisation par lots {title.lower()}",
    ]
    keywords.extend(long_tails)

    # --- Additional French-specific keywords ---
    fr_specific = [
        f"{title} logiciel libre", f"{title} code source ouvert",
        f"{title} solution francaise", f"{title} interface francaise",
        f"{title} en francais", f"{short} francophone",
        f"telecharger {short} gratuit", f"installer {short}",
        f"utiliser {short} facilement", f"apprendre {short}",
        f"{title} pour debutants", f"{title} avance",
        f"{title} niveau expert", f"formation {title.lower()}",
        f"cours {title.lower()}", f"video {title.lower()}",
        f"demonstration {title.lower()}", f"exemple {title.lower()}",
        f"modele {title.lower()}", f"template {title.lower()}",
    ]
    keywords.extend(fr_specific)

    # --- Numbered unique tips/methods per page ---
    for i in range(1, 150):
        keywords.append(f"{title} methode {i + page_index * 150}")
        keywords.append(f"{short} conseil numero {i + page_index * 150}")
        keywords.append(f"etape {i} pour {title.lower()}")
        keywords.append(f"{short} astuce {i + page_index * 150}")

    # --- Unique slug-based keywords ---
    slug_words = slug.replace("-", " ").split()
    for w in slug_words:
        keywords.append(f"outil gratuit {w} PDF en ligne")
        keywords.append(f"meilleur logiciel {w} PDF 2025")
        keywords.append(f"{w} documents PDF facilement")
        keywords.append(f"comment {w} fichiers PDF gratuit")

    # Filter out any keywords already used globally
    unique_keywords = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in global_used_keywords and kw_lower:
            global_used_keywords.add(kw_lower)
            unique_keywords.append(kw)

    # If still under 1100, add more unique numbered variants
    counter = 2000 + page_index * 500
    while len(unique_keywords) < 1100:
        extra = f"{title} approche unique {counter}"
        if extra.lower() not in global_used_keywords:
            global_used_keywords.add(extra.lower())
            unique_keywords.append(extra)
        counter += 1

    return unique_keywords[:1100]


def gen_html(slug, title, short, keywords):
    """Generate a full French SEO HTML page."""
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append(", ".join(chunk))

    section_titles = [
        f"Qu'est-ce que {title} ?",
        f"Fonctionnalites principales de {title}",
        f"Comment {title} avec Stirling PDF",
        f"Pourquoi choisir Stirling PDF pour {title} ?",
        f"Questions frequentes sur {title}",
        f"Conseils pour {title}",
        f"Cas d'utilisation de {title}",
        f"Comparaison des outils {title}",
        f"{title} sur differents appareils",
        f"Securite et confidentialite pour {title}",
        f"Mots-cles associes",
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
<html lang="fr" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Gratuit en Ligne - Stirling PDF Outils Gratuits</title>
    <meta name="description" content="{title} gratuit en ligne sans logiciel. {short} avec Stirling PDF - les meilleurs outils PDF gratuits et open source sur le web.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/fr/{slug}.html">
    <meta property="og:title" content="{title} Gratuit - Stirling PDF">
    <meta property="og:description" content="Outil {short} gratuit par Stirling PDF. {title} rapidement et en toute securite.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_FR">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <header class="bg-blue-700 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <div class="flex gap-4">
                    <a href="../../index.html" class="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">Accueil</a>
                    <a href="../en/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">English</a>
                    <a href="../ar/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">عربي</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-blue-900 mb-6 text-center">{title} Gratuit en Ligne - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Bienvenue sur l'outil gratuit <strong>{title}</strong> de Stirling PDF.
                Nous vous proposons la meilleure solution pour <strong>{short}</strong> directement dans votre navigateur sans installer de logiciel.
                Notre outil est entierement gratuit, securise et fonctionne sur tous les appareils.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p class="text-blue-800 font-semibold">&#10003; 100% Gratuit &#10003; Sans inscription &#10003; Securise et prive &#10003; Open Source</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-green-50 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-green-800 mb-4">Commencez maintenant - {title}</h2>
            <p class="text-gray-700 mb-4">
                Utilisez l'outil {title} de Stirling PDF maintenant gratuitement. Aucune inscription ou telechargement de logiciel requis.
                Televersez simplement votre fichier et nous nous occupons du reste.
            </p>
            <a href="../../index.html" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition">
                Utiliser l'outil maintenant
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - Outils PDF gratuits et open source</p>
            <p class="text-sm">Tous droits reserves &copy; 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html


# Generate all pages
print(f"Generating {len(pages)} French SEO pages...")
for idx, (slug, title, short) in enumerate(pages):
    keywords = get_unique_keywords(slug, title, short, idx)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/fr/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} unique keywords)")

print(f"\nDone! Generated {len(pages)} French SEO pages in seo/fr/")
print(f"Total unique keywords used globally: {len(global_used_keywords)}")
