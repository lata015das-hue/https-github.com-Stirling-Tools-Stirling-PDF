import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Extract Scans from PDF — Split Scanned Images Free | Stirling-PDF',
  description:
    'Split a scanned PDF into one image per scanned page in its native resolution. Free, open source, and self-hostable for confidential archives.',
  keyword: 'extract scans from pdf',
  toolId: 'extract-image-scans',
  category: 'advance',
  appUrl: "/index.html#/tool/extract-image-scans",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
