import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى بوربوينت — مجاناً | Stirling-PDF",
  description:
    "PDF إلى بوربوينت مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf بوربوينت",
  toolId: "pdf-to-presentation",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-presentation",
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
      relatedTools={["pdf-to-jpg", "jpg-to-pdf", "pdf-to-word", "pdf-to-text"]}
      lang="ar"
      dir="rtl"
    />
  );
}
