import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Sanitize PDF — Remove Active Content Free | Stirling-PDF',
  description:
    'Remove embedded JavaScript, forms, and actions that can run inside a PDF reader. Free, open source, and self-hostable for safer document intake.',
  keyword: 'sanitize pdf',
  toolId: 'sanitize-pdf',
  category: 'security',
  appUrl: "/index.html#/tool/sanitize-pdf",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
