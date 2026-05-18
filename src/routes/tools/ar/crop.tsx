import ToolStub from "../_ToolStub";

export const meta = {
  title: "قص هوامش PDF — مجاناً | Stirling-PDF",
  description:
    "قص هوامش PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "قص pdf",
  toolId: "crop",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/crop",
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
      relatedTools={["merge-pdf", "split-pdf", "remove-pages", "rotate-pdf"]}
      lang="ar"
      dir="rtl"
    />
  );
}
