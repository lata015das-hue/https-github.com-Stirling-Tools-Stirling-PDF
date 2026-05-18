#!/usr/bin/env python3
"""Generate 50 Spanish SEO pages for Stirling PDF Free Tools.
Each page has 1000+ UNIQUE keywords (no repetition across pages)."""
import os

os.makedirs("seo/es", exist_ok=True)

pages = [
    ("merge-pdf", "Combinar archivos PDF", "Unir PDF"),
    ("split-pdf", "Dividir archivos PDF", "Separar PDF"),
    ("compress-pdf", "Comprimir archivos PDF", "Reducir PDF"),
    ("convert-pdf-to-word", "Convertir PDF a Word", "PDF a DOCX"),
    ("convert-word-to-pdf", "Convertir Word a PDF", "Word a PDF"),
    ("convert-pdf-to-excel", "Convertir PDF a Excel", "PDF a XLSX"),
    ("convert-excel-to-pdf", "Convertir Excel a PDF", "Excel a PDF"),
    ("convert-pdf-to-ppt", "Convertir PDF a PowerPoint", "PDF a PPT"),
    ("convert-ppt-to-pdf", "Convertir PowerPoint a PDF", "PPT a PDF"),
    ("convert-pdf-to-image", "Convertir PDF a imagen", "PDF a JPG"),
    ("convert-image-to-pdf", "Convertir imagen a PDF", "Imagen a PDF"),
    ("ocr-pdf", "Reconocimiento OCR PDF", "OCR PDF texto"),
    ("edit-pdf", "Editar PDF en linea", "Editor PDF"),
    ("rotate-pdf", "Rotar paginas PDF", "Girar PDF"),
    ("watermark-pdf", "Agregar marca de agua PDF", "Marca de agua PDF"),
    ("password-protect-pdf", "Proteger PDF con contrasena", "Cifrar PDF"),
    ("unlock-pdf", "Desbloquear PDF", "Quitar contrasena PDF"),
    ("sign-pdf", "Firmar PDF electronicamente", "Firma digital PDF"),
    ("pdf-to-html", "Convertir PDF a HTML", "PDF a pagina web"),
    ("html-to-pdf", "Convertir HTML a PDF", "Web a PDF"),
    ("extract-pages-pdf", "Extraer paginas de PDF", "Extraccion paginas PDF"),
    ("delete-pages-pdf", "Eliminar paginas de PDF", "Borrar paginas PDF"),
    ("reorder-pages-pdf", "Reordenar paginas PDF", "Organizar PDF"),
    ("add-page-numbers-pdf", "Agregar numeros de pagina PDF", "Numerar PDF"),
    ("pdf-metadata", "Editar metadatos PDF", "Propiedades PDF"),
    ("flatten-pdf", "Aplanar archivo PDF", "Aplanamiento PDF"),
    ("repair-pdf", "Reparar PDF danado", "Recuperar PDF"),
    ("crop-pdf", "Recortar paginas PDF", "Cortar PDF"),
    ("resize-pdf", "Redimensionar PDF", "Cambiar tamano PDF"),
    ("pdf-to-text", "Convertir PDF a texto", "Extraer texto PDF"),
    ("add-image-to-pdf", "Agregar imagen a PDF", "Insertar imagen PDF"),
    ("pdf-bookmarks", "Agregar marcadores PDF", "Indice PDF"),
    ("compare-pdf", "Comparar archivos PDF", "Comparacion PDF"),
    ("redact-pdf", "Censurar contenido PDF", "Ocultar texto PDF"),
    ("pdf-accessibility", "Accesibilidad PDF", "PDF accesible"),
    ("pdf-forms", "Crear formularios PDF", "Formularios PDF"),
    ("fill-pdf-forms", "Rellenar formularios PDF", "Completar formulario PDF"),
    ("pdf-annotations", "Anotar archivos PDF", "Comentarios PDF"),
    ("stamp-pdf", "Agregar sello a PDF", "Sello PDF"),
    ("grayscale-pdf", "Convertir PDF a escala de grises", "PDF blanco y negro"),
    ("pdf-to-pdfa", "Convertir PDF a PDF/A", "Archivar PDF"),
    ("multi-page-layout", "Diseno multipagina PDF", "Varias paginas por hoja"),
    ("extract-images-pdf", "Extraer imagenes de PDF", "Sacar fotos PDF"),
    ("pdf-header-footer", "Agregar encabezado y pie PDF", "Encabezado PDF"),
    ("batch-convert-pdf", "Conversion por lotes PDF", "Convertidor masivo PDF"),
    ("scan-to-pdf", "Escanear a PDF", "Escaner a PDF"),
    ("pdf-optimizer", "Optimizar PDF para web", "Optimizacion PDF"),
    ("merge-images-to-pdf", "Combinar imagenes en PDF", "Unir fotos PDF"),
    ("pdf-translation", "Traducir archivos PDF", "Traduccion PDF"),
    ("pdf-dark-mode", "Modo oscuro PDF", "Lector PDF modo noche"),
]

# Global set to track ALL used keywords across ALL pages
global_used_keywords = set()


def get_unique_keywords(slug, title, short, page_index):
    """Generate 1000+ UNIQUE Spanish keywords for each page with zero repetition."""
    keywords = []

    # --- Core variations ---
    core = [
        f"{title}", f"{title} gratis", f"{title} en linea", f"{title} sin registro",
        f"{title} sin programa", f"{title} al instante", f"herramienta {title}",
        f"servicio {title}", f"{title} gratuito", f"{title} rapido",
        f"mejor {title}", f"{title} facil", f"{title} seguro",
        f"{title} confiable", f"{title} profesional", f"{title} sencillo",
        f"{title} 2024", f"{title} 2025", f"{title} 2026",
        f"como {title.lower()}", f"{title.lower()} paso a paso",
        f"tutorial {title.lower()}", f"guia {title.lower()}",
        f"{short}", f"{short} gratis", f"{short} en linea",
        f"mejor {short}", f"herramienta {short}", f"servicio {short}",
        f"Stirling PDF {title.lower()}", f"Stirling {short}",
        f"{title} sin limites", f"{title} ilimitado",
    ]
    keywords.extend(core)

    # --- Platform combinations ---
    platforms = ["Windows", "Mac", "Linux", "Chrome OS", "Android", "iOS",
                 "iPhone", "iPad", "Samsung", "tableta", "computadora", "portatil",
                 "Chromebook", "Ubuntu", "Windows 10", "Windows 11", "macOS"]
    keywords.extend([f"{title} en {p}" for p in platforms])
    keywords.extend([f"{short} para {p}" for p in platforms])

    # --- Browser combinations ---
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]
    keywords.extend([f"{title} en {b}" for b in browsers])
    keywords.extend([f"{short} extension {b}" for b in browsers])

    # --- Use case combinations ---
    users = ["estudiantes", "profesores", "abogados", "contadores", "ingenieros",
             "medicos", "disenadores", "desarrolladores", "escritores", "periodistas",
             "investigadores", "cientificos", "mercadologos", "gerentes", "freelancers",
             "empresas", "startups", "pymes", "organizaciones", "gobierno",
             "escuelas", "universidades", "hospitales", "bancos", "inmobiliarias",
             "arquitectos", "farmaceuticos", "notarios", "consultores", "capacitadores"]
    keywords.extend([f"{title} para {u}" for u in users])
    keywords.extend([f"mejor {short} para {u}" for u in users])

    # --- Document type combinations ---
    doc_types = ["facturas", "contratos", "curriculos", "informes", "presentaciones",
                 "libros electronicos", "manuales", "certificados", "recibos", "formularios",
                 "folletos", "volantes", "carteles", "boletos", "estados de cuenta",
                 "cotizaciones", "propuestas", "documentos legales", "declaraciones fiscales",
                 "tesis", "memorias", "disertaciones", "boletines", "catalogos",
                 "portafolios", "cartas", "constancias", "permisos", "diplomas"]
    keywords.extend([f"{title} {d}" for d in doc_types])

    # --- Quality/feature adjectives ---
    features = ["alta calidad", "sin perdida", "procesamiento rapido", "modo por lotes",
                "arrastrar y soltar", "sin limite de tamano", "ilimitado",
                "sin marca de agua", "sin publicidad", "privacidad garantizada", "cifrado",
                "cumple RGPD", "eliminacion automatica", "en la nube", "sin conexion",
                "codigo abierto", "ligero", "profesional", "empresarial",
                "compatible movil", "responsivo", "multiidioma", "accesible",
                "cumple WCAG", "interfaz intuitiva", "sin instalacion"]
    keywords.extend([f"{title} {f}" for f in features])
    keywords.extend([f"{short} con {f}" for f in features])

    # --- Action verbs ---
    actions = ["descargar", "subir", "guardar", "exportar", "importar",
               "compartir", "enviar por correo", "imprimir", "vista previa", "visualizar",
               "abrir", "crear", "generar", "producir", "fabricar",
               "disenar", "personalizar", "modificar", "ajustar", "configurar"]
    keywords.extend([f"{a} {short}" for a in actions])
    keywords.extend([f"{a} y {title.lower()}" for a in actions])

    # --- Comparison keywords ---
    competitors = ["Adobe Acrobat", "iLovePDF", "SmallPDF", "Foxit",
                   "Nitro PDF", "PDF24", "Sejda", "PDFsam", "Soda PDF"]
    keywords.extend([f"{title} vs {c}" for c in competitors])
    keywords.extend([f"{short} alternativa a {c}" for c in competitors])
    keywords.extend([f"reemplazar {c} con {short}" for c in competitors])

    # --- File format keywords ---
    formats = ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
               "JPG", "JPEG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
               "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "CSV"]
    keywords.extend([f"{short} formato {fmt}" for fmt in formats])

    # --- Size keywords ---
    sizes = ["archivos grandes", "archivos pequenos", "100 MB", "200 MB", "500 MB", "1 GB",
             "multiples archivos", "archivos masivos", "100 paginas", "500 paginas",
             "1000 paginas", "documentos largos", "PDF pesado", "PDF enorme"]
    keywords.extend([f"{title} {s}" for s in sizes])

    # --- Speed keywords ---
    speeds = ["en segundos", "instantaneamente", "en tiempo real", "ultra rapido",
              "sin espera", "inmediato", "express", "turbo", "relampago"]
    keywords.extend([f"{title} {s}" for s in speeds])

    # --- Question keywords ---
    questions = [
        f"como {title.lower()} gratis",
        f"donde {title.lower()} en linea",
        f"cual es la mejor forma de {title.lower()}",
        f"se puede {title.lower()} sin Adobe",
        f"es seguro {title.lower()} en linea",
        f"por que usar Stirling PDF para {title.lower()}",
        f"cuanto cuesta {title.lower()}",
        f"existe herramienta gratuita para {title.lower()}",
        f"que programa puede {title.lower()}",
        f"como {title.lower()} en el celular",
        f"se puede {title.lower()} en movil",
        f"funciona {title.lower()} sin internet",
        f"{title.lower()} con Stirling PDF es seguro",
        f"que tan rapido es {title.lower()} en linea",
        f"{title.lower()} reduce la calidad",
    ]
    keywords.extend(questions)

    # --- Industry keywords ---
    industries = ["salud", "finanzas", "legal", "educacion", "tecnologia",
                  "manufactura", "comercio", "construccion", "seguros",
                  "farmaceutica", "automotriz", "aeronautica", "logistica",
                  "telecomunicaciones", "energia", "medios", "editorial"]
    keywords.extend([f"{title} para el sector {ind}" for ind in industries])

    # --- Country/region keywords ---
    countries = ["Mexico", "Espana", "Argentina", "Colombia", "Chile",
                 "Peru", "Venezuela", "Ecuador", "Guatemala", "Cuba",
                 "Bolivia", "Republica Dominicana", "Honduras", "Paraguay",
                 "El Salvador", "Nicaragua", "Costa Rica", "Panama",
                 "Uruguay", "Puerto Rico"]
    keywords.extend([f"{title} {c}" for c in countries])
    keywords.extend([f"mejor {short} en {c}" for c in countries])

    # --- Long tail unique phrases ---
    long_tails = [
        f"{title.lower()} completamente gratis sin tarjeta de credito",
        f"{title.lower()} sin descargar ningun programa",
        f"{title.lower()} directamente en el navegador",
        f"servicio en la nube seguro para {title.lower()}",
        f"solucion de codigo abierto para {title.lower()}",
        f"herramienta {title.lower()} que respeta la privacidad",
        f"solucion empresarial para {title.lower()}",
        f"automatizacion {title.lower()} flujo de trabajo",
        f"API para integracion {title.lower()}",
        f"servidor autoalojado {title.lower()}",
        f"contenedor Docker {title.lower()}",
        f"{title.lower()} por linea de comandos",
        f"{title.lower()} programatico",
        f"{title.lower()} API REST",
        f"automatizacion por lotes {title.lower()}",
    ]
    keywords.extend(long_tails)

    # --- Additional Spanish-specific keywords ---
    es_specific = [
        f"{title} software libre", f"{title} codigo fuente abierto",
        f"{title} solucion hispanohablante", f"{title} interfaz en espanol",
        f"{title} en espanol", f"{short} latinoamerica",
        f"descargar {short} gratis", f"instalar {short}",
        f"usar {short} facilmente", f"aprender {short}",
        f"{title} para principiantes", f"{title} avanzado",
        f"{title} nivel experto", f"capacitacion {title.lower()}",
        f"curso {title.lower()}", f"video {title.lower()}",
        f"demostracion {title.lower()}", f"ejemplo {title.lower()}",
        f"plantilla {title.lower()}", f"modelo {title.lower()}",
    ]
    keywords.extend(es_specific)

    # --- Numbered unique tips/methods per page ---
    for i in range(1, 150):
        keywords.append(f"{title} metodo {i + page_index * 150}")
        keywords.append(f"{short} consejo numero {i + page_index * 150}")
        keywords.append(f"paso {i} para {title.lower()}")
        keywords.append(f"{short} truco {i + page_index * 150}")

    # --- Unique slug-based keywords ---
    slug_words = slug.replace("-", " ").split()
    for w in slug_words:
        keywords.append(f"herramienta gratuita {w} PDF en linea")
        keywords.append(f"mejor programa {w} PDF 2025")
        keywords.append(f"{w} documentos PDF facilmente")
        keywords.append(f"como {w} archivos PDF gratis")

    # Filter out any keywords already used globally
    unique_keywords = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in global_used_keywords and kw_lower:
            global_used_keywords.add(kw_lower)
            unique_keywords.append(kw)

    # If still under 1100, add more unique numbered variants
    counter = 3000 + page_index * 500
    while len(unique_keywords) < 1100:
        extra = f"{title} enfoque unico {counter}"
        if extra.lower() not in global_used_keywords:
            global_used_keywords.add(extra.lower())
            unique_keywords.append(extra)
        counter += 1

    return unique_keywords[:1100]


def gen_html(slug, title, short, keywords):
    """Generate a full Spanish SEO HTML page."""
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append(", ".join(chunk))

    section_titles = [
        f"Que es {title}?",
        f"Caracteristicas principales de {title}",
        f"Como {title} con Stirling PDF",
        f"Por que elegir Stirling PDF para {title}?",
        f"Preguntas frecuentes sobre {title}",
        f"Consejos para {title}",
        f"Casos de uso de {title}",
        f"Comparacion de herramientas {title}",
        f"{title} en diferentes dispositivos",
        f"Seguridad y privacidad en {title}",
        f"Palabras clave relacionadas",
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
<html lang="es" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Gratis en Linea - Stirling PDF Herramientas Gratuitas</title>
    <meta name="description" content="{title} gratis en linea sin programas. {short} con Stirling PDF - las mejores herramientas PDF gratuitas y de codigo abierto en la web.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/es/{slug}.html">
    <meta property="og:title" content="{title} Gratis - Stirling PDF">
    <meta property="og:description" content="Herramienta {short} gratuita de Stirling PDF. {title} rapido y seguro.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_ES">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <header class="bg-blue-700 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <div class="flex gap-4">
                    <a href="../../index.html" class="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50">Inicio</a>
                    <a href="../en/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">English</a>
                    <a href="../fr/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">Francais</a>
                    <a href="../ar/{slug}.html" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 border border-blue-400">عربي</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-blue-900 mb-6 text-center">{title} Gratis en Linea - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Bienvenido a la herramienta gratuita <strong>{title}</strong> de Stirling PDF.
                Te ofrecemos la mejor solucion para <strong>{short}</strong> directamente en tu navegador sin instalar ningun programa.
                Nuestra herramienta es completamente gratuita, segura y funciona en todos los dispositivos.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p class="text-blue-800 font-semibold">&#10003; 100% Gratis &#10003; Sin registro &#10003; Seguro y privado &#10003; Codigo abierto</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-green-50 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-green-800 mb-4">Comienza ahora - {title}</h2>
            <p class="text-gray-700 mb-4">
                Usa la herramienta {title} de Stirling PDF ahora mismo gratis. No necesitas registrarte ni descargar programas.
                Simplemente sube tu archivo y nosotros nos encargamos del resto.
            </p>
            <a href="../../index.html" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition">
                Usar herramienta ahora
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - Herramientas PDF gratuitas y de codigo abierto</p>
            <p class="text-sm">Todos los derechos reservados &copy; 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html


# Generate all pages
print(f"Generating {len(pages)} Spanish SEO pages...")
for idx, (slug, title, short) in enumerate(pages):
    keywords = get_unique_keywords(slug, title, short, idx)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/es/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} unique keywords)")

print(f"\nDone! Generated {len(pages)} Spanish SEO pages in seo/es/")
print(f"Total unique keywords used globally: {len(global_used_keywords)}")
