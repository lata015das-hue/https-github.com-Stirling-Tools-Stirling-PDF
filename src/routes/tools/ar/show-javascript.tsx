import ToolStub from "../_ToolStub";

export const meta = {
  title: "عرض JavaScript في PDF — مجاناً | Stirling-PDF",
  description:
    "عرض JavaScript في PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "javascript pdf",
  toolId: "show-javascript",
  category: "other" as const,
  appUrl: "/index.html#/tool/show-javascript",
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
