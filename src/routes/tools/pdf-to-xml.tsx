import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to XML — Convert PDF to XML Free | Stirling-PDF',
  description:
    'Convert a PDF document to XML for downstream processing or content reuse. Free, open source, and self-hostable for confidential pipelines.',
  keyword: 'pdf to xml',
  toolId: 'pdf-to-xml',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-xml",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
