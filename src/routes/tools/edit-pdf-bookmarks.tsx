import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Edit PDF Bookmarks — Manage Table of Contents Free | Stirling-PDF',
  description:
    'Add, rename, and remove PDF bookmarks to control the table of contents. Free, open source, and self-hostable for offline documentation builds.',
  keyword: 'edit pdf bookmarks',
  toolId: 'edit-table-of-contents',
  category: 'other',
  appUrl: "/index.html#/tool/edit-table-of-contents",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
