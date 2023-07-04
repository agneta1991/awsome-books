class BookManager {
  static init() {
    const initial = new BookManager();
    return initial;
  }

  constructor() {
    this.books = [];
    this.bookAddition = document.getElementById('addBook');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.dynamicList = document.querySelector('.dynamicList');

    this.addBook = this.addBook.bind(this);
    this.updateButtonState = this.updateButtonState.bind(this);
    this.renderBooks = this.renderBooks.bind(this);

    this.bookAddition.addEventListener('click', this.addBook);
    this.titleInput.addEventListener('input', this.updateButtonState);
    this.authorInput.addEventListener('input', this.updateButtonState);

    this.renderBooks();

    const storedTitle = window.localStorage.getItem('title');
    const storedAuthor = window.localStorage.getItem('author');
    if (storedTitle) {
      this.titleInput.value = storedTitle;
    }
    if (storedAuthor) {
      this.authorInput.value = storedAuthor;
    }

    this.titleInput.addEventListener('input', () => {
      window.localStorage.setItem('title', this.titleInput.value);
    });
    this.authorInput.addEventListener('input', () => {
      window.localStorage.setItem('author', this.authorInput.value);
    });
  }

  updateButtonState() {
    if (!this.titleInput.value || !this.authorInput.value || this.titleInput.value.trim() === '' || this.authorInput.value.trim() === '') {
      this.bookAddition.disabled = true;
    } else {
      this.bookAddition.disabled = false;
    }
  }

  renderBooks() {
    this.dynamicList.innerHTML = '';

    const storedBooks = JSON.parse(window.localStorage.getItem('books'));
    if (storedBooks) {
      this.books = storedBooks;
      this.books.forEach((book) => {
          const bookEntry = document.createElement('div');
              bookEntry.innerHTML = `
          <p>${book.author}</p>
          <p>${book.title}</p>
          <button class="removebtn">Remove</button>
          <span></span>
        `;
          
        const removeBtn = bookEntry.querySelector('.removebtn');
        removeBtn.addEventListener('click', () => {
          const { parentElement } = removeBtn;
          parentElement.remove();
          this.books = this.books.filter((b) => b.title !== book.title && b.author !== book.author);
          window.localStorage.setItem('books', JSON.stringify(this.books));
        });

        this.dynamicList.appendChild(bookEntry);
      });
    }
  }

  addBook() {
    if (!this.bookAddition.disabled) {
      const title = this.titleInput.value.trim();
      const author = this.authorInput.value.trim();

      if (title !== '' && author !== '') {
        const book = {
          title,
          author,
        };
        this.books.push(book);
        window.localStorage.setItem('books', JSON.stringify(this.books));

        this.renderBooks();

        this.titleInput.value = '';
        this.authorInput.value = '';
      }
    }
  }
}
BookManager.init();