import ToolStub from "./_ToolStub";

export const meta = {
  title: "Replace/Invert Colors — Free Online | Stirling-PDF",
  description:
    "Invert or replace colors in PDF Free, open source, and self-hostable so your files stay private.",
  keyword: "replace/invert colors",
  toolId: "replace-invert-pdf",
  category: "advance" as const,
  appUrl: "/index.html#/tool/replace-invert-pdf",
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
