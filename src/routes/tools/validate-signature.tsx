import ToolStub from "./_ToolStub";

export const meta = {
  title: "Validate Signature — Free Online | Stirling-PDF",
  description:
    "Verify PDF digital signatures Free, open source, and self-hostable so your files stay private.",
  keyword: "validate signature",
  toolId: "validate-signature",
  category: "security" as const,
  appUrl: "/index.html#/tool/validate-signature",
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
