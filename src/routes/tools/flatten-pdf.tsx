import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Flatten PDF — Lock Forms and Annotations Free | Stirling-PDF',
  description:
    'Flatten form fields, annotations, and layers so the PDF prints exactly as it appears on screen. Free, open source, and self-hostable.',
  keyword: 'flatten pdf',
  toolId: 'flatten',
  category: 'other',
  appUrl: "/index.html#/tool/flatten",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
