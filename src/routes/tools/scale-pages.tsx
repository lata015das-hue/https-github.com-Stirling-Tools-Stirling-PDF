import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Scale PDF Pages — Resize to A4 or Letter Free | Stirling-PDF',
  description:
    'Scale every page in a PDF to A4, Letter, A3, or Legal. Free, open source, and self-hostable so resized documents stay on your infrastructure.',
  keyword: 'scale pdf pages',
  toolId: 'scale-pages',
  category: 'page-operations',
  appUrl: "/index.html#/tool/scale-pages",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
