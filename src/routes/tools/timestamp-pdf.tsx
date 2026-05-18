import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Timestamp PDF — Add Trusted Timestamp Free | Stirling-PDF',
  description:
    'Add a trusted RFC 3161 timestamp to a PDF to prove when it existed. Free, open source, and self-hostable for evidentiary workflows.',
  keyword: 'timestamp pdf',
  toolId: 'timestamp-pdf',
  category: 'security',
  appUrl: "/index.html#/tool/timestamp-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
