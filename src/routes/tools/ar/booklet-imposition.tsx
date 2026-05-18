import ToolStub from "../_ToolStub";

export const meta = {
  title: "كتيّب طباعة — مجاناً | Stirling-PDF",
  description:
    "كتيّب طباعة مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "كتيب pdf",
  toolId: "booklet-imposition",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/booklet-imposition",
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
