import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to Text — Free Online | Stirling-PDF",
  description:
    "Extract all text content from PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to text",
  toolId: "pdf-to-text",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-text",
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
