import ToolStub from "../_ToolStub";

export const meta = {
  title: "تنظيف PDF — مجاناً | Stirling-PDF",
  description:
    "تنظيف PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تنظيف pdf",
  toolId: "sanitize-pdf",
  category: "security" as const,
  appUrl: "/index.html#/tool/sanitize-pdf",
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
