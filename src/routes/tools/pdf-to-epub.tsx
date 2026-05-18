import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to EPUB — Convert PDF to E-book Free | Stirling-PDF',
  description:
    'Convert a PDF into an EPUB e-book that reflows on phones and e-readers. Free, open source, and self-hostable for private library workflows.',
  keyword: 'pdf to epub',
  toolId: 'pdf-to-epub',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-epub",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
