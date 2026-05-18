import ToolStub from "./_ToolStub";

export const meta = {
  title: "PDF to JPG — Convert PDF Pages to Images Free | Stirling-PDF",
  description:
    "Turn each page of a PDF into a high-quality JPG (or PNG / GIF). Free, open source, and privacy-friendly when self-hosted.",
  keyword: "pdf to jpg",
  toolId: "pdf-to-img",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-img",
};

export default function Page() {
  return (
    <ToolStub
      title="PDF to JPG"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
