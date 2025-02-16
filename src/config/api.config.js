// URL utama untuk API Notes Dicoding
const API_URL = 'https://notes-api.dicoding.dev/v2';

export const API_ENDPOINT = {
  // Endpoint untuk mendapatkan daftar catatan
  notes: `${API_URL}/notes`,

  // Endpoint untuk mendapatkan daftar catatan yang diarsipkan
  archived: `${API_URL}/notes/archived`,

  // Endpoint untuk mendapatkan detail catatan berdasarkan ID
  detail: (id) => `${API_URL}/notes/${id}`,

  // Endpoint untuk mengarsipkan catatan berdasarkan ID
  addArchive: (id) => `${API_URL}/notes/${id}/archive`,

  // Endpoint untuk membatalkan arsip catatan berdasarkan ID
  addUnArchive: (id) => `${API_URL}/notes/${id}/unarchive`,

  // Endpoint untuk menghapus catatan berdasarkan ID
  delete: (id) => `${API_URL}/notes/${id}`,
};
