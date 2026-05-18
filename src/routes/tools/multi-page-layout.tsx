import ToolStub from "./_ToolStub";

export const meta = {
  title: "Multi-Page Layout — Free Online | Stirling-PDF",
  description:
    "Put multiple pages on one sheet Free, open source, and self-hostable so your files stay private.",
  keyword: "multi-page layout",
  toolId: "multi-page-layout",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/multi-page-layout",
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
