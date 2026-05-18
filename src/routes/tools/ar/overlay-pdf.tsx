import ToolStub from "../_ToolStub";

export const meta = {
  title: "تراكب PDF — مجاناً | Stirling-PDF",
  description:
    "تراكب PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "تراكب pdf",
  toolId: "overlay-pdf",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/overlay-pdf",
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
