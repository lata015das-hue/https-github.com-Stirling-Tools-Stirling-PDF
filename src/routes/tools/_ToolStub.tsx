/**
 * Shared stub component for /tools/<slug> pages.
 *
 * NOTE: This repo currently ships as plain HTML/JS. These .tsx stubs exist so
 * that the upcoming static-pages migration (and the Kiro `Sitemap Updater`
 * hook, which watches `src/routes/**/*.tsx`) has real files to operate on.
 * Until the framework is wired up, treat these as content scaffolding, not
 * runtime code. They import nothing and have no side effects.
 */

export interface ToolStubProps {
  title: string;
  description: string;
  keyword: string;
  toolId: string;
  category:
    | "page-operations"
    | "convert"
    | "security"
    | "other"
    | "advance";
  /** SPA URL the static page sends users to for the actual tool UI. */
  appUrl: string;
}

export function ToolStub(props: ToolStubProps) {
  const {
    title,
    description,
    keyword,
    toolId,
    category,
    appUrl,
  } = props;

  return (
    <main data-tool-id={toolId} data-category={category}>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={appUrl} className="cta">
          Open the {title} tool
        </a>
      </header>

      <section aria-labelledby="how-it-works">
        <h2 id="how-it-works">How it works</h2>
        <ol>
          <li>Drop your PDF into the tool.</li>
          <li>Run the {keyword} action — no signup, no email required.</li>
          <li>Download the result. Files stay on your own infrastructure when self-hosted.</li>
        </ol>
      </section>

      <section aria-labelledby="why-stirling">
        <h2 id="why-stirling">Why Stirling-PDF</h2>
        <ul>
          <li>Free and open source.</li>
          <li>Self-hostable — your files never leave your network.</li>
          <li>Covers ~56 PDF tools across 5 categories.</li>
        </ul>
      </section>

      {/* TODO(content): Add 3–5 FAQ Q/A here. The "Optimize Article" hook can populate this. */}
      <section aria-labelledby="faq">
        <h2 id="faq">Frequently asked questions</h2>
        <p>FAQ to be authored before publish.</p>
      </section>

      {/* TODO(seo): The "Schema Generator" hook will inject JSON-LD into the
          rendered HTML head. No JSON-LD lives in this stub. */}
    </main>
  );
}

export default ToolStub;
