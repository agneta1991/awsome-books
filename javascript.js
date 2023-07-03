let books = [];
const bookAddition = document.getElementById('addBook');
bookAddition.addEventListener('click', bookFunction);

/*titleInput.value = '';
authorInput.value = '';

if (title === '' || author === '') {
  alert('Please enter both the title and author.');
  return;
}*/


function bookFunction() {

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  const book = {
    title,
    author,
  };

  books.push(book);

  const dynamicDiv = document.getElementById('dynamicList')
  let div = document.createElement('div');
  dynamicDiv.appendChild(div);

  let firstP = document.createElement('p');
  firstP.innerHTML = `${book.title}`
  div.appendChild(firstP);

  let secondP = document.createElement('p');
  secondP.innerHTML = `${book.author}`
  div.appendChild(secondP);

  let removeBtn = document.createElement('button')
  div.appendChild(removeBtn);
}