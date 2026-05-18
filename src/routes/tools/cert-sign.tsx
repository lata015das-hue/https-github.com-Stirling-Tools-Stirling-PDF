import ToolStub from "./_ToolStub";

export const meta = {
  title: "Certificate Sign — Free Online | Stirling-PDF",
  description:
    "Digitally sign PDF with certificate Free, open source, and self-hostable so your files stay private.",
  keyword: "certificate sign",
  toolId: "cert-sign",
  category: "security" as const,
  appUrl: "/index.html#/tool/cert-sign",
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
