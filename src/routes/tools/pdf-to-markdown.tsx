import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to Markdown — Convert PDF to MD Free | Stirling-PDF',
  description:
    'Convert a PDF into a Markdown file you can edit in any text editor. Free, open source, and self-hostable for documentation workflows.',
  keyword: 'pdf to markdown',
  toolId: 'pdf-to-markdown',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-markdown",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
