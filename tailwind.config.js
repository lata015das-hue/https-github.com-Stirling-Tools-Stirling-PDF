/** @type {import('tailwindcss').Config} */
module.exports = {
  // What the JIT scans for class strings. Tailwind matches ANY sequence of
  // valid class characters in these files, so:
  //   - Literal class strings in tools-data.js (e.g. 'bg-blue-500') ARE picked up.
  //   - Dynamic interpolations like `class="${cat.color}"` are fine BECAUSE
  //     `cat.color` is a complete literal class string defined elsewhere
  //     in `js/tools-data.js`. Partial-class concatenation (e.g.
  //     `bg-${color}-500`) is NOT used and must not be introduced — see
  //     `.kiro/steering/performance-rules.md`.
  content: [
    "./index.html",
    "./preview.html",
    "./js/**/*.js",
    "./src/**/*.{tsx,ts,jsx,js,html}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        // Mirrors the inline `tailwind.config` block that lived in `index.html`
        // when this project ran on the Tailwind CDN. Kept here verbatim.
        primary: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
};
