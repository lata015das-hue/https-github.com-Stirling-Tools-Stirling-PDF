import ToolStub from "./_ToolStub";

export const meta = {
  title: "HTML to PDF — Free Online | Stirling-PDF",
  description:
    "Convert HTML files to PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "html to pdf",
  toolId: "html-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/html-to-pdf",
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
