import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Auto Rename PDF — Rename by Content Free | Stirling-PDF',
  description:
    "Detect a PDF's title from its content and rename the file automatically. Free, open source, and self-hostable for batch document organization.",
  keyword: 'auto rename pdf',
  toolId: 'auto-rename',
  category: 'advance',
  appUrl: "/index.html#/tool/auto-rename",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
