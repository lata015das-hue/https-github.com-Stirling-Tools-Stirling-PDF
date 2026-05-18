import ToolStub from "../_ToolStub";

export const meta = {
  title: "ملف إلى PDF — مجاناً | Stirling-PDF",
  description:
    "ملف إلى PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ملف إلى pdf",
  toolId: "file-to-pdf",
  category: "convert" as const,
  appUrl: "/index.html#/tool/file-to-pdf",
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
