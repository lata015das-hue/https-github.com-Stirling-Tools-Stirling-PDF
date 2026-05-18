import ToolStub from "../_ToolStub";

export const meta = {
  title: "ترتيب الصفحات — مجاناً | Stirling-PDF",
  description:
    "ترتيب الصفحات مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ترتيب صفحات pdf",
  toolId: "rearrange-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/rearrange-pages",
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
