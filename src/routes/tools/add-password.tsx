import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Add Password to PDF — Encrypt PDF Free | Stirling-PDF',
  description:
    'Encrypt a PDF with a password so only readers with the key can open it. Free, open source, and self-hostable for confidential file delivery.',
  keyword: 'add password to pdf',
  toolId: 'add-password',
  category: 'security',
  appUrl: "/index.html#/tool/add-password",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
