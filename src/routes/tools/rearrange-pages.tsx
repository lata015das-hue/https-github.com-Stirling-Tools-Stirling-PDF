import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Rearrange PDF Pages — Reorder a PDF Free | Stirling-PDF',
  description:
    'Reorder pages inside a PDF by typing the new sequence (for example 3,1,2,4). Free, open source, and self-hostable for full document privacy.',
  keyword: 'rearrange pdf pages',
  toolId: 'rearrange-pages',
  category: 'page-operations',
  appUrl: "/index.html#/tool/rearrange-pages",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
