import ToolStub from "../_ToolStub";

export const meta = {
  title: "صور إلى PDF — مجاناً | Stirling-PDF",
  description:
    "صور إلى PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "صور إلى pdf",
  toolId: "img-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/img-to-pdf",
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
