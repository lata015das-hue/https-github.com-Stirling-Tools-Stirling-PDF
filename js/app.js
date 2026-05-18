// ==========================
// Main Application Logic
// ==========================

const app = document.getElementById('app');

// ---- Page Renderers ----

function renderHomePage() {
  const searchSection = `
    <div class="text-center space-y-4 py-8">
      <h2 class="text-3xl font-bold text-gray-900">Free PDF Tools</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        All the PDF tools you need - merge, split, convert, compress, and more.
        <br><span class="text-primary-600 font-medium">No license required. 100% Free.</span>
      </p>
      <div class="max-w-md mx-auto relative">
        <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input type="text" id="searchInput" placeholder="Search tools..." class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
      </div>
    </div>
  `;

  const categoryCards = `
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
      ${CATEGORIES.map(cat => {
        const count = getToolsByCategory(cat.id).length;
        return `
          <a href="#/category/${cat.id}" class="bg-white rounded-xl border border-gray-200 p-5 text-center hover:shadow-lg hover:border-primary-300 transition-all group">
            <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">${cat.icon}</div>
            <h3 class="font-semibold text-gray-900 text-sm">${cat.name}</h3>
            <p class="text-xs text-gray-500 mt-1">${count} tools</p>
          </a>
        `;
      }).join('')}
    </div>
  `;

  const allToolsByCategory = CATEGORIES.map(cat => {
    const catTools = getToolsByCategory(cat.id);
    return `
      <div class="space-y-4 mb-10">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
            <span class="${cat.color} w-3 h-3 rounded-full inline-block"></span>
            ${cat.name}
          </h3>
          <a href="#/category/${cat.id}" class="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all (${catTools.length}) &rarr;
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${catTools.slice(0, 6).map(renderToolCard).join('')}
        </div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    ${renderHeader()}
    <main class="max-w-7xl mx-auto px-4 py-6">
      ${searchSection}
      <div id="searchResults" class="hidden"></div>
      <div id="mainContent">
        ${categoryCards}
        ${allToolsByCategory}
      </div>
    </main>
    ${renderFooter()}
  `;

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const mainContent = document.getElementById('mainContent');

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      searchResults.classList.add('hidden');
      mainContent.classList.remove('hidden');
      return;
    }
    mainContent.classList.add('hidden');
    searchResults.classList.remove('hidden');

    const filtered = TOOLS.filter(t =>
      t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.id.includes(q)
    );

    searchResults.innerHTML = `
      <h3 class="text-lg font-semibold text-gray-700 mb-4">Results (${filtered.length})</h3>
      ${filtered.length === 0 
        ? '<p class="text-gray-500 text-center py-8">No tools found</p>'
        : `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${filtered.map(renderToolCard).join('')}</div>`
      }
    `;
  });
}

function renderCategoryPage(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) { renderHomePage(); return; }
  const catTools = getToolsByCategory(categoryId);

  app.innerHTML = `
    ${renderHeader()}
    <main class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex items-center gap-4 mb-8">
        <a href="#/" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </a>
        <div>
          <h2 class="text-2xl font-bold text-gray-900">${cat.icon} ${cat.name}</h2>
          <p class="text-gray-500">${catTools.length} free tools available</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${catTools.map(renderToolCard).join('')}
      </div>
    </main>
    ${renderFooter()}
  `;
}

function renderToolPage(toolId) {
  const tool = getToolById(toolId);
  if (!tool) { renderHomePage(); return; }
  const cat = getCategoryById(tool.category);

  const fieldsHtml = (tool.fields || []).map(field => {
    if (field.type === 'select') {
      return `
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">${field.label} ${field.required ? '<span class="text-red-500">*</span>' : ''}</label>
          <select id="field_${field.name}" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
            <option value="">Select...</option>
            ${field.options.map(o => `<option value="${o.v}">${o.l}</option>`).join('')}
          </select>
        </div>
      `;
    }
    return `
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">${field.label} ${field.required ? '<span class="text-red-500">*</span>' : ''}</label>
        <input type="${field.type || 'text'}" id="field_${field.name}" placeholder="${field.placeholder || ''}" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
      </div>
    `;
  }).join('');

  app.innerHTML = `
    ${renderHeader()}
    <main class="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <!-- Tool Header -->
      <div class="flex items-center gap-4">
        <a href="#/category/${tool.category}" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </a>
        <div>
          <h2 class="text-2xl font-bold text-gray-900">${tool.name}</h2>
          <p class="text-gray-500">${tool.desc}</p>
        </div>
        <span class="ml-auto text-sm px-3 py-1 rounded-full border ${cat.colorLight}">${cat.name}</span>
      </div>

      <!-- Processing Card -->
      <div class="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        <!-- File Upload -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Upload File(s)</label>
          ${renderFileUpload(tool.multi)}
        </div>

        ${fieldsHtml ? `<div class="space-y-4 pt-4 border-t"><h3 class="text-sm font-semibold text-gray-700">Options</h3>${fieldsHtml}</div>` : ''}

        <!-- Actions -->
        <div class="flex gap-3 pt-4 border-t">
          <button id="processBtn" class="flex-1 bg-primary-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors" disabled>
            Process PDF
          </button>
          <button id="resetBtn" class="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors hidden">
            Reset
          </button>
        </div>

        <!-- Status -->
        <div id="statusArea"></div>
      </div>

      <!-- API Info -->
      <div class="bg-gray-100 rounded-xl p-4">
        <p class="text-xs text-gray-500 font-mono">
          API Endpoint: <span class="text-gray-700">POST ${tool.endpoint}</span>
        </p>
      </div>
    </main>
    ${renderFooter()}
  `;

  // Setup file upload interaction
  setupToolPageInteraction(tool);
}

// ---- Tool Page Interaction ----

function setupToolPageInteraction(tool) {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');
  const processBtn = document.getElementById('processBtn');
  const resetBtn = document.getElementById('resetBtn');
  const statusArea = document.getElementById('statusArea');

  let selectedFiles = [];

  // Click to open file picker
  dropZone.addEventListener('click', () => fileInput.click());

  // Drag events
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-primary-500', 'bg-primary-50');
    dropZone.classList.remove('border-gray-300');
  });
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-primary-500', 'bg-primary-50');
    dropZone.classList.add('border-gray-300');
  });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-primary-500', 'bg-primary-50');
    dropZone.classList.add('border-gray-300');
    addFiles(Array.from(e.dataTransfer.files));
  });

  // File input change
  fileInput.addEventListener('change', (e) => {
    addFiles(Array.from(e.target.files));
  });

  function addFiles(newFiles) {
    if (tool.multi) {
      selectedFiles = [...selectedFiles, ...newFiles];
    } else {
      selectedFiles = newFiles.slice(0, 1);
    }
    updateFileList();
  }

  function updateFileList() {
    processBtn.disabled = selectedFiles.length === 0;
    if (selectedFiles.length === 0) {
      fileList.innerHTML = '';
      return;
    }
    fileList.innerHTML = `
      <h4 class="text-sm font-medium text-gray-700">Selected Files (${selectedFiles.length})</h4>
      ${selectedFiles.map((f, i) => `
        <div class="flex items-center gap-3 bg-white border rounded-lg p-3">
          <svg class="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-700 truncate">${f.name}</p>
            <p class="text-xs text-gray-500">${(f.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          <button onclick="removeFile(${i})" class="p-1 hover:bg-red-50 rounded-full transition-colors">
            <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      `).join('')}
    `;

    // Expose removeFile globally for inline onclick
    window.removeFile = (idx) => {
      selectedFiles.splice(idx, 1);
      updateFileList();
    };
  }

  // Process button
  processBtn.addEventListener('click', async () => {
    if (selectedFiles.length === 0) return;

    // Gather params
    const params = {};
    (tool.fields || []).forEach(field => {
      const el = document.getElementById(`field_${field.name}`);
      if (el && el.value) params[field.name] = el.value;
    });

    // Show loading
    processBtn.disabled = true;
    processBtn.innerHTML = `
      <svg class="w-5 h-5 animate-spin inline mr-2" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
      Processing...
    `;
    resetBtn.classList.remove('hidden');
    statusArea.innerHTML = '';

    try {
      const blob = await processPdf(tool.endpoint, selectedFiles, params);
      const filename = getResultFilename(tool.id, selectedFiles[0]?.name);
      
      statusArea.innerHTML = `
        <div class="bg-green-50 border border-green-200 rounded-xl p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p class="font-medium text-green-800">Processing Complete!</p>
              <p class="text-sm text-green-600">File size: ${(blob.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button id="downloadBtn" class="bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download
          </button>
        </div>
      `;

      document.getElementById('downloadBtn').addEventListener('click', () => {
        downloadBlob(blob, filename);
      });

      processBtn.innerHTML = 'Process PDF';
      processBtn.disabled = false;

    } catch (err) {
      statusArea.innerHTML = `
        <div class="bg-red-50 border border-red-200 rounded-xl p-5">
          <div class="flex items-start gap-3">
            <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p class="font-medium text-red-800">Processing Failed</p>
              <p class="text-sm text-red-600 mt-1">${err.message}</p>
              <p class="text-xs text-red-500 mt-2">Make sure Stirling-PDF backend is running at <code>${BACKEND_URL}</code></p>
            </div>
          </div>
        </div>
      `;
      processBtn.innerHTML = 'Process PDF';
      processBtn.disabled = false;
    }
  });

  // Reset button
  resetBtn.addEventListener('click', () => {
    selectedFiles = [];
    updateFileList();
    statusArea.innerHTML = '';
    resetBtn.classList.add('hidden');
    processBtn.innerHTML = 'Process PDF';
    processBtn.disabled = true;
    (tool.fields || []).forEach(field => {
      const el = document.getElementById(`field_${field.name}`);
      if (el) el.value = '';
    });
  });
}

// ---- Router Setup ----

router
  .add('/', renderHomePage)
  .add('/category/:id', renderCategoryPage)
  .add('/tool/:id', renderToolPage)
  .start();
