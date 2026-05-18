import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to CSV — Free Online | Stirling-PDF",
  description:
    "Extract tables from PDF to CSV Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to csv",
  toolId: "pdf-to-csv",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-csv",
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
