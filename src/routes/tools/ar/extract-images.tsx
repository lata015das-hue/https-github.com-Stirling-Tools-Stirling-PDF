import ToolStub from "../_ToolStub";

export const meta = {
  title: "استخراج الصور من PDF — مجاناً | Stirling-PDF",
  description:
    "استخراج الصور من PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "استخراج صور pdf",
  toolId: "extract-images",
  category: "other" as const,
  appUrl: "/index.html#/tool/extract-images",
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
