import ToolStub from "./_ToolStub";

export const meta = {
  title: "Email to PDF — Free Online | Stirling-PDF",
  description:
    "Convert email (.eml) files to PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "email to pdf",
  toolId: "eml-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/eml-to-pdf",
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
      relatedTools={["pdf-to-jpg", "jpg-to-pdf", "pdf-to-word", "pdf-to-presentation"]}
    />
  );
}
