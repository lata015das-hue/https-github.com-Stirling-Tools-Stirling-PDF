import ToolStub from "../_ToolStub";

export const meta = {
  title: "تأثير الماسح الضوئي — مجاناً | Stirling-PDF",
  description:
    "تأثير الماسح الضوئي مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تأثير سكانر pdf",
  toolId: "scanner-effect",
  category: "advance" as const,
  appUrl: "/index.html#/tool/scanner-effect",
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
