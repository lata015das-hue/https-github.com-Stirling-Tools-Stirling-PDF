import ToolStub from "./_ToolStub";

export const meta = {
  title: "Timestamp PDF — Free Online | Stirling-PDF",
  description:
    "Add trusted timestamp to PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "timestamp pdf",
  toolId: "timestamp-pdf",
  category: "security" as const,
  appUrl: "/index.html#/tool/timestamp-pdf",
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
