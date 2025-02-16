class NoteForm extends HTMLElement {
  constructor() {
    super();
    // Menambahkan struktur HTML untuk form pencatatan
    this.innerHTML = `
      <form id="noteForm" method="post">
        <div class="input-container">
          <label for="noteFormTitle">Judul</label>
          <input id="noteFormTitle" name="title" placeholder="Title" type="text" required
             minlength="6"
             pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
             aria-describedby="titleValidation"
          />
          <small id="titleValidation" class="validation-message" aria-live="polite"></small>
        </div>

        <div class="input-container">
          <label for="noteFormBody">Isi</label>
          <textarea id="noteFormBody" type="text" placeholder="Body" name="body" required
             aria-describedby="bodyValidation"
          ></textarea>
          <small id="bodyValidation" class="validation-message" aria-live="polite"></small>
        </div>

        <button id="noteFormSubmit" class="btn note-button" type="submit">Buat Jurnal</button>
      </form>
    `;
  }
}

// Mendefinisikan custom element dengan nama 'note-form-component'
customElements.define('note-form-component', NoteForm);
