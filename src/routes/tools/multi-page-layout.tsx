import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Multi-Page PDF Layout — N-up Pages Free | Stirling-PDF',
  description:
    'Place 2, 4, 9, or 16 PDF pages on a single sheet for printing or review. Free, open source, and self-hostable for privacy-friendly batch work.',
  keyword: 'multi page pdf layout',
  toolId: 'multi-page-layout',
  category: 'page-operations',
  appUrl: "/index.html#/tool/multi-page-layout",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
