import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to Word — Convert PDF to DOCX Free | Stirling-PDF",
  description:
    "Convert PDF files to editable Word (DOCX) documents. Free, no signup, and works offline when you self-host Stirling-PDF.",
  keyword: "pdf to word",
  toolId: "pdf-to-word",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-word",
};

export default function Page() {
  return (
    <ToolStub
      title="PDF to Word"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
