let books = [];
const bookAddition = document.getElementById('addBook');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const dynamiclist = document.querySelector(".dynamicList");

function addBook() {
  function updateButtonState() {
    if (!titleInput.value || !authorInput.value || titleInput.value.trim() === '' || authorInput.value.trim() === '') {
      bookAddition.disabled = true;
    } else {
      bookAddition.disabled = false;
    }
  }

  bookAddition.addEventListener('click', function(){
    if (!bookAddition.disabled) {
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();

      if (title !== '' && author !== '') {
        const book = {
          title: title,
          author: author
        };
        books.push(book);

        const bookEntry = document.createElement("div");
        bookEntry.innerHTML = `
          <p>${book.author}</p>
          <p>${book.title}</p>
          <button class="removebtn">Remove</button>
          <span></span>
        `;

        const removeBtn = bookEntry.querySelector('.removebtn');
        removeBtn.addEventListener("click", () => {
          const parentElement = removeBtn.parentElement;
          parentElement.remove();
        });

        dynamiclist.appendChild(bookEntry);

        titleInput.value = "";
        authorInput.value = "";
      }
    }
  });

  titleInput.addEventListener('input', updateButtonState);
  authorInput.addEventListener('input', updateButtonState);

  updateButtonState();
}

addBook();
