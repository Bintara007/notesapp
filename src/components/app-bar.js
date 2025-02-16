class AppBar extends HTMLElement {
  constructor() {
    super();
    // Menggunakan shadow DOM agar komponen tetap terisolasi dari styling global
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Dipanggil ketika elemen ditambahkan ke DOM
    this.render();
    this.startClock(); // Memulai jam yang diperbarui setiap detik
  }

  startClock() {
    const clockElement = this.shadowRoot.querySelector('#clock');
    setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString(); // Mengambil waktu dalam format lokal
      const formattedDate = now.toLocaleDateString(); // Mengambil tanggal dalam format lokal
      clockElement.textContent = `${formattedDate} ${formattedTime}`;
    }, 1000); // Memperbarui waktu setiap 1 detik
  }

  render() {
    // Menambahkan struktur HTML dan CSS untuk elemen AppBar
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(to right, #AA60C8, #D69ADE);
          color: white;
          font-weight: bold;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        #clock {
          font-size: 1rem;
        }
      </style>
      <header>
        <h1 class="fade-in">Apps Notes</h1>
        <div id="clock"></div>
      </header>
    `;
  }
}

// Mendefinisikan custom element dengan nama 'app-bar'
customElements.define('app-bar', AppBar);
