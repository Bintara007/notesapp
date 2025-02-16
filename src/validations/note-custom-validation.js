export const customValidationTitleHandler = (event) => {
  // Reset pesan validasi sebelum pengecekan
  event.target.setCustomValidity('');

  // Jika input kosong, tampilkan pesan kesalahan
  if (event.target.validity.valueMissing)
    return event.target.setCustomValidity('Wajib Isi Judul.');

  // Jika input kurang dari batas minimal karakter, tampilkan pesan kesalahan
  if (event.target.validity.tooShort)
    return event.target.setCustomValidity('Minimal judul enam huruf.');

  // Jika input tidak sesuai dengan pola (pattern), tampilkan pesan kesalahan
  if (event.target.validity.patternMismatch) {
    return event.target.setCustomValidity(
      'Judul tidak boleh diawali dengan simbol, \
      mengandung white space atau spasi, dan \
      mengandung karakter spesial seperti dolar ($).',
    );
  }
};

export const customValidationBodyHandler = (event) => {
  // Reset pesan validasi sebelum pengecekan
  event.target.setCustomValidity('');

  // Jika input kosong, tampilkan pesan kesalahan
  if (event.target.validity.valueMissing)
    return event.target.setCustomValidity('Wajib Isi Jurnal.');

  // Jika input kurang dari batas minimal karakter, tampilkan pesan kesalahan
  if (event.target.validity.tooShort)
    return event.target.setCustomValidity(
      'Minimal panjang isi adalah enam huruf.',
    );
};
