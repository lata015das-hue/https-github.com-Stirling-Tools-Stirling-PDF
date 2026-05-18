import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to PowerPoint — Convert PDF to PPTX Free | Stirling-PDF',
  description:
    'Convert a PDF into an editable PowerPoint (PPTX) presentation. Free, no signup, and works offline when you self-host Stirling-PDF.',
  keyword: 'pdf to powerpoint',
  toolId: 'pdf-to-presentation',
  category: 'convert',
  appUrl: "/index.html#/tool/pdf-to-presentation",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
