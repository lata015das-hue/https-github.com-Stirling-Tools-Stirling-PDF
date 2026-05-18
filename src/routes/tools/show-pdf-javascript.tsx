import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Show PDF JavaScript — Inspect Embedded Scripts Free | Stirling-PDF',
  description:
    'List every JavaScript snippet embedded inside a PDF for security review. Free, open source, and self-hostable for safer document intake.',
  keyword: 'show pdf javascript',
  toolId: 'show-javascript',
  category: 'other',
  appUrl: "/index.html#/tool/show-javascript",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
