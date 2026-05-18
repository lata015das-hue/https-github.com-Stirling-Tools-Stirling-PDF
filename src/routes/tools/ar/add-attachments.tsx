import ToolStub from "../_ToolStub";

export const meta = {
  title: "إضافة مرفقات لـ PDF — مجاناً | Stirling-PDF",
  description:
    "إضافة مرفقات لـ PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "مرفقات pdf",
  toolId: "add-attachments",
  category: "other" as const,
  appUrl: "/index.html#/tool/add-attachments",
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
