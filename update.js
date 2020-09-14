import Book from './models/book.js'
import { getAuthors, updateBook, getBook } from './services/bookService.js'

const url = new URL(document.URL);
const id = url.searchParams.get("bookID")

const fetchAuthors = () => {
    getAuthors()
        .then(response => response.json())
        .then(authors => authors.map(author => populateAuthors(author)))
}

const fetchBook = (id) => {
    getBook(id)
        .then(response => response.json())
        .then(book => populateInputFields(book))
        .catch(error => alert('There has been an error'))
}

const populateInputFields = (book) => {
    document.getElementById('name').value = book.name
    document.getElementById('IsbnNumber').value = book.isbnNumber
    document.getElementById('UnitsSold').value = book.unitsSold
    selectAuthor(book.authorId)
}

const selectAuthor = (authorId) => {
    const authorSelect = document.getElementById('authorSelect');

    for (var i, j = 0; i = authorSelect.options[j]; j++) {
        if (i.id == authorId) {
            authorSelect.selectedIndex = j;
            break;
        }
    }

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

        updateBook(JSON.stringify(book),id)
            .then(response => console.log('A new book has been added'))
            .catch(error => console.log('There has been an error'))
    })
}
fetchAuthors()
fetchBook(id)
add()
