import ToolStub from "./_ToolStub";

export const meta = {
  title: "Add Page Numbers — Free Online | Stirling-PDF",
  description:
    "Add page numbers to your PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "add page numbers",
  toolId: "add-page-numbers",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/add-page-numbers",
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
