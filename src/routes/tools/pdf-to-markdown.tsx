import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to Markdown — Free Online | Stirling-PDF",
  description:
    "Convert PDF to Markdown format Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to markdown",
  toolId: "pdf-to-markdown",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-markdown",
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
