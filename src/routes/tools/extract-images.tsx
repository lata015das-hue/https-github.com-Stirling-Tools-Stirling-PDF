import ToolStub from "./_ToolStub";

export const meta = {
  title: "Extract Images — Free Online | Stirling-PDF",
  description:
    "Extract all embedded images from PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "extract images",
  toolId: "extract-images",
  category: "other" as const,
  appUrl: "/index.html#/tool/extract-images",
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
