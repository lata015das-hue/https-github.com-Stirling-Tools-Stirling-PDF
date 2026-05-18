import ToolStub from "../_ToolStub";

export const meta = {
  title: "استخراج المسح الضوئي — مجاناً | Stirling-PDF",
  description:
    "استخراج المسح الضوئي مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "مسح ضوئي pdf",
  toolId: "extract-image-scans",
  category: "advance" as const,
  appUrl: "/index.html#/tool/extract-image-scans",
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
      relatedTools={["compress-pdf", "repair", "auto-rename", "scanner-effect"]}
      lang="ar"
      dir="rtl"
    />
  );
}
