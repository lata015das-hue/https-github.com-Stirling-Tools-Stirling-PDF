import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Email to PDF — Convert EML to PDF Free | Stirling-PDF',
  description:
    'Save an email (.eml) including headers and attachments as a PDF. Free, open source, and self-hostable so message contents stay on your infrastructure.',
  keyword: 'eml to pdf',
  toolId: 'eml-to-pdf',
  category: 'convert',
  appUrl: "/index.html#/tool/eml-to-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
