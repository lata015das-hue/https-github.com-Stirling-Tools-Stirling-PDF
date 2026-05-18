import ToolStub from "../_ToolStub";

export const meta = {
  title: "حذف صفحات PDF — مجاناً | Stirling-PDF",
  description:
    "حذف صفحات PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "حذف صفحات pdf",
  toolId: "remove-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/remove-pages",
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
      relatedTools={["merge-pdf", "split-pdf", "rotate-pdf", "rearrange-pages"]}
      lang="ar"
      dir="rtl"
    />
  );
}
