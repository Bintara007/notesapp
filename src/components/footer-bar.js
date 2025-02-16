class FooterBar extends HTMLElement {
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
    // Menambahkan struktur HTML dan CSS untuk elemen FooterBar
    this.shadowRoot.innerHTML = `
        <style>
          footer {
              background: linear-gradient(to right, #EABDE6, #FFDFEF);
              color: white;
              text-align: center;
              font-weight: bold;
              padding: 1rem;
          }
          p {
            margin: 0;
          }
        </style>
        <footer>
          <p>&copy; 2025 Rizkia Bintara. All rights reserved.</p>
        </footer>
      `;
  }
}

// Mendefinisikan custom element dengan nama 'footer-bar'
customElements.define('footer-bar', FooterBar);
