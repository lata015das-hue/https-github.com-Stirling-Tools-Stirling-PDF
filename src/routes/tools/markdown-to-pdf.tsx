import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Markdown to PDF — Convert MD to PDF Free | Stirling-PDF',
  description:
    'Render a Markdown file as a PDF with code blocks, lists, and images intact. Free, open source, and self-hostable for offline documentation builds.',
  keyword: 'markdown to pdf',
  toolId: 'markdown-to-pdf',
  category: 'convert',
  appUrl: "/index.html#/tool/markdown-to-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
