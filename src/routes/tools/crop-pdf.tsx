import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Crop PDF — Trim Margins from PDF Pages Free | Stirling-PDF',
  description:
    'Crop margins from PDF pages to remove whitespace or scanner edges. Free, open source, and self-hostable so the source PDF never leaves your network.',
  keyword: 'crop pdf',
  toolId: 'crop',
  category: 'page-operations',
  appUrl: "/index.html#/tool/crop",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
