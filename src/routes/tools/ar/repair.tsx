import ToolStub from "../_ToolStub";

export const meta = {
  title: "إصلاح PDF تالف — مجاناً | Stirling-PDF",
  description:
    "إصلاح PDF تالف مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "إصلاح pdf",
  toolId: "repair",
  category: "advance" as const,
  appUrl: "/index.html#/tool/repair",
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
      relatedTools={["compress-pdf", "auto-rename", "extract-image-scans", "scanner-effect"]}
      lang="ar"
      dir="rtl"
    />
  );
}
