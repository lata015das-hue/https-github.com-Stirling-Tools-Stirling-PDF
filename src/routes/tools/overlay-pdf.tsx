import ToolStub from "./_ToolStub";

export const meta = {
  title: "Overlay PDFs — Free Online | Stirling-PDF",
  description:
    "Overlay one PDF on top of another Free, open source, and self-hostable so your files stay private.",
  keyword: "overlay pdfs",
  toolId: "overlay-pdf",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/overlay-pdf",
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
