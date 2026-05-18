import ToolStub from "../_ToolStub";

export const meta = {
  title: "Markdown إلى PDF — مجاناً | Stirling-PDF",
  description:
    "Markdown إلى PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "markdown إلى pdf",
  toolId: "markdown-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/markdown-to-pdf",
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
      lang="ar"
      dir="rtl"
    />
  );
}
