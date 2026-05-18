import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى Word — مجاناً | Stirling-PDF",
  description:
    "PDF إلى Word مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تحويل pdf word",
  toolId: "pdf-to-word",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-word",
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
      relatedTools={["pdf-to-jpg", "jpg-to-pdf", "pdf-to-presentation", "pdf-to-text"]}
      lang="ar"
      dir="rtl"
    />
  );
}
