import ToolStub from "../_ToolStub";

export const meta = {
  title: "تقسيم PDF — مجاناً | Stirling-PDF",
  description:
    "تقسيم PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تقسيم pdf",
  toolId: "split-pages",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/split-pages",
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
      relatedTools={["merge-pdf", "remove-pages", "rotate-pdf", "rearrange-pages"]}
      lang="ar"
      dir="rtl"
    />
  );
}
