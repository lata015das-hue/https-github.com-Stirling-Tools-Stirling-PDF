// ==========================
// UI Components
// ==========================

function renderHeader() {
  return `
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div class="bg-primary-600 p-2.5 rounded-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Stirling PDF</h1>
            <p class="text-xs text-gray-500">Free Tools - No License Required</p>
          </div>
        </a>
        <nav class="flex items-center gap-4">
          <a href="#/" class="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm">All Tools</a>
          <a href="${BACKEND_URL}/swagger-ui/index.html" target="_blank" class="text-xs bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors">API Docs</a>
        </nav>
      </div>
    </header>
  `;
}

function renderToolCard(tool) {
  const cat = getCategoryById(tool.category);
  return `
    <a href="#/tool/${tool.id}" class="group block bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div class="h-1.5 ${cat.color}"></div>
      <div class="p-5">
        <div class="flex items-start gap-3">
          <div class="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">${cat.icon}</div>
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">${tool.name}</h3>
            <p class="text-sm text-gray-500 mt-1 line-clamp-2">${tool.desc}</p>
          </div>
        </div>
      </div>
    </a>
  `;
}

function renderFileUpload(multiple = false) {
  return `
    <div id="dropZone" class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-all hover:border-primary-400 hover:bg-gray-50">
      <svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
      </svg>
      <p class="text-lg font-medium text-gray-700">Drag & drop files here</p>
      <p class="text-sm text-gray-500 mt-2">or click to browse ${multiple ? '(multiple files allowed)' : ''}</p>
      <input type="file" id="fileInput" class="hidden" ${multiple ? 'multiple' : ''} accept=".pdf,.png,.jpg,.jpeg,.gif,.tiff,.bmp,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.html,.md,.eml">
    </div>
    <div id="fileList" class="space-y-2 mt-4"></div>
  `;
}

function renderFooter() {
  return `
    <footer class="text-center py-6 text-gray-500 text-sm border-t bg-white mt-12">
      <p>Stirling PDF Free Tools - Open Source PDF Processing</p>
      <p class="mt-1">Backend: <code class="bg-gray-100 px-2 py-0.5 rounded text-xs">${BACKEND_URL}</code></p>
      <p class="mt-2 text-xs text-gray-400">${TOOLS.length} free tools available | Powered by <a href="https://github.com/Stirling-Tools/Stirling-PDF" target="_blank" class="text-primary-500 hover:underline">Stirling-PDF</a></p>
    </footer>
  `;
}
