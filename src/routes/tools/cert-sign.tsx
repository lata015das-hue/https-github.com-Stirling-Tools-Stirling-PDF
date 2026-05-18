import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Sign PDF with Certificate — Digital Signature Free | Stirling-PDF',
  description:
    'Apply a cryptographic digital signature to a PDF using your X.509 certificate. Free, open source, and self-hostable for regulated signing workflows.',
  keyword: 'sign pdf with certificate',
  toolId: 'cert-sign',
  category: 'security',
  appUrl: "/index.html#/tool/cert-sign",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
