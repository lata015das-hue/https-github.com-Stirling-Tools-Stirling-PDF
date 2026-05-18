import ToolStub from "../_ToolStub";

export const meta = {
  title: "إزالة التوقيعات الرقمية — مجاناً | Stirling-PDF",
  description:
    "إزالة التوقيعات الرقمية مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "إزالة توقيع pdf",
  toolId: "remove-cert-sign",
  category: "security" as const,
  appUrl: "/index.html#/tool/remove-cert-sign",
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
