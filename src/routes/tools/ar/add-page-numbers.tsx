import ToolStub from "../_ToolStub";

export const meta = {
  title: "ترقيم الصفحات — مجاناً | Stirling-PDF",
  description:
    "ترقيم الصفحات مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ترقيم صفحات pdf",
  toolId: "add-page-numbers",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/add-page-numbers",
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
