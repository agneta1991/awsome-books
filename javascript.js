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

  function renderBooks() {
    dynamiclist.innerHTML = '';

    const storedBooks = JSON.parse(window.localStorage.getItem('books'));
    if (storedBooks) {
      books = storedBooks;
      books.forEach((book) => {
        const bookEntry = document.createElement('div');
        bookEntry.innerHTML = `
          <p>${authorInput.value = book.author}</p>
          <p>${titleInput.value = book.title}</p>
          <button class="removebtn">Remove</button>
          <span></span>
        `;

        const removeBtn = bookEntry.querySelector('.removebtn');
        removeBtn.addEventListener('click', () => {
          const { parentElement } = removeBtn;
          parentElement.remove();
          // Update the books array after removing
          books = books.filter((b) => b.title !== book.title && b.author !== book.author);
          // Update the local storage with the updated books array
          window.localStorage.setItem('books', JSON.stringify(books));
        });

        dynamiclist.appendChild(bookEntry);
      });
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

  renderBooks();
}

addBook();
