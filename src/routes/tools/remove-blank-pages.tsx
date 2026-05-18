import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Remove Blank Pages from PDF — Auto Detect Free | Stirling-PDF',
  description:
    'Detect and delete blank pages from a scanned or generated PDF. Free, open source, and self-hostable so the original scan stays on your network.',
  keyword: 'remove blank pages from pdf',
  toolId: 'remove-blanks',
  category: 'other',
  appUrl: "/index.html#/tool/remove-blanks",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
