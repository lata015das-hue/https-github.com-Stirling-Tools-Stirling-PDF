import ToolStub from "./_ToolStub";

export const meta = {
  title: "Remove Signatures — Free Online | Stirling-PDF",
  description:
    "Remove digital signatures from PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "remove signatures",
  toolId: "remove-cert-sign",
  category: "security" as const,
  appUrl: "/index.html#/tool/remove-cert-sign",
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
