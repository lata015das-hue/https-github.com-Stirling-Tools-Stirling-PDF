import ToolStub from "./_ToolStub";

export const meta = {
  title: "OCR PDF — Make Scanned PDFs Searchable Free | Stirling-PDF",
  description:
    "Run OCR on scanned PDFs to make them searchable and selectable. Multilingual (English, Arabic, French, German, Spanish, Chinese), free, and self-hostable.",
  keyword: "ocr pdf",
  toolId: "ocr-pdf",
  category: "other" as const,
  appUrl: "/index.html#/tool/ocr-pdf",
};

export default function Page() {
  return (
    <ToolStub
      title="OCR PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
