import ToolStub from "../_ToolStub";

export const meta = {
  title: "تغيير صلاحيات PDF — مجاناً | Stirling-PDF",
  description:
    "تغيير صلاحيات PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "صلاحيات pdf",
  toolId: "change-permissions",
  category: "security" as const,
  appUrl: "/index.html#/tool/change-permissions",
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
