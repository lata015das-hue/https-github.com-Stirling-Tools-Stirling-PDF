import ToolStub from "./_ToolStub";

export const meta = {
  title: "Add Password — Free Online | Stirling-PDF",
  description:
    "Encrypt PDF with password protection Free, open source, and self-hostable so your files stay private.",
  keyword: "add password",
  toolId: "add-password",
  category: "security" as const,
  appUrl: "/index.html#/tool/add-password",
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
