import ToolStub from "./_ToolStub";

export const meta = {
  title: "Sanitize PDF — Free Online | Stirling-PDF",
  description:
    "Remove potentially dangerous content Free, open source, and self-hostable so your files stay private.",
  keyword: "sanitize pdf",
  toolId: "sanitize-pdf",
  category: "security" as const,
  appUrl: "/index.html#/tool/sanitize-pdf",
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
      relatedTools={["add-password", "unlock-pdf", "change-permissions", "add-watermark-pdf"]}
    />
  );
}
