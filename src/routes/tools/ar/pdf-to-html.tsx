import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى HTML — مجاناً | Stirling-PDF",
  description:
    "PDF إلى HTML مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf إلى html",
  toolId: "pdf-to-html",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-html",
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
