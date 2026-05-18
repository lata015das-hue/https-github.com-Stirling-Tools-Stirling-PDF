import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to HTML — Convert PDF to Web Page Free | Stirling-PDF',
  description:
    'Convert a PDF into an HTML web page that keeps the document layout. Free, open source, and self-hostable for privacy-sensitive content.',
  keyword: 'pdf to html',
  toolId: 'pdf-to-html',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-html",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
