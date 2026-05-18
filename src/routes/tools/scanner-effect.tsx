import ToolStub from "./_ToolStub";

export const meta = {
  title: "Scanner Effect — Free Online | Stirling-PDF",
  description:
    "Make PDF look like a physical scan Free, open source, and self-hostable so your files stay private.",
  keyword: "scanner effect",
  toolId: "scanner-effect",
  category: "advance" as const,
  appUrl: "/index.html#/tool/scanner-effect",
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
