import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'PDF to Single Page — Combine to One Long Page Free | Stirling-PDF',
  description:
    'Stitch a multi-page PDF into a single long page for continuous scrolling or screenshots. Free, open source, and self-hostable for full file privacy.',
  keyword: 'pdf to single page',
  toolId: 'pdf-to-single-page',
  category: 'page-operations',
  appUrl: "/index.html#/tool/pdf-to-single-page",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
