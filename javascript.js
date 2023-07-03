let books = [];
const bookAddition = document.getElementById('addBook');
/*

function newBook(){
  let div = document.createElement('div');
  body.appendChild(div);

  let firstP = document.createElement('p');
  div.appendChild(firstP);

  let secondP = document.createElement('p');
  div.appendChild(secondP);

  let removeBtn = document.createElement('button')
  div.appendChild(removeBtn);
}*/


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

  books.push(book);

  titleInput.value = '';
  authorInput.value = '';
  bookAddition.addEventListener('click', ()=>{
    
  })
}
