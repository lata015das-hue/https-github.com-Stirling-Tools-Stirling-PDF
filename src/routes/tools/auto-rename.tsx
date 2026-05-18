import ToolStub from "./_ToolStub";

export const meta = {
  title: "Auto Rename — Free Online | Stirling-PDF",
  description:
    "Rename PDF based on its content Free, open source, and self-hostable so your files stay private.",
  keyword: "auto rename",
  toolId: "auto-rename",
  category: "advance" as const,
  appUrl: "/index.html#/tool/auto-rename",
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
