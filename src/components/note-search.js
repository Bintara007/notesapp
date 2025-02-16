class NoteSearch extends HTMLElement {
  constructor() {
    super();
    // Menggunakan shadow DOM untuk mengisolasi elemen dari gaya global
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Dipanggil ketika elemen dimasukkan ke dalam DOM
    this.render();
  }

  render() {
    // Mengambil atribut placeholder-text, jika tidak ada gunakan default 'Search'
    const placeholderText = this.getAttribute('placeholder-text') || 'Search';

    this.shadowRoot.innerHTML = `
      <style>
        .search-card {
          background: white;
          border: 1px solid #D69ADE;
          border-radius: 8px;
          padding: 1rem;
        }
        input {
          padding: 0.6rem;
          border: 1px solid #D69ADE;
          border-radius: 4px;
          width: 98%;
          transition: all 0.3s ease-in-out;
        }
        input:focus {
          border-color: #D69ADE;
          border-width: 1.9px;
          outline: none;
        }
      </style>
      <div class="search-bar">
        <div class="search-card">
          <input type="text" id="search" placeholder="${placeholderText}" />
        </div>
      </div>
    `;

    // Menambahkan event listener untuk menangani input pencarian
    this.shadowRoot
      .querySelector('#search')
      .addEventListener('input', (event) => {
        const searchQuery = event.target.value;
        // Membuat dan mengirimkan event custom 'search-note' dengan data pencarian
        const searchEvent = new CustomEvent('search-note', {
          detail: searchQuery,
        });
        this.dispatchEvent(searchEvent);
      });
  }
}

// Mendefinisikan custom element dengan nama 'note-search'
customElements.define('note-search', NoteSearch);
