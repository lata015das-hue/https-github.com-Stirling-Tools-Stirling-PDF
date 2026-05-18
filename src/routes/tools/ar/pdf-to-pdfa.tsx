import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى PDF/A — مجاناً | Stirling-PDF",
  description:
    "PDF إلى PDF/A مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf إلى pdf/a",
  toolId: "pdf-to-pdfa",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-pdfa",
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
