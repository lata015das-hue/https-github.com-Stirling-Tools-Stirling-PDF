import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Add Stamp to PDF — Apply Image Stamp Free | Stirling-PDF',
  description:
    'Stamp every PDF page with an image such as DRAFT, APPROVED, or your logo. Free, open source, and self-hostable for confidential document workflows.',
  keyword: 'add stamp to pdf',
  toolId: 'add-stamp',
  category: 'other',
  appUrl: "/index.html#/tool/add-stamp",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
