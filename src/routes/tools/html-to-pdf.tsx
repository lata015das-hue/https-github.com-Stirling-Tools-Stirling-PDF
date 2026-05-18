import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'HTML to PDF — Save HTML as PDF Free | Stirling-PDF',
  description:
    'Render an HTML file as a PDF document, preserving styles and images. Free, open source, and self-hostable so internal pages never leave your network.',
  keyword: 'html to pdf',
  toolId: 'html-to-pdf',
  category: 'convert',
  appUrl: "/index.html#/tool/html-to-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
