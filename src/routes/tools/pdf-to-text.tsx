import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to Text — Extract Plain Text from PDF Free | Stirling-PDF',
  description:
    'Pull every line of text out of a PDF into a plain .txt file. Free, open source, and self-hostable so document contents never leave your network.',
  keyword: 'pdf to text',
  toolId: 'pdf-to-text',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-text",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
