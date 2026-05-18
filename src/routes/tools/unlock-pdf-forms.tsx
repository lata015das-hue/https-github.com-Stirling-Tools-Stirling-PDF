import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Unlock PDF Forms — Edit Locked Form Fields Free | Stirling-PDF',
  description:
    'Remove the lock on PDF form fields so you can edit them again. Free, open source, and self-hostable so locked-form recovery stays on your infrastructure.',
  keyword: 'unlock pdf forms',
  toolId: 'unlock-pdf-forms',
  category: 'security',
  appUrl: "/index.html#/tool/unlock-pdf-forms",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
