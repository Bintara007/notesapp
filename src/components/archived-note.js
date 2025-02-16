class ArchivedNote extends HTMLElement {
  // Menentukan atribut yang diamati, tetapi formatnya perlu diperbaiki agar menjadi array
  static observedAttributes = ['data-archived-note-container'];

  constructor() {
    super();
    // Mengambil nilai atribut 'data-archived-note-container' saat elemen dibuat
    this._dataArchivedNoteContainer = this.getAttribute(
      'data-archived-note-container',
    );
  }

  connectedCallback() {
    // Dipanggil ketika elemen dimasukkan ke dalam DOM
    this.render();
  }

  render() {
    // Menampilkan kontainer untuk catatan yang diarsipkan
    this.innerHTML = `
      <div class="container" id="archivedNoteList"></div>
    `;
  }
}

// Mendefinisikan custom element dengan nama 'archived-note-component'
customElements.define('archived-note-component', ArchivedNote);
