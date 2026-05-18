import ToolStub from "../_ToolStub";

export const meta = {
  title: "صفحة واحدة طويلة — مجاناً | Stirling-PDF",
  description:
    "صفحة واحدة طويلة مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf صفحة واحدة",
  toolId: "pdf-to-single-page",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/pdf-to-single-page",
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
