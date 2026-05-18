import ToolStub from "../_ToolStub";

export const meta = {
  title: "ضغط PDF — مجاناً | Stirling-PDF",
  description:
    "ضغط PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "ضغط pdf",
  toolId: "compress-pdf",
  category: "advance" as const,
  appUrl: "/index.html#/tool/compress-pdf",
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
      relatedTools={["repair", "auto-rename", "extract-image-scans", "scanner-effect"]}
      lang="ar"
      dir="rtl"
    />
  );
}
