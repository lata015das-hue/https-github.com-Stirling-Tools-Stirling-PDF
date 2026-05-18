import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Remove Pages from PDF — Delete PDF Pages Free | Stirling-PDF',
  description:
    'Delete specific pages from a PDF by number or range. Free, open source, and self-hostable so the file never leaves your network.',
  keyword: 'remove pages from pdf',
  toolId: 'remove-pages',
  category: 'page-operations',
  appUrl: "/index.html#/tool/remove-pages",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
