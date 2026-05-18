import ToolStub from "./_ToolStub";

export const meta = {
  title: "Flatten PDF — Free Online | Stirling-PDF",
  description:
    "Flatten forms, annotations, and layers Free, open source, and self-hostable so your files stay private.",
  keyword: "flatten pdf",
  toolId: "flatten",
  category: "other" as const,
  appUrl: "/index.html#/tool/flatten",
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
