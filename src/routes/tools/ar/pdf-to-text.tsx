import ToolStub from "../_ToolStub";

export const meta = {
  title: "استخراج النص من PDF — مجاناً | Stirling-PDF",
  description:
    "استخراج النص من PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "استخراج نص pdf",
  toolId: "pdf-to-text",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-text",
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
      relatedTools={["pdf-to-jpg", "jpg-to-pdf", "pdf-to-word", "pdf-to-presentation"]}
      lang="ar"
      dir="rtl"
    />
  );
}
