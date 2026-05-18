import ToolStub from "./_ToolStub";

export const meta = {
  title: "Rotate PDF — Rotate All PDF Pages Free | Stirling-PDF",
  description:
    "Rotate every page in a PDF by 90°, 180°, or 270°. Free, open source, and self-hostable.",
  keyword: "rotate pdf",
  toolId: "rotate-pdf",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/rotate-pdf",
};

export default function Page() {
  return (
    <ToolStub
      title="Rotate PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
