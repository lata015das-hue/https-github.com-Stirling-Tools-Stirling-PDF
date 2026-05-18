import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF Booklet Imposition — Print as Booklet Free | Stirling-PDF',
  description:
    'Reorder PDF pages for booklet printing so the printed sheets fold in the right order. Free, open source, and self-hostable for confidential print jobs.',
  keyword: 'pdf booklet imposition',
  toolId: 'booklet-imposition',
  category: 'page-operations',
  appUrl: "/index.html#/tool/booklet-imposition",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
