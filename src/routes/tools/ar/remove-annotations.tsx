import ToolStub from "../_ToolStub";

export const meta = {
  title: "حذف التعليقات التوضيحية — مجاناً | Stirling-PDF",
  description:
    "حذف التعليقات التوضيحية مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "حذف تعليقات pdf",
  toolId: "remove-annotations",
  category: "other" as const,
  appUrl: "/index.html#/tool/remove-annotations",
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
