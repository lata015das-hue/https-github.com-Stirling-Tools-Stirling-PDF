import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Add Page Numbers to PDF — Free Online | Stirling-PDF',
  description:
    'Add page numbers to every page of a PDF in your chosen position and font. Free, open source, and self-hostable so documents stay private.',
  keyword: 'add page numbers to pdf',
  toolId: 'add-page-numbers',
  category: 'page-operations',
  appUrl: "/index.html#/tool/add-page-numbers",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
