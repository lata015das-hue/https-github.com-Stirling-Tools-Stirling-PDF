import ToolStub from "../_ToolStub";

export const meta = {
  title: "التحقق من التوقيع — مجاناً | Stirling-PDF",
  description:
    "التحقق من التوقيع مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تحقق توقيع pdf",
  toolId: "validate-signature",
  category: "security" as const,
  appUrl: "/index.html#/tool/validate-signature",
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
