import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to EPUB — Free Online | Stirling-PDF",
  description:
    "Convert PDF to EPUB e-book format Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to epub",
  toolId: "pdf-to-epub",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-epub",
};

export default function Page() {
  return (
    <ToolStub
      title={meta.title}
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
      relatedTools={["pdf-to-jpg", "jpg-to-pdf", "pdf-to-word", "pdf-to-presentation"]}
    />
  );
}
