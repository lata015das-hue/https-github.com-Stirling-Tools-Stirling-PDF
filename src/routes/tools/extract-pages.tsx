import ToolStub from "./_ToolStub";

export const meta = {
  title: "Extract Pages — Free Online | Stirling-PDF",
  description:
    "Extract specific pages into a new PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "extract pages",
  toolId: "extract-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/extract-pages",
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
