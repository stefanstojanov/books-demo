import Book from './models/book.js'
import {getAuthors, insertBook} from './services/bookService.js'

const fetchAuthors = () => {
    getAuthors()
        .then(response => response.json())
        .then(authors => authors.map( author => populateAuthors(author)))
}

const populateAuthors = (author) => {
    const options = document.getElementById("authorSelect");
    const option = document.createElement("option");
    option.innerHTML = author.name;
    option.id = author.id;
    options.appendChild(option);
}

const add = () => {
    document.getElementById('bookInsert').addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const isbnNumber = document.getElementById("IsbnNumber").value;
        const unitsSold = document.getElementById("UnitsSold").value;
        const authorSelect = document.getElementById("authorSelect");
        const authorId = authorSelect.options[authorSelect.selectedIndex].id;

        const book = new Book(name, isbnNumber, authorId, unitsSold);

        insertBook(JSON.stringify(book))
            .then(response => console.log('A new book has been added'))
            .catch(error => console.log('There has been an error'))
    })
}


fetchAuthors()
add()
