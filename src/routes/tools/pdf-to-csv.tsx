import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to CSV — Extract Tables from PDF Free | Stirling-PDF',
  description:
    'Extract tables from a PDF into a CSV file your spreadsheet can open. Free, open source, and self-hostable so financial data stays on your network.',
  keyword: 'pdf to csv',
  toolId: 'pdf-to-csv',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-csv",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
