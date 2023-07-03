let books = [];
const bookAddition = document.getElementById('addBook');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const dynamiclist = document.querySelector('.dynamicList');

function addBook() {
  function updateButtonState() {
    if (!titleInput.value || !authorInput.value || titleInput.value.trim() === '' || authorInput.value.trim() === '') {
      bookAddition.disabled = true;
    } else {
      bookAddition.disabled = false;
    }
  }

  bookAddition.addEventListener('click', () => {
    if (!bookAddition.disabled) {
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();

      if (title !== '' && author !== '') {
        const book = {
          title,
          author,
        };
        books.push(book);
        window.localStorage.setItem('books', JSON.stringify(books));
        
        renderBooks();

        titleInput.value = '';
        authorInput.value = '';
      }
    }
  });

  titleInput.addEventListener('input', updateButtonState);
  authorInput.addEventListener('input', updateButtonState);

  // Render books from local storage
  function renderBooks() {
    dynamiclist.innerHTML = '';

    const storedBooks = JSON.parse(window.localStorage.getItem('books'));
    if (storedBooks) {
      books = storedBooks;
      for (const book of books) {
        const bookEntry = document.createElement('div');
        bookEntry.innerHTML = `
          <p>${ titleInput.value = book.author}</p>
          <p>${ authorInput.value = book.title}</p>
          <button class="removebtn">Remove</button>
          <span></span>
        `;

        const removeBtn = bookEntry.querySelector('.removebtn');
        removeBtn.addEventListener('click', () => {
            removeBtn.parentElement.remove();
            localStorage.clear('books')
            books = books.filter((e) => e.title !== book.title && e.author !== book.author);
            window.localStorage.setItem('books', JSON.stringify(books));
        });

        dynamiclist.appendChild(bookEntry);
      }
    }
  }

  renderBooks();
}

addBook();
