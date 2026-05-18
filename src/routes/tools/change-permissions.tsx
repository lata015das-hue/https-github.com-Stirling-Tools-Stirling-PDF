import ToolStub from "./_ToolStub";

export const meta = {
  title: "Change Permissions — Free Online | Stirling-PDF",
  description:
    "Modify PDF access permissions Free, open source, and self-hostable so your files stay private.",
  keyword: "change permissions",
  toolId: "change-permissions",
  category: "security" as const,
  appUrl: "/index.html#/tool/change-permissions",
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
