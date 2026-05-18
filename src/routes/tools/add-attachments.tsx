import ToolStub from "./_ToolStub";

export const meta = {
  title: "Add Attachments — Free Online | Stirling-PDF",
  description:
    "Embed files as attachments in PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "add attachments",
  toolId: "add-attachments",
  category: "other" as const,
  appUrl: "/index.html#/tool/add-attachments",
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
