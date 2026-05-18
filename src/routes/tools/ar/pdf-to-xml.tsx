import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى XML — مجاناً | Stirling-PDF",
  description:
    "PDF إلى XML مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf إلى xml",
  toolId: "pdf-to-xml",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-xml",
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
