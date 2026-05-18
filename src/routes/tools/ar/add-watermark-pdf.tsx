import ToolStub from "../_ToolStub";

export const meta = {
  title: "علامة مائية PDF — مجاناً | Stirling-PDF",
  description:
    "علامة مائية PDF مجاناً عبر الإنترنت. مفتوح المصدر وقابل للاستضافة الذاتية لحماية خصوصيتك.",
  keyword: "علامة مائية pdf",
  toolId: "add-watermark",
  category: "security" as const,
  appUrl: "/index.html#/tool/add-watermark",
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
