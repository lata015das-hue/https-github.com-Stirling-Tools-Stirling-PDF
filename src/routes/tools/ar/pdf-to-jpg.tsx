import ToolStub from "../_ToolStub";

export const meta = {
  title: "PDF إلى صور — مجاناً | Stirling-PDF",
  description:
    "PDF إلى صور مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "pdf إلى jpg",
  toolId: "pdf-to-img",
  category: "convert" as const,
  appUrl: "/index.html#/tool/pdf-to-img",
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
