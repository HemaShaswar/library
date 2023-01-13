const addBtn = document.querySelector('#add');
const title =document.querySelector('#title');
const author =document.querySelector('#author');
const pages =document.querySelector('#pages');
const read =document.querySelector('#read');
const shelf = document.querySelector('.books');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newBook();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function newBook() {
    
    let book = new Book(title.value, author.value, pages.value, read.checked);
    console.log(book)
    const addedBook = document.createElement('div');
    addedBook.classList.add('book')
    addedBook.innerText = 
    `Title: ${book.title} 
    Author: ${book.author}
    Pages: ${book.pages}
    Have read: ${book.read}`;
    shelf.appendChild(addedBook);

}

