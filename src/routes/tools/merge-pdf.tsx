import ToolStub from "./_ToolStub";

export const meta = {
  title: "Merge PDF — Free Online PDF Merger | Stirling-PDF",
  description:
    "Combine multiple PDF files into one document for free. No signup, no watermark, no upload to third-party servers when self-hosted.",
  keyword: "merge pdf",
  toolId: "merge-pdfs",
  category: "page-operations" as const,
  appUrl: "/index.html#/tool/merge-pdfs",
};

export default function Page() {
  return (
    <ToolStub
      title="Merge PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
