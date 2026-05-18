import ToolStub from "./_ToolStub";

export const meta = {
  title: "Crop PDF — Free Online | Stirling-PDF",
  description:
    "Crop margins from PDF pages Free, open source, and self-hostable so your files stay private.",
  keyword: "crop pdf",
  toolId: "crop",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/crop",
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
