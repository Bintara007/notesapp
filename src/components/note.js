class Note extends HTMLElement {
  // Menentukan atribut yang dipantau, harus dalam format array
  static observedAttributes = ['data-note-container'];

  constructor() {
    super();
    // Mengambil nilai atribut 'data-note-container' saat elemen dibuat
    this._dataNoteContainer = this.getAttribute('data-note-container');
  }

  connectedCallback() {
    // Dipanggil ketika elemen dimasukkan ke dalam DOM
    this.render();
  }

  render() {
    // Menampilkan kontainer untuk daftar catatan
    this.innerHTML = `
      <div class="container" id="noteList"></div>
    `;
  }
}

// Mendefinisikan custom element dengan nama 'note-component'
customElements.define('note-component', Note);
