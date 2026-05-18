import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Extract Pages from PDF — Pull Specific Pages Free | Stirling-PDF',
  description:
    'Extract a single page or a range of pages from a PDF into a new file. Free, open source, and self-hostable so source documents stay on your network.',
  keyword: 'extract pages from pdf',
  toolId: 'extract-pages',
  category: 'page-operations',
  appUrl: "/index.html#/tool/extract-pages",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
