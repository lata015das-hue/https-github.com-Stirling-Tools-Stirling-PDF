import ToolStub from "../_ToolStub";

export const meta = {
  title: "HTML إلى PDF — مجاناً | Stirling-PDF",
  description:
    "HTML إلى PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "html إلى pdf",
  toolId: "html-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/html-to-pdf",
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
