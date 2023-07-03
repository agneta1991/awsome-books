let books = [];
const bookAddition = document.getElementById('addBook');
bookAddition.addEventListener('click', bookFunction);

/*titleInput.value = '';
authorInput.value = '';
*/


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

  if (title === '' || author === '') {
    alert('Please enter both the title and author.');
    return;
  }

  const dynamicDiv = document.getElementById('dynamicList')
  let div = document.createElement('div');
  dynamicDiv.appendChild(div);

  let firstP = document.createElement('p');
  firstP.innerHTML = `${book.title}`
  div.appendChild(firstP);

  let secondP = document.createElement('p');
  secondP.innerHTML = `${book.author}`
  div.appendChild(secondP);

  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = 'Remove';
  removeBtn.class='removeButton'
  div.appendChild(removeBtn);

  let span = document.createElement('span');
  div.appendChild(span);
}

const removeB = document.querySelectorAll('removeButton');
removeB.forEach((individualRemoveBtn) => {
  individualRemoveBtn.addEventListener('click', removeFunction)});

function removeFunction(){

  /*
  
  to do in a different way

  books.filter(deletFunction);
  function deletFunction(){
    books.pop();
  }
  */
}

//////////LOCAL STORAGE///////////
//done by previous example, something not working yet////

const collection = document.getElementById('mainDiv');
let collectedInputData;
collection.addEventListener('add', (event) => {
  const inputData = new FormData(event.target);
  collectedInputData = {};
  inputData.forEach((value, key) => {
    collectedInputData[key] = value;
  });
  const divData = JSON.stringify(collectedInputData);
  localStorage.setItem('Collected-Data', divData);
});

let savedDate = JSON.parse(localStorage.getItem('Collected-Data'));


/*window.onload = () => {
  document.getElementById('email').value = savedDate.email;
  document.getElementById('text').value = savedDate.name;
  document.getElementById('textaera').value = savedDate.message;
};*/