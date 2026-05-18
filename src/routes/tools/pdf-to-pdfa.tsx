import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to PDF/A — Archival Conversion Free | Stirling-PDF',
  description:
    'Convert a PDF to PDF/A for long-term archiving and ISO compliance. Free, open source, and self-hostable for regulated document workflows.',
  keyword: 'pdf to pdf/a',
  toolId: 'pdf-to-pdfa',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-pdfa",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
