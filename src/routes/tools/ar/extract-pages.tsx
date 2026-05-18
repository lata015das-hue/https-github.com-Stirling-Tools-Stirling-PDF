import ToolStub from "../_ToolStub";

export const meta = {
  title: "استخراج صفحات PDF — مجاناً | Stirling-PDF",
  description:
    "استخراج صفحات PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "استخراج صفحات pdf",
  toolId: "extract-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/extract-pages",
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
      lang="ar"
      dir="rtl"
    />
  );
}
