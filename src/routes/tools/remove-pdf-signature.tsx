import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Remove PDF Signatures — Strip Digital Signatures Free | Stirling-PDF',
  description:
    'Strip existing digital signatures from a PDF you own. Free, open source, and self-hostable so signed documents are never sent to third-party servers.',
  keyword: 'remove pdf signature',
  toolId: 'remove-cert-sign',
  category: 'security',
  appUrl: "/index.html#/tool/remove-cert-sign",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
