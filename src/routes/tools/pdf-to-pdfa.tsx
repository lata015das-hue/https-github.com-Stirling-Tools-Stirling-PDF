import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to PDF/A — Free Online | Stirling-PDF",
  description:
    "Convert PDF to archival PDF/A format Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to pdf/a",
  toolId: "pdf-to-pdfa",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-pdfa",
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
