import ToolStub from "./_ToolStub";

export const meta = {
  title: "Remove Blank Pages — Free Online | Stirling-PDF",
  description:
    "Detect and remove blank pages Free, open source, and self-hostable so your files stay private.",
  keyword: "remove blank pages",
  toolId: "remove-blanks",
  category: "other" as const,
  appUrl: "/index.html#/tool/remove-blanks",
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
