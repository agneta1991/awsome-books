let books = []

function addBook() {
    const titleInput = document.querySelector('.title');
    const authorInput = document.querySelector('.author');
    const title = titleInput.value;
    const author = authorInput.value;

    if (title === '' || author === '') {
        alert('Please enter both the title and author.');
        return;
    }

    const book = {
        title,
        author,
    };

    this.books.push(book);

    titleInput.value = '';
    authorInput.value = '';
}
addBook()
console.log(books)