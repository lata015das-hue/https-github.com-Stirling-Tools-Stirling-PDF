import ToolStub from "../_ToolStub";

export const meta = {
  title: "تغيير حجم الصفحات — مجاناً | Stirling-PDF",
  description:
    "تغيير حجم الصفحات مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تغيير حجم pdf",
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
      lang="ar"
      dir="rtl"
    />
  );
}
