import ToolStub from "./_ToolStub";

export const meta = {
  title: "JPG to PDF — Combine Images into a PDF Free | Stirling-PDF",
  description:
    "Convert one or many JPG / PNG images into a single PDF file. Free, no signup, with full control when you self-host.",
  keyword: "jpg to pdf",
  toolId: "img-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/img-to-pdf",
};

export default function Page() {
  return (
    <ToolStub
      title="JPG to PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
      relatedTools={["pdf-to-jpg", "pdf-to-word", "pdf-to-presentation", "pdf-to-text"]}
    />
  );
}
