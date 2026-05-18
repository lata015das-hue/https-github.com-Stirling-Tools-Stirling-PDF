import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Change PDF Permissions — Restrict PDF Access Free | Stirling-PDF',
  description:
    'Set or remove PDF permissions for printing, copying, and editing. Free, open source, and self-hostable so permission changes stay in-house.',
  keyword: 'change pdf permissions',
  toolId: 'change-permissions',
  category: 'security',
  appUrl: "/index.html#/tool/change-permissions",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
