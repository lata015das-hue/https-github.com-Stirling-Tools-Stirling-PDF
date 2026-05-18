import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: 'Remove PDF Annotations — Strip Comments and Highlights Free | Stirling-PDF',
  description:
    'Strip comments, highlights, and other annotations from a PDF. Free, open source, and self-hostable so review-stage files never leave your infrastructure.',
  keyword: 'remove pdf annotations',
  toolId: 'remove-annotations',
  category: 'other',
  appUrl: "/index.html#/tool/remove-annotations",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
