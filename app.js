const addBtn = document.querySelector('#add');
const title =document.querySelector('#title');
const author =document.querySelector('#author');
const pages =document.querySelector('#pages');
const read =document.querySelector('#read');
const shelf = document.querySelector('.books');
const showForm = document.querySelector('#form');
const form = document.querySelector('.input');
const close = document.querySelector('.close');
const bg = document.querySelector('.bg');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newBook();
    bg.classList.add('closed')
    form.classList.add('closed')
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function newBook() {
    
    let book = new Book(title.value, author.value, pages.value, read.checked);
    const addedBook = document.createElement('div');
    addedBook.classList.add('book')
    addedBook.innerText = 
    `Title: ${book.title} 
    Author: ${book.author}
    Pages: ${book.pages}`;

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove');
    removeBtn.innerText = 'remove';
    addedBook.appendChild(removeBtn);
    shelf.appendChild(addedBook);

    const readBtn = document.createElement('button')
    readBtn.classList.add('remove');
    if (book.read === false) {
        readBtn.innerText = 'Not Read'
    } else {
        readBtn.innerText = 'Read'
    }
    
    addedBook.appendChild(readBtn);
    
    readBtn.addEventListener('click', (e) => {
        if (e.target.innerText === 'read') {
            e.target.innerText = 'Not Read'
        } else {
            e.target.innerText = 'read'
        }

    })
    
    removeBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    
}

showForm.addEventListener('click', () => {
    form.classList.remove('closed')
    bg.classList.remove('closed')
})

close.addEventListener('click', () => {
    bg.classList.add('closed')
    form.classList.add('closed')

})

bg.addEventListener('click', (e) => {
    if (e.target == bg) {
        bg.classList.add('closed')
        form.classList.add('closed')       
    }
})

