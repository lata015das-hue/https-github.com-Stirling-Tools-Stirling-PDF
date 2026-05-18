import ToolStub from "../_ToolStub";

export const meta = {
  title: "بريد إلكتروني إلى PDF — مجاناً | Stirling-PDF",
  description:
    "بريد إلكتروني إلى PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "بريد إلى pdf",
  toolId: "eml-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/eml-to-pdf",
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
