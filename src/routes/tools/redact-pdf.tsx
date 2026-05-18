import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Redact PDF — Hide Sensitive Information Free | Stirling-PDF',
  description:
    'Automatically redact words or patterns across every page of a PDF. Free, open source, and self-hostable so unredacted source files never leave your network.',
  keyword: 'redact pdf',
  toolId: 'auto-redact',
  category: 'security',
  appUrl: "/index.html#/tool/auto-redact",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
