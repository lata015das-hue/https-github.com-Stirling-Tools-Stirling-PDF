import ToolStub from "./_ToolStub";

export const meta = {
  title: "Show JavaScript — Free Online | Stirling-PDF",
  description:
    "Display embedded JavaScript in PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "show javascript",
  toolId: "show-javascript",
  category: "other" as const,
  appUrl: "/index.html#/tool/show-javascript",
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
      relatedTools={["ocr-pdf", "extract-images", "flatten", "update-metadata"]}
    />
  );
}
