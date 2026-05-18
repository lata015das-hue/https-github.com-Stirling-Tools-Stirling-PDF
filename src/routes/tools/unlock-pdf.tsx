import ToolStub from "./_ToolStub";

export const meta = {
  title: "Unlock PDF — Remove PDF Password Free | Stirling-PDF",
  description:
    "Remove password protection from PDFs you own. Free and open source. Only use this on documents you have the legal right to unlock.",
  keyword: "unlock pdf",
  toolId: "remove-password",
  category: "security" as const,
  appUrl: "/index.html#/tool/remove-password",
};

export default function Page() {
  return (
    <ToolStub
      title="Unlock PDF"
      description={meta.description}
      keyword={meta.keyword}
      toolId={meta.toolId}
      category={meta.category}
      appUrl={meta.appUrl}
    />
  );
}
