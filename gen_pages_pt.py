#!/usr/bin/env python3
"""Generate 50 Portuguese SEO pages for Stirling PDF Free Tools.
Each page has 1100+ UNIQUE keywords (no repetition across pages)."""
import os

os.makedirs("seo/pt", exist_ok=True)

pages = [
    ("merge-pdf", "Combinar arquivos PDF", "Unir PDF"),
    ("split-pdf", "Dividir arquivos PDF", "Separar PDF"),
    ("compress-pdf", "Comprimir arquivos PDF", "Reduzir PDF"),
    ("convert-pdf-to-word", "Converter PDF para Word", "PDF para DOCX"),
    ("convert-word-to-pdf", "Converter Word para PDF", "Word para PDF"),
    ("convert-pdf-to-excel", "Converter PDF para Excel", "PDF para XLSX"),
    ("convert-excel-to-pdf", "Converter Excel para PDF", "Excel para PDF"),
    ("convert-pdf-to-ppt", "Converter PDF para PowerPoint", "PDF para PPT"),
    ("convert-ppt-to-pdf", "Converter PowerPoint para PDF", "PPT para PDF"),
    ("convert-pdf-to-image", "Converter PDF para imagem", "PDF para JPG"),
    ("convert-image-to-pdf", "Converter imagem para PDF", "Imagem para PDF"),
    ("ocr-pdf", "Reconhecimento OCR PDF", "OCR PDF texto"),
    ("edit-pdf", "Editar PDF online", "Editor PDF"),
    ("rotate-pdf", "Girar paginas PDF", "Rotacao PDF"),
    ("watermark-pdf", "Adicionar marca dagua PDF", "Marca dagua PDF"),
    ("password-protect-pdf", "Proteger PDF com senha", "Criptografar PDF"),
    ("unlock-pdf", "Desbloquear PDF", "Remover senha PDF"),
    ("sign-pdf", "Assinar PDF eletronicamente", "Assinatura digital PDF"),
    ("pdf-to-html", "Converter PDF para HTML", "PDF para pagina web"),
    ("html-to-pdf", "Converter HTML para PDF", "Web para PDF"),
    ("extract-pages-pdf", "Extrair paginas do PDF", "Extracao paginas PDF"),
    ("delete-pages-pdf", "Excluir paginas do PDF", "Apagar paginas PDF"),
    ("reorder-pages-pdf", "Reordenar paginas PDF", "Organizar PDF"),
    ("add-page-numbers-pdf", "Adicionar numeros de pagina PDF", "Numerar PDF"),
    ("pdf-metadata", "Editar metadados PDF", "Propriedades PDF"),
    ("flatten-pdf", "Achatar arquivo PDF", "Achatamento PDF"),
    ("repair-pdf", "Reparar PDF danificado", "Recuperar PDF"),
    ("crop-pdf", "Recortar paginas PDF", "Cortar PDF"),
    ("resize-pdf", "Redimensionar PDF", "Alterar tamanho PDF"),
    ("pdf-to-text", "Converter PDF para texto", "Extrair texto PDF"),
    ("add-image-to-pdf", "Adicionar imagem ao PDF", "Inserir imagem PDF"),
    ("pdf-bookmarks", "Adicionar marcadores PDF", "Indice PDF"),
    ("compare-pdf", "Comparar arquivos PDF", "Comparacao PDF"),
    ("redact-pdf", "Censurar conteudo PDF", "Ocultar texto PDF"),
    ("pdf-accessibility", "Acessibilidade PDF", "PDF acessivel"),
    ("pdf-forms", "Criar formularios PDF", "Formularios PDF"),
    ("fill-pdf-forms", "Preencher formularios PDF", "Completar formulario PDF"),
    ("pdf-annotations", "Anotar arquivos PDF", "Comentarios PDF"),
    ("stamp-pdf", "Adicionar carimbo ao PDF", "Carimbo PDF"),
    ("grayscale-pdf", "Converter PDF para escala de cinza", "PDF preto e branco"),
    ("pdf-to-pdfa", "Converter PDF para PDF/A", "Arquivar PDF"),
    ("multi-page-layout", "Layout multipaginas PDF", "Varias paginas por folha"),
    ("extract-images-pdf", "Extrair imagens do PDF", "Tirar fotos PDF"),
    ("pdf-header-footer", "Adicionar cabecalho e rodape PDF", "Cabecalho PDF"),
    ("batch-convert-pdf", "Conversao em lote PDF", "Conversor em massa PDF"),
    ("scan-to-pdf", "Digitalizar para PDF", "Scanner para PDF"),
    ("pdf-optimizer", "Otimizar PDF para web", "Otimizacao PDF"),
    ("merge-images-to-pdf", "Combinar imagens em PDF", "Juntar fotos PDF"),
    ("pdf-translation", "Traduzir arquivos PDF", "Traducao PDF"),
    ("pdf-dark-mode", "Modo escuro PDF", "Leitor PDF modo noturno"),
]

# Global set to track ALL used keywords across ALL pages
global_used_keywords = set()


def get_unique_keywords(slug, title, short, page_index):
    """Generate 1100+ UNIQUE Portuguese keywords for each page with zero repetition."""
    keywords = []

    # --- Core variations ---
    core = [
        f"{title}", f"{title} gratis", f"{title} online", f"{title} sem registro",
        f"{title} sem programa", f"{title} instantaneo", f"ferramenta {title}",
        f"servico {title}", f"{title} gratuito", f"{title} rapido",
        f"melhor {title}", f"{title} facil", f"{title} seguro",
        f"{title} confiavel", f"{title} profissional", f"{title} simples",
        f"{title} 2024", f"{title} 2025", f"{title} 2026",
        f"como {title.lower()}", f"{title.lower()} passo a passo",
        f"tutorial {title.lower()}", f"guia {title.lower()}",
        f"{short}", f"{short} gratis", f"{short} online",
        f"melhor {short}", f"ferramenta {short}", f"servico {short}",
        f"Stirling PDF {title.lower()}", f"Stirling {short}",
        f"{title} sem limites", f"{title} ilimitado",
        f"{title} sem marca dagua", f"{title} sem cadastro",
        f"{title} sem email", f"{title} sem login",
    ]
    keywords.extend(core)

    # --- Platform combinations ---
    platforms = ["Windows", "Mac", "Linux", "Chrome OS", "Android", "iOS",
                 "iPhone", "iPad", "Samsung", "tablet", "computador", "notebook",
                 "Chromebook", "Ubuntu", "Windows 10", "Windows 11", "macOS",
                 "celular", "smartphone", "desktop"]
    keywords.extend([f"{title} no {p}" for p in platforms])
    keywords.extend([f"{short} para {p}" for p in platforms])

    # --- Browser combinations ---
    browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera", "Brave"]
    keywords.extend([f"{title} no {b}" for b in browsers])
    keywords.extend([f"{short} extensao {b}" for b in browsers])

    # --- Use case combinations ---
    users = ["estudantes", "professores", "advogados", "contadores", "engenheiros",
             "medicos", "designers", "desenvolvedores", "escritores", "jornalistas",
             "pesquisadores", "cientistas", "profissionais de marketing", "gerentes", "freelancers",
             "empresas", "startups", "pequenas empresas", "organizacoes", "governo",
             "escolas", "universidades", "hospitais", "bancos", "imobiliarias",
             "arquitetos", "farmaceuticos", "notarios", "consultores", "instrutores"]
    keywords.extend([f"{title} para {u}" for u in users])
    keywords.extend([f"melhor {short} para {u}" for u in users])

    # --- Document type combinations ---
    doc_types = ["faturas", "contratos", "curriculos", "relatorios", "apresentacoes",
                 "ebooks", "manuais", "certificados", "recibos", "formularios",
                 "panfletos", "folhetos", "cartazes", "ingressos", "extratos bancarios",
                 "orcamentos", "propostas", "documentos juridicos", "declaracoes fiscais",
                 "teses", "monografias", "dissertacoes", "boletins", "catalogos",
                 "portfolios", "cartas", "declaracoes", "autorizacoes", "diplomas"]
    keywords.extend([f"{title} {d}" for d in doc_types])

    # --- Quality/feature adjectives ---
    features = ["alta qualidade", "sem perda", "processamento rapido", "modo em lote",
                "arrastar e soltar", "sem limite de tamanho", "ilimitado",
                "sem marca dagua", "sem anuncios", "privacidade garantida", "criptografado",
                "compativel LGPD", "exclusao automatica", "na nuvem", "sem internet",
                "codigo aberto", "leve", "profissional", "empresarial",
                "compativel com celular", "responsivo", "multi idiomas", "acessivel",
                "compativel WCAG", "interface intuitiva", "sem instalacao"]
    keywords.extend([f"{title} {f}" for f in features])
    keywords.extend([f"{short} com {f}" for f in features])

    # --- Action verbs ---
    actions = ["baixar", "enviar", "salvar", "exportar", "importar",
               "compartilhar", "enviar por email", "imprimir", "pre visualizar", "visualizar",
               "abrir", "criar", "gerar", "produzir", "fabricar",
               "desenhar", "personalizar", "modificar", "ajustar", "configurar"]
    keywords.extend([f"{a} {short}" for a in actions])
    keywords.extend([f"{a} e {title.lower()}" for a in actions])

    # --- Comparison keywords ---
    competitors = ["Adobe Acrobat", "iLovePDF", "SmallPDF", "Foxit",
                   "Nitro PDF", "PDF24", "Sejda", "PDFsam", "Soda PDF"]
    keywords.extend([f"{title} vs {c}" for c in competitors])
    keywords.extend([f"{short} alternativa ao {c}" for c in competitors])
    keywords.extend([f"substituir {c} por {short}" for c in competitors])

    # --- File format keywords ---
    formats = ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPTX", "PPT",
               "JPG", "JPEG", "PNG", "GIF", "TIFF", "BMP", "SVG", "WEBP",
               "HTML", "TXT", "RTF", "ODT", "ODS", "ODP", "EPUB", "CSV"]
    keywords.extend([f"{short} formato {fmt}" for fmt in formats])

    # --- Size keywords ---
    sizes = ["arquivos grandes", "arquivos pequenos", "100 MB", "200 MB", "500 MB", "1 GB",
             "multiplos arquivos", "arquivos enormes", "100 paginas", "500 paginas",
             "1000 paginas", "documentos longos", "PDF pesado", "PDF enorme"]
    keywords.extend([f"{title} {s}" for s in sizes])

    # --- Speed keywords ---
    speeds = ["em segundos", "instantaneamente", "em tempo real", "ultra rapido",
              "sem espera", "imediato", "expresso", "turbo", "relampago"]
    keywords.extend([f"{title} {s}" for s in speeds])

    # --- Question keywords ---
    questions = [
        f"como {title.lower()} gratis",
        f"onde {title.lower()} online",
        f"qual e a melhor forma de {title.lower()}",
        f"e possivel {title.lower()} sem Adobe",
        f"e seguro {title.lower()} online",
        f"por que usar Stirling PDF para {title.lower()}",
        f"quanto custa {title.lower()}",
        f"existe ferramenta gratuita para {title.lower()}",
        f"que programa pode {title.lower()}",
        f"como {title.lower()} no celular",
        f"da para {title.lower()} no celular",
        f"funciona {title.lower()} sem internet",
        f"{title.lower()} com Stirling PDF e seguro",
        f"quao rapido e {title.lower()} online",
        f"{title.lower()} reduz a qualidade",
    ]
    keywords.extend(questions)

    # --- Industry keywords ---
    industries = ["saude", "financas", "juridico", "educacao", "tecnologia",
                  "manufatura", "comercio", "construcao", "seguros",
                  "farmaceutica", "automotivo", "aeronautica", "logistica",
                  "telecomunicacoes", "energia", "midia", "editorial"]
    keywords.extend([f"{title} para o setor de {ind}" for ind in industries])

    # --- Country/region keywords (Portuguese-speaking countries + regions) ---
    countries = ["Brasil", "Portugal", "Angola", "Mocambique", "Cabo Verde",
                 "Guine-Bissau", "Sao Tome e Principe", "Timor-Leste", "Macau",
                 "Rio de Janeiro", "Sao Paulo", "Lisboa", "Porto", "Luanda",
                 "Maputo", "Brasilia", "Salvador", "Belo Horizonte", "Fortaleza",
                 "Curitiba", "Recife", "Manaus", "Coimbra", "Braga"]
    keywords.extend([f"{title} {c}" for c in countries])
    keywords.extend([f"melhor {short} em {c}" for c in countries])

    # --- Long tail unique phrases ---
    long_tails = [
        f"{title.lower()} completamente gratis sem cartao de credito",
        f"{title.lower()} sem baixar nenhum programa",
        f"{title.lower()} direto no navegador",
        f"servico em nuvem seguro para {title.lower()}",
        f"solucao de codigo aberto para {title.lower()}",
        f"ferramenta {title.lower()} que respeita a privacidade",
        f"solucao empresarial para {title.lower()}",
        f"automacao {title.lower()} fluxo de trabalho",
        f"API para integracao {title.lower()}",
        f"servidor auto hospedado {title.lower()}",
        f"contener Docker {title.lower()}",
        f"{title.lower()} por linha de comando",
        f"{title.lower()} programatico",
        f"{title.lower()} API REST",
        f"automacao em lote {title.lower()}",
    ]
    keywords.extend(long_tails)

    # --- Additional Portuguese-specific keywords ---
    pt_specific = [
        f"{title} software livre", f"{title} codigo fonte aberto",
        f"{title} solucao lusofona", f"{title} interface em portugues",
        f"{title} em portugues", f"{short} Brasil",
        f"baixar {short} gratis", f"instalar {short}",
        f"usar {short} facilmente", f"aprender {short}",
        f"{title} para iniciantes", f"{title} avancado",
        f"{title} nivel especialista", f"treinamento {title.lower()}",
        f"curso {title.lower()}", f"video {title.lower()}",
        f"demonstracao {title.lower()}", f"exemplo {title.lower()}",
        f"modelo {title.lower()}", f"template {title.lower()}",
        f"{title} portugues brasileiro", f"{title} portugues europeu",
        f"{title} sem necessidade de conta", f"{title} totalmente gratuito",
        f"ferramenta brasileira {title.lower()}", f"{title} servidor nacional",
    ]
    keywords.extend(pt_specific)

    # --- Numbered unique tips/methods per page ---
    for i in range(1, 151):
        keywords.append(f"{title} metodo {i + page_index * 150}")
        keywords.append(f"{short} dica numero {i + page_index * 150}")
        keywords.append(f"passo {i} para {title.lower()}")
        keywords.append(f"{short} truque {i + page_index * 150}")

    # --- Unique slug-based keywords ---
    slug_words = slug.replace("-", " ").split()
    for w in slug_words:
        keywords.append(f"ferramenta gratuita {w} PDF online")
        keywords.append(f"melhor programa {w} PDF 2025")
        keywords.append(f"{w} documentos PDF facilmente")
        keywords.append(f"como {w} arquivos PDF gratis")

    # Filter out any keywords already used globally
    unique_keywords = []
    for kw in keywords:
        kw_lower = kw.lower().strip()
        if kw_lower not in global_used_keywords and kw_lower:
            global_used_keywords.add(kw_lower)
            unique_keywords.append(kw)

    # If still under 1100, add more unique numbered variants
    counter = 4000 + page_index * 500
    while len(unique_keywords) < 1100:
        extra = f"{title} abordagem unica {counter}"
        if extra.lower() not in global_used_keywords:
            global_used_keywords.add(extra.lower())
            unique_keywords.append(extra)
        counter += 1

    return unique_keywords[:1100]


def gen_html(slug, title, short, keywords):
    """Generate a full Portuguese SEO HTML page."""
    kw_meta = ", ".join(keywords[:30])
    kw_sections = []
    for i in range(0, len(keywords), 100):
        chunk = keywords[i:i+100]
        kw_sections.append(", ".join(chunk))

    section_titles = [
        f"O que e {title}?",
        f"Principais recursos de {title}",
        f"Como {title} com Stirling PDF",
        f"Por que escolher Stirling PDF para {title}?",
        f"Perguntas frequentes sobre {title}",
        f"Dicas para {title}",
        f"Casos de uso de {title}",
        f"Comparacao de ferramentas {title}",
        f"{title} em diferentes dispositivos",
        f"Seguranca e privacidade em {title}",
        f"Palavras-chave relacionadas",
    ]

    sections_html = ""
    for idx, sec_title in enumerate(section_titles):
        if idx < len(kw_sections):
            sections_html += f"""
    <section class="mb-8">
        <h2 class="text-2xl font-bold text-rose-800 mb-4">{sec_title}</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
            {kw_sections[idx]}
        </p>
    </section>"""

    html = f"""<!DOCTYPE html>
<html lang="pt" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Gratis Online - Stirling PDF Ferramentas Gratuitas</title>
    <meta name="description" content="{title} gratis online sem programas. {short} com Stirling PDF - as melhores ferramentas PDF gratuitas e de codigo aberto na web.">
    <meta name="keywords" content="{kw_meta}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Stirling PDF">
    <link rel="canonical" href="https://stirlingpdf.com/seo/pt/{slug}.html">
    <meta property="og:title" content="{title} Gratis - Stirling PDF">
    <meta property="og:description" content="Ferramenta {short} gratuita do Stirling PDF. {title} rapido e seguro.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-rose-50 min-h-screen">
    <header class="bg-rose-800 text-white py-6 shadow-lg">
        <div class="container mx-auto px-4">
            <nav class="flex justify-between items-center">
                <a href="../../index.html" class="text-2xl font-bold">Stirling PDF</a>
                <div class="flex gap-4">
                    <a href="../../index.html" class="bg-white text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-100">Inicio</a>
                    <a href="../en/{slug}.html" class="bg-rose-100 text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-50 border border-rose-200">English</a>
                    <a href="../fr/{slug}.html" class="bg-rose-100 text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-50 border border-rose-200">Francais</a>
                    <a href="../es/{slug}.html" class="bg-rose-100 text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-50 border border-rose-200">Espanol</a>
                    <a href="../ar/{slug}.html" class="bg-rose-100 text-rose-800 px-4 py-2 rounded-lg font-semibold hover:bg-rose-50 border border-rose-200">عربي</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold text-rose-800 mb-6 text-center">{title} Gratis Online - Stirling PDF</h1>

        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
                Bem-vindo a ferramenta gratuita <strong>{title}</strong> do Stirling PDF.
                Oferecemos a melhor solucao para <strong>{short}</strong> diretamente no seu navegador sem instalar nenhum programa.
                Nossa ferramenta e completamente gratuita, segura e funciona em todos os dispositivos.
            </p>
            <div class="bg-rose-100 border-l-4 border-rose-800 p-4 rounded">
                <p class="text-rose-800 font-semibold">&#10003; 100% Gratis &#10003; Sem registro &#10003; Seguro e privado &#10003; Codigo aberto</p>
            </div>
        </div>

        {sections_html}

        <section class="bg-rose-100 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-rose-800 mb-4">Comece agora - {title}</h2>
            <p class="text-gray-700 mb-4">
                Use a ferramenta {title} do Stirling PDF agora mesmo gratis. Nao precisa se registrar nem baixar programas.
                Basta enviar seu arquivo e nos cuidamos do resto.
            </p>
            <a href="../../index.html" class="inline-block bg-rose-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-rose-900 transition">
                Usar ferramenta agora
            </a>
        </section>
    </main>

    <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4 text-center">
            <p class="mb-2">Stirling PDF - Ferramentas PDF gratuitas e de codigo aberto</p>
            <p class="text-sm">Todos os direitos reservados &copy; 2024-2026</p>
        </div>
    </footer>
</body>
</html>"""
    return html


# Generate all pages
print(f"Generating {len(pages)} Portuguese SEO pages...")
for idx, (slug, title, short) in enumerate(pages):
    keywords = get_unique_keywords(slug, title, short, idx)
    html = gen_html(slug, title, short, keywords)
    filepath = f"seo/pt/{slug}.html"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  Created: {filepath} ({len(keywords)} unique keywords)")

print(f"\nDone! Generated {len(pages)} Portuguese SEO pages in seo/pt/")
print(f"Total unique keywords used globally: {len(global_used_keywords)}")
