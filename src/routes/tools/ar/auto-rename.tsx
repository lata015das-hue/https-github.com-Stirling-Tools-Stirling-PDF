import ToolStub from "../_ToolStub";

export const meta = {
  title: "تسمية PDF تلقائياً — مجاناً | Stirling-PDF",
  description:
    "تسمية PDF تلقائياً مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تسمية pdf تلقائي",
  toolId: "auto-rename",
  category: "advance" as const,
  appUrl: "/index.html#/tool/auto-rename",
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
