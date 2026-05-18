import ToolStub from "./_ToolStub";

export const meta = {
  title: "Scale Pages — Free Online | Stirling-PDF",
  description:
    "Scale PDF pages to different paper sizes Free, open source, and self-hostable so your files stay private.",
  keyword: "scale pages",
  toolId: "scale-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/scale-pages",
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
      relatedTools={["merge-pdf", "split-pdf", "remove-pages", "rotate-pdf"]}
    />
  );
}
