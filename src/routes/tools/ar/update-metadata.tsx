import ToolStub from "../_ToolStub";

export const meta = {
  title: "تعديل البيانات الوصفية — مجاناً | Stirling-PDF",
  description:
    "تعديل البيانات الوصفية مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تعديل metadata pdf",
  toolId: "update-metadata",
  category: "other" as const,
  appUrl: "/index.html#/tool/update-metadata",
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
