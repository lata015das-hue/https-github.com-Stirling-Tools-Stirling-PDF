import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Edit PDF Metadata — Update Title and Author Free | Stirling-PDF',
  description:
    'Edit the title, author, subject, and keyword metadata stored inside a PDF. Free, open source, and self-hostable for confidential document hygiene.',
  keyword: 'edit pdf metadata',
  toolId: 'update-metadata',
  category: 'other',
  appUrl: "/index.html#/tool/update-metadata",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
