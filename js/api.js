// ==========================
// API Communication Layer
// ==========================

async function processPdf(endpoint, files, params = {}) {
  const formData = new FormData();
  
  if (files.length === 1) {
    formData.append('fileInput', files[0]);
  } else {
    files.forEach(file => {
      formData.append('fileInput', file);
    });
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      formData.append(key, String(value));
    }
  });

  const response = await fetch(BACKEND_URL + endpoint, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    let errorMsg = `HTTP ${response.status}: ${response.statusText}`;
    try {
      const text = await response.text();
      if (text) errorMsg = text;
    } catch(e) {}
    throw new Error(errorMsg);
  }

  return await response.blob();
}

function downloadBlob(blob, filename) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

function getResultFilename(toolId, originalName) {
  const ext = toolId.includes('to-img') ? 'zip'
    : toolId.includes('to-word') ? 'docx'
    : toolId.includes('to-presentation') ? 'pptx'
    : toolId.includes('to-text') ? 'txt'
    : toolId.includes('to-html') ? 'html'
    : toolId.includes('to-xml') ? 'xml'
    : toolId.includes('to-csv') ? 'csv'
    : toolId.includes('to-markdown') ? 'md'
    : toolId.includes('to-epub') ? 'epub'
    : 'pdf';
  
  const baseName = originalName ? originalName.replace(/\.[^/.]+$/, '') : 'result';
  return `${baseName}_${toolId}.${ext}`;
}
