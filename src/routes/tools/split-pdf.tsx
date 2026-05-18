import ToolStub, { type ToolStubProps } from "./_ToolStub";

export const meta: ToolStubProps = {
  title: "Split PDF — Extract or Split PDF by Pages Free | Stirling-PDF",
  description:
    "Split a PDF into multiple files by page ranges. Free, open source, and self-hostable so your documents stay private.",
  keyword: "split pdf",
  toolId: "split-pages",
  category: "page-operations",
  appUrl: "/index.html#/tool/split-pages",
};

export default function Page() {
  return <ToolStub {...meta} />;
}
