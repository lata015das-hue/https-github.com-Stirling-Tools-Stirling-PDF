# Stirling PDF - Free Frontend

A lightweight, standalone frontend for Stirling-PDF that provides access to **all free features** without requiring any license.

## Features Included (55+ Free Tools)

### Page Operations (13 tools)
- Merge PDFs, Split, Remove Pages, Rotate, Rearrange
- Scale Pages, Crop, Add Page Numbers, Multi-Page Layout
- Extract Pages, PDF to Single Page, Overlay PDFs, Booklet Imposition

### Convert (15 tools)
- PDF to Image/Word/PowerPoint/Text/HTML/XML/CSV/Markdown/EPUB
- Image/HTML/Markdown/File/Email to PDF
- PDF to PDF/A

### Security (11 tools)
- Add/Remove Password, Change Permissions
- Watermark, Certificate Sign, Remove Signatures
- Sanitize, Auto Redact, Validate Signature
- Timestamp PDF, Unlock PDF Forms

### Other Tools (11 tools)
- OCR, Extract Images, Flatten, Update Metadata
- Remove Blanks/Annotations, PDF Info
- Add Stamp/Attachments, Show JavaScript
- Edit Table of Contents

### Advanced (6 tools)
- Compress PDF, Repair, Auto Rename
- Extract Scans, Scanner Effect, Replace/Invert Colors

## How to Use

### Prerequisites
1. Run the **Stirling-PDF backend** on `http://localhost:8080`:
   ```bash
   cd Stirling-PDF
   ./gradlew :stirling-pdf:bootRun
   ```

### Run the Frontend

This project has **one** build step: compiling Tailwind CSS to a static
file. Do this once after cloning, and again whenever you add new utility
classes to JS template strings:

```bash
npm install
npm run build:css      # one-shot, minified -> dist/tailwind.css
# or
npm run watch:css      # rebuilds while you edit
```

After the build, just open `index.html` in your browser, or serve with any
static file server:

```bash
# Option 1: Direct open
open index.html

# Option 2: Python server
python3 -m http.server 3000

# Option 3: Node.js
npx serve .
```

Then visit `http://localhost:3000`.

If you forget to build, the page will show a friendly "stylesheet not built"
message instead of an unstyled wall of HTML — see the inline guard in
`index.html`.

### Backend Configuration
The frontend connects to `http://localhost:8080` by default.
To change this, edit the `BACKEND_URL` variable in `js/tools-data.js`.

## Architecture

```
stirling-pdf-free-frontend/
├── index.html              # Entry point (loads dist/tailwind.css + js/*)
├── package.json            # Single dev dep: tailwindcss
├── tailwind.config.js      # Theme + content globs (what Tailwind scans)
├── src/
│   └── styles/
│       └── tailwind.css    # @tailwind base/components/utilities + line-clamp-2
├── dist/
│   └── tailwind.css        # Built output (gitignored; produced by `npm run build:css`)
├── js/
│   ├── tools-data.js       # All free tool definitions & endpoints
│   ├── api.js              # Backend communication layer
│   ├── router.js           # Simple hash-based SPA router
│   ├── components.js       # Reusable UI components
│   └── app.js              # Main app logic & page renderers
└── README.md
```

## Tech Stack
- **One build step** - Tailwind CSS CLI (was: CDN runtime; see `reports/perf-audit.md` R-1)
- **Vanilla JavaScript** - No framework dependencies
- **Hash-based routing** - SPA without a bundler

## API Connection
All API calls go through the Stirling-PDF REST API:
- Base: `http://localhost:8080`
- Endpoints: `/api/v1/{group}/{tool-name}`
- Method: POST with multipart/form-data
- Authentication: None required for free tier

## What's NOT Included (Licensed Features)
The following require a Stirling-PDF Server or Enterprise license:
- Team management
- SSO/SAML authentication  
- Audit logging
- Usage analytics
- AI Engine features
- User management
- Custom branding
