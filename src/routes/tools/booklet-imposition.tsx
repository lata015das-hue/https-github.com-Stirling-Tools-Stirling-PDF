import ToolStub from "./_ToolStub";

export const meta = {
  title: "Booklet Imposition — Free Online | Stirling-PDF",
  description:
    "Arrange pages for booklet printing Free, open source, and self-hostable so your files stay private.",
  keyword: "booklet imposition",
  toolId: "booklet-imposition",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/booklet-imposition",
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
