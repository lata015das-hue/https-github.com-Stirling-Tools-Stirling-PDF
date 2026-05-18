import ToolStub from "./_ToolStub";

export const meta = {
  title: "Remove Annotations — Free Online | Stirling-PDF",
  description:
    "Strip all annotations and comments Free, open source, and self-hostable so your files stay private.",
  keyword: "remove annotations",
  toolId: "remove-annotations",
  category: "other" as const,
  appUrl: "/index.html#/tool/remove-annotations",
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
