import ToolStub from "../_ToolStub";

export const meta = {
  title: "إخفاء البيانات الحساسة — مجاناً | Stirling-PDF",
  description:
    "إخفاء البيانات الحساسة مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "إخفاء بيانات pdf",
  toolId: "auto-redact",
  category: "security" as const,
  appUrl: "/index.html#/tool/auto-redact",
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
      relatedTools={["add-password", "unlock-pdf", "change-permissions", "add-watermark-pdf"]}
      lang="ar"
      dir="rtl"
    />
  );
}
