import ToolStub from "./_ToolStub";

export const meta = {
  title: "Extract Scans — Free Online | Stirling-PDF",
  description:
    "Split individual scanned images from pages Free, open source, and self-hostable so your files stay private.",
  keyword: "extract scans",
  toolId: "extract-image-scans",
  category: "advance" as const,
  appUrl: "/index.html#/tool/extract-image-scans",
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
