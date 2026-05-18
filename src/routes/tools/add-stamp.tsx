import ToolStub from "./_ToolStub";

export const meta = {
  title: "Add Stamp — Free Online | Stirling-PDF",
  description:
    "Add a stamp/badge to PDF pages Free, open source, and self-hostable so your files stay private.",
  keyword: "add stamp",
  toolId: "add-stamp",
  category: "other" as const,
  appUrl: "/index.html#/tool/add-stamp",
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
