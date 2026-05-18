import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF Info — Free Online | Stirling-PDF",
  description:
    "Get detailed information about a PDF file Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf info",
  toolId: "get-info-on-pdf",
  category: "other" as const,
  appUrl: "/index.html#/tool/get-info-on-pdf",
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
