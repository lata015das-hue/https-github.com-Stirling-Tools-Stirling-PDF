import ToolStub from "../_ToolStub";

export const meta = {
  title: "فتح PDF محمي — مجاناً | Stirling-PDF",
  description:
    "فتح PDF محمي مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "فتح pdf محمي",
  toolId: "remove-password",
  category: "security" as const,
  appUrl: "/index.html#/tool/remove-password",
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
