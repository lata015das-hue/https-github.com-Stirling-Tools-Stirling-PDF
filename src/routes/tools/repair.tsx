import ToolStub from "./_ToolStub";

export const meta = {
  title: "Repair PDF — Free Online | Stirling-PDF",
  description:
    "Attempt to fix corrupted or damaged PDFs Free, open source, and self-hostable so your files stay private.",
  keyword: "repair pdf",
  toolId: "repair",
  category: "advance" as const,
  appUrl: "/index.html#/tool/repair",
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
