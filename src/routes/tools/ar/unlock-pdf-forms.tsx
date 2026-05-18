import ToolStub from "../_ToolStub";

export const meta = {
  title: "فتح نماذج PDF — مجاناً | Stirling-PDF",
  description:
    "فتح نماذج PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "فتح نماذج pdf",
  toolId: "unlock-pdf-forms",
  category: "security" as const,
  appUrl: "/index.html#/tool/unlock-pdf-forms",
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
