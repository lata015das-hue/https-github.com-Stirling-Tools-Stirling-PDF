// ==========================
// Stirling PDF Free Tools Data
// ==========================

const BACKEND_URL = 'http://localhost:8080';

const CATEGORIES = [
  { id: 'page-operations', name: 'Page Operations', icon: '📄', color: 'bg-blue-500', colorLight: 'bg-blue-50 text-blue-700 border-blue-200' },
  { id: 'convert', name: 'Convert', icon: '🔄', color: 'bg-green-500', colorLight: 'bg-green-50 text-green-700 border-green-200' },
  { id: 'security', name: 'Security', icon: '🔒', color: 'bg-red-500', colorLight: 'bg-red-50 text-red-700 border-red-200' },
  { id: 'other', name: 'Other Tools', icon: '🔧', color: 'bg-purple-500', colorLight: 'bg-purple-50 text-purple-700 border-purple-200' },
  { id: 'advance', name: 'Advanced', icon: '⚡', color: 'bg-orange-500', colorLight: 'bg-orange-50 text-orange-700 border-orange-200' },
];

const TOOLS = [
  // === PAGE OPERATIONS ===
  { id: 'merge-pdfs', name: 'Merge PDFs', desc: 'Combine multiple PDF files into one document', category: 'page-operations', endpoint: '/api/v1/general/merge-pdfs', multi: true },
  { id: 'split-pages', name: 'Split PDF', desc: 'Split a PDF into multiple files by page ranges', category: 'page-operations', endpoint: '/api/v1/general/split-pages', fields: [{ name: 'pages', label: 'Pages (e.g. 1,3,5-9)', type: 'text' }] },
  { id: 'remove-pages', name: 'Remove Pages', desc: 'Remove specific pages from a PDF', category: 'page-operations', endpoint: '/api/v1/general/remove-pages', fields: [{ name: 'pages', label: 'Pages to remove (e.g. 2,4,6)', type: 'text' }] },
  { id: 'rotate-pdf', name: 'Rotate PDF', desc: 'Rotate all pages in a PDF', category: 'page-operations', endpoint: '/api/v1/general/rotate-pdf', fields: [{ name: 'angle', label: 'Rotation Angle', type: 'select', options: [{v:'90',l:'90°'},{v:'180',l:'180°'},{v:'270',l:'270°'}] }] },
  { id: 'rearrange-pages', name: 'Rearrange Pages', desc: 'Reorder pages in a PDF document', category: 'page-operations', endpoint: '/api/v1/general/rearrange-pages', fields: [{ name: 'pageOrder', label: 'New page order (e.g. 3,1,2,4)', type: 'text' }] },
  { id: 'scale-pages', name: 'Scale Pages', desc: 'Scale PDF pages to different paper sizes', category: 'page-operations', endpoint: '/api/v1/general/scale-pages', fields: [{ name: 'pageSize', label: 'Target Page Size', type: 'select', options: [{v:'A4',l:'A4'},{v:'Letter',l:'Letter'},{v:'A3',l:'A3'},{v:'Legal',l:'Legal'}] }] },
  { id: 'crop', name: 'Crop PDF', desc: 'Crop margins from PDF pages', category: 'page-operations', endpoint: '/api/v1/general/crop' },
  { id: 'add-page-numbers', name: 'Add Page Numbers', desc: 'Add page numbers to your PDF', category: 'page-operations', endpoint: '/api/v1/general/add-page-numbers' },
  { id: 'multi-page-layout', name: 'Multi-Page Layout', desc: 'Put multiple pages on one sheet', category: 'page-operations', endpoint: '/api/v1/general/multi-page-layout', fields: [{ name: 'pagesPerSheet', label: 'Pages per sheet', type: 'select', options: [{v:'2',l:'2'},{v:'4',l:'4'},{v:'9',l:'9'},{v:'16',l:'16'}] }] },
  { id: 'extract-pages', name: 'Extract Pages', desc: 'Extract specific pages into a new PDF', category: 'page-operations', endpoint: '/api/v1/general/extract-pages', fields: [{ name: 'pages', label: 'Pages to extract (e.g. 1-3,7)', type: 'text' }] },
  { id: 'pdf-to-single-page', name: 'PDF to Single Page', desc: 'Convert multi-page PDF to one long page', category: 'page-operations', endpoint: '/api/v1/general/pdf-to-single-page' },
  { id: 'overlay-pdf', name: 'Overlay PDFs', desc: 'Overlay one PDF on top of another', category: 'page-operations', endpoint: '/api/v1/general/overlay-pdf', multi: true },
  { id: 'booklet-imposition', name: 'Booklet Imposition', desc: 'Arrange pages for booklet printing', category: 'page-operations', endpoint: '/api/v1/general/booklet-imposition' },

  // === CONVERT ===
  { id: 'pdf-to-img', name: 'PDF to Image', desc: 'Convert PDF pages to PNG/JPEG images', category: 'convert', endpoint: '/api/v1/convert/pdf/img', fields: [{ name: 'imageFormat', label: 'Image Format', type: 'select', options: [{v:'png',l:'PNG'},{v:'jpeg',l:'JPEG'},{v:'gif',l:'GIF'}] }] },
  { id: 'img-to-pdf', name: 'Image to PDF', desc: 'Convert images to a PDF document', category: 'convert', endpoint: '/api/v1/convert/img/pdf', multi: true },
  { id: 'pdf-to-word', name: 'PDF to Word', desc: 'Convert PDF to DOCX (Word) format', category: 'convert', endpoint: '/api/v1/convert/pdf/word' },
  { id: 'pdf-to-presentation', name: 'PDF to PowerPoint', desc: 'Convert PDF to PPTX presentation', category: 'convert', endpoint: '/api/v1/convert/pdf/presentation' },
  { id: 'pdf-to-text', name: 'PDF to Text', desc: 'Extract all text content from PDF', category: 'convert', endpoint: '/api/v1/convert/pdf/text' },
  { id: 'pdf-to-html', name: 'PDF to HTML', desc: 'Convert PDF to HTML web page', category: 'convert', endpoint: '/api/v1/convert/pdf/html' },
  { id: 'html-to-pdf', name: 'HTML to PDF', desc: 'Convert HTML files to PDF', category: 'convert', endpoint: '/api/v1/convert/html/pdf' },
  { id: 'markdown-to-pdf', name: 'Markdown to PDF', desc: 'Convert Markdown files to PDF', category: 'convert', endpoint: '/api/v1/convert/markdown/pdf' },
  { id: 'file-to-pdf', name: 'File to PDF', desc: 'Convert various file types to PDF', category: 'convert', endpoint: '/api/v1/convert/file/pdf' },
  { id: 'pdf-to-pdfa', name: 'PDF to PDF/A', desc: 'Convert PDF to archival PDF/A format', category: 'convert', endpoint: '/api/v1/convert/pdf/pdfa' },
  { id: 'pdf-to-csv', name: 'PDF to CSV', desc: 'Extract tables from PDF to CSV', category: 'convert', endpoint: '/api/v1/convert/pdf/csv' },
  { id: 'pdf-to-xml', name: 'PDF to XML', desc: 'Convert PDF to XML format', category: 'convert', endpoint: '/api/v1/convert/pdf/xml' },
  { id: 'pdf-to-markdown', name: 'PDF to Markdown', desc: 'Convert PDF to Markdown format', category: 'convert', endpoint: '/api/v1/convert/pdf/markdown' },
  { id: 'eml-to-pdf', name: 'Email to PDF', desc: 'Convert email (.eml) files to PDF', category: 'convert', endpoint: '/api/v1/convert/eml/pdf' },
  { id: 'pdf-to-epub', name: 'PDF to EPUB', desc: 'Convert PDF to EPUB e-book format', category: 'convert', endpoint: '/api/v1/convert/pdf/epub' },

  // === SECURITY ===
  { id: 'add-password', name: 'Add Password', desc: 'Encrypt PDF with password protection', category: 'security', endpoint: '/api/v1/security/add-password', fields: [{ name: 'password', label: 'Password', type: 'password', required: true }] },
  { id: 'remove-password', name: 'Remove Password', desc: 'Remove password protection from PDF', category: 'security', endpoint: '/api/v1/security/remove-password', fields: [{ name: 'password', label: 'Current Password', type: 'password', required: true }] },
  { id: 'change-permissions', name: 'Change Permissions', desc: 'Modify PDF access permissions', category: 'security', endpoint: '/api/v1/security/change-permissions' },
  { id: 'add-watermark', name: 'Add Watermark', desc: 'Add text watermark to all pages', category: 'security', endpoint: '/api/v1/security/add-watermark', fields: [{ name: 'watermarkText', label: 'Watermark Text', type: 'text', required: true }] },
  { id: 'cert-sign', name: 'Certificate Sign', desc: 'Digitally sign PDF with certificate', category: 'security', endpoint: '/api/v1/security/cert-sign' },
  { id: 'remove-cert-sign', name: 'Remove Signatures', desc: 'Remove digital signatures from PDF', category: 'security', endpoint: '/api/v1/security/remove-cert-sign' },
  { id: 'sanitize-pdf', name: 'Sanitize PDF', desc: 'Remove potentially dangerous content', category: 'security', endpoint: '/api/v1/security/sanitize-pdf' },
  { id: 'auto-redact', name: 'Auto Redact', desc: 'Automatically redact sensitive information', category: 'security', endpoint: '/api/v1/security/auto-redact' },
  { id: 'validate-signature', name: 'Validate Signature', desc: 'Verify PDF digital signatures', category: 'security', endpoint: '/api/v1/security/validate-signature' },
  { id: 'timestamp-pdf', name: 'Timestamp PDF', desc: 'Add trusted timestamp to PDF', category: 'security', endpoint: '/api/v1/security/timestamp-pdf' },
  { id: 'unlock-pdf-forms', name: 'Unlock PDF Forms', desc: 'Unlock locked PDF form fields', category: 'security', endpoint: '/api/v1/security/unlock-pdf-forms' },

  // === OTHER TOOLS ===
  { id: 'ocr-pdf', name: 'OCR PDF', desc: 'Make scanned PDFs searchable with text recognition', category: 'other', endpoint: '/api/v1/misc/ocr-pdf', fields: [{ name: 'languages', label: 'Language', type: 'select', options: [{v:'eng',l:'English'},{v:'ara',l:'Arabic'},{v:'fra',l:'French'},{v:'deu',l:'German'},{v:'spa',l:'Spanish'},{v:'chi_sim',l:'Chinese'}] }] },
  { id: 'extract-images', name: 'Extract Images', desc: 'Extract all embedded images from PDF', category: 'other', endpoint: '/api/v1/misc/extract-images' },
  { id: 'flatten', name: 'Flatten PDF', desc: 'Flatten forms, annotations, and layers', category: 'other', endpoint: '/api/v1/misc/flatten' },
  { id: 'update-metadata', name: 'Update Metadata', desc: 'Edit PDF title, author, and metadata', category: 'other', endpoint: '/api/v1/misc/update-metadata', fields: [{ name: 'title', label: 'Title', type: 'text' }, { name: 'author', label: 'Author', type: 'text' }] },
  { id: 'remove-blanks', name: 'Remove Blank Pages', desc: 'Detect and remove blank pages', category: 'other', endpoint: '/api/v1/misc/remove-blanks' },
  { id: 'remove-annotations', name: 'Remove Annotations', desc: 'Strip all annotations and comments', category: 'other', endpoint: '/api/v1/misc/remove-annotations' },
  { id: 'get-info-on-pdf', name: 'PDF Info', desc: 'Get detailed information about a PDF file', category: 'other', endpoint: '/api/v1/security/get-info-on-pdf' },
  { id: 'add-stamp', name: 'Add Stamp', desc: 'Add a stamp/badge to PDF pages', category: 'other', endpoint: '/api/v1/misc/add-stamp' },
  { id: 'add-attachments', name: 'Add Attachments', desc: 'Embed files as attachments in PDF', category: 'other', endpoint: '/api/v1/misc/add-attachments' },
  { id: 'show-javascript', name: 'Show JavaScript', desc: 'Display embedded JavaScript in PDF', category: 'other', endpoint: '/api/v1/misc/show-javascript' },
  { id: 'edit-table-of-contents', name: 'Edit Table of Contents', desc: 'Edit PDF bookmarks and table of contents', category: 'other', endpoint: '/api/v1/misc/edit-table-of-contents' },

  // === ADVANCED ===
  { id: 'compress-pdf', name: 'Compress PDF', desc: 'Reduce PDF file size while preserving quality', category: 'advance', endpoint: '/api/v1/misc/compress-pdf', fields: [{ name: 'optimizeLevel', label: 'Compression Level', type: 'select', options: [{v:'1',l:'Low (best quality)'},{v:'2',l:'Medium'},{v:'3',l:'High (smallest size)'}] }] },
  { id: 'repair', name: 'Repair PDF', desc: 'Attempt to fix corrupted or damaged PDFs', category: 'advance', endpoint: '/api/v1/misc/repair' },
  { id: 'auto-rename', name: 'Auto Rename', desc: 'Rename PDF based on its content', category: 'advance', endpoint: '/api/v1/misc/auto-rename' },
  { id: 'extract-image-scans', name: 'Extract Scans', desc: 'Split individual scanned images from pages', category: 'advance', endpoint: '/api/v1/misc/extract-image-scans' },
  { id: 'scanner-effect', name: 'Scanner Effect', desc: 'Make PDF look like a physical scan', category: 'advance', endpoint: '/api/v1/misc/scanner-effect' },
  { id: 'replace-invert-pdf', name: 'Replace/Invert Colors', desc: 'Invert or replace colors in PDF', category: 'advance', endpoint: '/api/v1/misc/replace-invert-pdf' },
];

function getToolsByCategory(catId) {
  return TOOLS.filter(t => t.category === catId);
}

function getToolById(id) {
  return TOOLS.find(t => t.id === id);
}

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}
