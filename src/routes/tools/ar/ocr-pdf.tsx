import ToolStub from "../_ToolStub";

export const meta = {
  title: "التعرف الضوئي OCR — مجاناً | Stirling-PDF",
  description:
    "التعرف الضوئي OCR مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ocr عربي",
  toolId: "ocr-pdf",
  category: "other" as const,
  appUrl: "/index.html#/tool/ocr-pdf",
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
