import ToolStub from "./_ToolStub";

export const meta = {
  title: "Remove Pages — Free Online | Stirling-PDF",
  description:
    "Remove specific pages from a PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "remove pages",
  toolId: "remove-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/remove-pages",
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
