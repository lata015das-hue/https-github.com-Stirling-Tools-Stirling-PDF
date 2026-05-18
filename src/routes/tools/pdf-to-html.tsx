import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to HTML — Free Online | Stirling-PDF",
  description:
    "Convert PDF to HTML web page Free, open source, and self-hostable so your files stay private.",
  keyword: "pdf to html",
  toolId: "pdf-to-html",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-html",
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
