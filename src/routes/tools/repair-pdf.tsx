import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Repair PDF — Fix Corrupted PDFs Free | Stirling-PDF',
  description:
    'Attempt to repair a corrupted or damaged PDF so it opens again. Free, open source, and self-hostable so broken documents stay on your network.',
  keyword: 'repair pdf',
  toolId: 'repair',
  category: 'advance',
  appUrl: "/index.html#/tool/repair",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
