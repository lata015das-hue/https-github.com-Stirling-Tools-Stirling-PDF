import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Validate PDF Signature — Verify Digital Signatures Free | Stirling-PDF',
  description:
    'Verify the digital signatures on a PDF and report which certificates signed it. Free, open source, and self-hostable for compliance checks.',
  keyword: 'validate pdf signature',
  toolId: 'validate-signature',
  category: 'security',
  appUrl: "/index.html#/tool/validate-signature",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
