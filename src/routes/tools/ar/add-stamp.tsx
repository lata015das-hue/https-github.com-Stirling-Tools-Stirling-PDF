import ToolStub from "../_ToolStub";

export const meta = {
  title: "إضافة ختم لـ PDF — مجاناً | Stirling-PDF",
  description:
    "إضافة ختم لـ PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ختم pdf",
  toolId: "add-stamp",
  category: "other" as const,
  appUrl: "/index.html#/tool/add-stamp",
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
