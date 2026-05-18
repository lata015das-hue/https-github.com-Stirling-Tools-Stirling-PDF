import ToolStub from "../_ToolStub";

export const meta = {
  title: "تعديل فهرس PDF — مجاناً | Stirling-PDF",
  description:
    "تعديل فهرس PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "فهرس pdf",
  toolId: "edit-table-of-contents",
  category: "other" as const,
  appUrl: "/index.html#/tool/edit-table-of-contents",
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
