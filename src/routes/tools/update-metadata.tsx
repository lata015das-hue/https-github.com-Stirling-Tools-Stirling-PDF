import ToolStub from "./_ToolStub";

export const meta = {
  title: "Update Metadata — Free Online | Stirling-PDF",
  description:
    "Edit PDF title, author, and metadata Free, open source, and self-hostable so your files stay private.",
  keyword: "update metadata",
  toolId: "update-metadata",
  category: "other" as const,
  appUrl: "/index.html#/tool/update-metadata",
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
