import {getBooks, getAuthor, deleteBook} from './services/bookService.js'

function remove (id) {
    deleteBook(id)
        .then(response => alert(`Deleted book ${id}`))
        .catch(error => alert('There has been an error'))
}

let renderBooks = (book) => {
    const booksContainer = document.querySelector("#books");
    const bookRow = document.createElement("tr");
    bookRow.setAttribute('id', `book${book.id}`)

    bookRow.innerHTML =`<th scope="row">${book.id}</th>
                        <td>${book.name}</td>
                        <td>${book.author.name}</td>
                        <td>${book.isbnNumber}</td>
                        <td>
                            <a href="./views/update.html?bookID=${book.id}" class="btn btn-primary">Modify</a>
                        </td>
                        <td><a href="#" id=${book.id} class="btn btn-primary">Delete
                        </a></td>`;
    booksContainer.appendChild(bookRow);
    const deleteBtn = document.getElementById(book.id);
    deleteBtn.addEventListener('click', remove.bind(this, book.id))
}

getBooks()
    .then(response => response.json())
    .then(booksArray => {
        booksArray.map(book => {
            getAuthor(book.authorId)
                .then(response => response.json())
                .then(author => {
                    book.author = author
                    renderBooks(book)
                })
    })
})