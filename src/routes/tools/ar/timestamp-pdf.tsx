import ToolStub from "../_ToolStub";

export const meta = {
  title: "ختم زمني لـ PDF — مجاناً | Stirling-PDF",
  description:
    "ختم زمني لـ PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ختم زمني pdf",
  toolId: "timestamp-pdf",
  category: "security" as const,
  appUrl: "/index.html#/tool/timestamp-pdf",
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
      relatedTools={["add-password", "unlock-pdf", "change-permissions", "add-watermark-pdf"]}
      lang="ar"
      dir="rtl"
    />
  );
}
