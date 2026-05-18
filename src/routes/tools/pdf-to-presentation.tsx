import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to PowerPoint — Free Online | Stirling-PDF",
  description:
    "Convert PDF to PPTX presentation Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to powerpoint",
  toolId: "pdf-to-presentation",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-presentation",
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
