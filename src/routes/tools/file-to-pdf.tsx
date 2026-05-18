import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'File to PDF — Convert Office Files to PDF Free | Stirling-PDF',
  description:
    'Convert Word, Excel, PowerPoint, and other office files to PDF. Free, open source, and self-hostable so source documents stay on your infrastructure.',
  keyword: 'convert file to pdf',
  toolId: 'file-to-pdf',
  category: 'convert',
  appUrl: "/index.html#/tool/file-to-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
