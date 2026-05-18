import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Add Attachments to PDF — Embed Files Free | Stirling-PDF',
  description:
    'Embed source files inside a PDF so the recipient can extract them later. Free, open source, and self-hostable for self-contained document delivery.',
  keyword: 'add attachments to pdf',
  toolId: 'add-attachments',
  category: 'other',
  appUrl: "/index.html#/tool/add-attachments",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
