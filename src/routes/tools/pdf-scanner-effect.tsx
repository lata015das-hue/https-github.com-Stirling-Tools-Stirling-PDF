import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF Scanner Effect — Make a PDF Look Scanned Free | Stirling-PDF',
  description:
    'Apply scanner-like noise, rotation, and color shift to a PDF. Free, open source, and self-hostable for testing and document realism workflows.',
  keyword: 'pdf scanner effect',
  toolId: 'scanner-effect',
  category: 'advance',
  appUrl: "/index.html#/tool/scanner-effect",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
