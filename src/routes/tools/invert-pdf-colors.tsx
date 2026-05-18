import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Invert PDF Colors — Replace or Invert Colors Free | Stirling-PDF',
  description:
    'Invert or replace the colors of a PDF, useful for dark-mode reading or print prep. Free, open source, and self-hostable for confidential documents.',
  keyword: 'invert pdf colors',
  toolId: 'replace-invert-pdf',
  category: 'advance',
  appUrl: "/index.html#/tool/replace-invert-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
