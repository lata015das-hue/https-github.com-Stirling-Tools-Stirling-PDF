import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF Info — View PDF Properties and Metadata Free | Stirling-PDF',
  description:
    "Inspect a PDF's page count, size, version, encryption, and metadata. Free, open source, and self-hostable so the file never leaves your network.",
  keyword: 'pdf info',
  toolId: 'get-info-on-pdf',
  category: 'other',
  appUrl: "/index.html#/tool/get-info-on-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
