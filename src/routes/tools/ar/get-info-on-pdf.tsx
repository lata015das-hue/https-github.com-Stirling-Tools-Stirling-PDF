import ToolStub from "../_ToolStub";

export const meta = {
  title: "معلومات ملف PDF — مجاناً | Stirling-PDF",
  description:
    "معلومات ملف PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "معلومات pdf",
  toolId: "get-info-on-pdf",
  category: "other" as const,
  appUrl: "/index.html#/tool/get-info-on-pdf",
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
      relatedTools={["ocr-pdf", "extract-images", "flatten", "update-metadata"]}
      lang="ar"
      dir="rtl"
    />
  );
}
