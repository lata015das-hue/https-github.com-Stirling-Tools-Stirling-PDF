import ToolStub from "./_ToolStub";

export const meta = {
  title: "Rearrange Pages — Free Online | Stirling-PDF",
  description:
    "Reorder pages in a PDF document Free, open source, and self-hostable so your files stay private.",
  keyword: "rearrange pages",
  toolId: "rearrange-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/rearrange-pages",
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
