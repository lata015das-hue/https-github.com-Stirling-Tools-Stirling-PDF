import ToolStub from "../_ToolStub";

export const meta = {
  title: "تسطيح PDF — مجاناً | Stirling-PDF",
  description:
    "تسطيح PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تسطيح pdf",
  toolId: "flatten",
  category: "other" as const,
  appUrl: "/index.html#/tool/flatten",
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
