import ToolStub from "./_ToolStub";

export const meta = {
  title: "Unlock PDF Forms — Free Online | Stirling-PDF",
  description:
    "Unlock locked PDF form fields Free, open source, and self-hostable so your files stay private.",
  keyword: "unlock pdf forms",
  toolId: "unlock-pdf-forms",
  category: "security" as const,
  appUrl: "/index.html#/tool/unlock-pdf-forms",
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
    />
  );
}
