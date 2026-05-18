import ToolStub from "./_ToolStub";

export const meta = {
  title: "Add Watermark to PDF — Free Online | Stirling-PDF",
  description:
    "Add a text watermark to every page of a PDF. Free, open source, and self-hostable so your documents stay private.",
  keyword: "add watermark to pdf",
  toolId: "add-watermark",
  category: "security" as const,
  appUrl: "/index.html#/tool/add-watermark",
};

export default function Page() {
  return (
    <ToolStub
      title="Add Watermark to PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
      relatedTools={["add-password", "unlock-pdf", "change-permissions", "cert-sign"]}
    />
  );
}
