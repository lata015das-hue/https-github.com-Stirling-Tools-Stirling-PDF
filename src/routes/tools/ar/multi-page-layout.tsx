import ToolStub from "../_ToolStub";

export const meta = {
  title: "تخطيط متعدد الصفحات — مجاناً | Stirling-PDF",
  description:
    "تخطيط متعدد الصفحات مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "صفحات متعددة pdf",
  toolId: "multi-page-layout",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/multi-page-layout",
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
      relatedTools={["merge-pdf", "split-pdf", "remove-pages", "rotate-pdf"]}
      lang="ar"
      dir="rtl"
    />
  );
}
