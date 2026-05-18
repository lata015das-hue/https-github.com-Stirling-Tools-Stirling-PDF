import ToolStub from "../_ToolStub";

export const meta = {
  title: "توقيع رقمي لـ PDF — مجاناً | Stirling-PDF",
  description:
    "توقيع رقمي لـ PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "توقيع رقمي pdf",
  toolId: "cert-sign",
  category: "security" as const,
  appUrl: "/index.html#/tool/cert-sign",
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
