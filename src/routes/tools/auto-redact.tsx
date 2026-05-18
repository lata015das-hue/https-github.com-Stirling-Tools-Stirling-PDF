import ToolStub from "./_ToolStub";

export const meta = {
  title: "Auto Redact — Free Online | Stirling-PDF",
  description:
    "Automatically redact sensitive information Free, open source, and self-hostable so your files stay private.",
  keyword: "auto redact",
  toolId: "auto-redact",
  category: "security" as const,
  appUrl: "/index.html#/tool/auto-redact",
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
