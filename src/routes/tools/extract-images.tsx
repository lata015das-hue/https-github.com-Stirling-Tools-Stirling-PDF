import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Extract Images from PDF — Pull All Images Free | Stirling-PDF',
  description:
    'Pull every embedded image out of a PDF in its original resolution. Free, open source, and self-hostable so your source PDF stays on your network.',
  keyword: 'extract images from pdf',
  toolId: 'extract-images',
  category: 'other',
  appUrl: "/index.html#/tool/extract-images",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
