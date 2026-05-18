import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Overlay PDFs — Stack Two PDFs Free | Stirling-PDF',
  description:
    'Overlay one PDF on top of another to combine signatures, watermarks, or templates. Free, open source, and self-hostable for confidential workflows.',
  keyword: 'overlay pdf',
  toolId: 'overlay-pdf',
  category: 'page-operations',
  appUrl: "/index.html#/tool/overlay-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
