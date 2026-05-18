import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to Single Page — Free Online | Stirling-PDF",
  description:
    "Convert multi-page PDF to one long page Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to single page",
  toolId: "pdf-to-single-page",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/pdf-to-single-page",
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
      relatedTools={["merge-pdf", "split-pdf", "remove-pages", "rotate-pdf"]}
    />
  );
}
