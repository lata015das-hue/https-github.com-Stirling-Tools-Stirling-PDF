import ToolStub from "./_ToolStub";

export const meta = {
  title: "Markdown to PDF — Free Online | Stirling-PDF",
  description:
    "Convert Markdown files to PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "markdown to pdf",
  toolId: "markdown-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/markdown-to-pdf",
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
    />
  );
}
