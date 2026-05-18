import ToolStub from "./_ToolStub";

export const meta = {
  title: "Edit Table of Contents — Free Online | Stirling-PDF",
  description:
    "Edit PDF bookmarks and table of contents Free, open source, and self-hostable so your files stay private.",
  keyword: "edit table of contents",
  toolId: "edit-table-of-contents",
  category: "other" as const,
  appUrl: "/index.html#/tool/edit-table-of-contents",
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
