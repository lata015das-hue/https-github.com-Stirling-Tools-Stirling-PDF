import ToolStub from "../_ToolStub";

export const meta = {
  title: "حذف الصفحات الفارغة — مجاناً | Stirling-PDF",
  description:
    "حذف الصفحات الفارغة مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "حذف صفحات فارغة pdf",
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
      lang="ar"
      dir="rtl"
    />
  );
}
