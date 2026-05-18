import ToolStub from "../_ToolStub";

export const meta = {
  title: "عكس ألوان PDF — مجاناً | Stirling-PDF",
  description:
    "عكس ألوان PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "عكس ألوان pdf",
  toolId: "replace-invert-pdf",
  category: "advance" as const,
  appUrl: "/index.html#/tool/replace-invert-pdf",
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
