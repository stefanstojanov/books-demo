let getBooks = async () => {
    let response = await fetch("https://5f589b048040620016ab8335.mockapi.io/api/v1/books");
    return response
}

let getBook = async (id) => {
    let response = await fetch(`https://5f589b048040620016ab8335.mockapi.io/api/v1/books/${id}`);
    return response
}

let getAuthors = async () => {
    let response = await fetch("https://5f589b048040620016ab8335.mockapi.io/api/v1/author");
    return response
}

let getAuthor = async (id) => {
    let response = await fetch(`https://5f589b048040620016ab8335.mockapi.io/api/v1/author/${id}`);
    return response
}

let deleteBook = async (id) => {
    let response = await fetch(`https://5f589b048040620016ab8335.mockapi.io/api/v1/books/${id}`, {
        method: 'DELETE',
    })
    return response
}

let insertBook = async (data) => {
    let response = await fetch("https://5f589b048040620016ab8335.mockapi.io/api/v1/books", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
    })
    return response
}

let updateBook = async (data,id) => {
    let response = await fetch("https://5f589b048040620016ab8335.mockapi.io/api/v1/books/" + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
    })
    return response
}

export {getBooks, getBook, getAuthors, getAuthor, deleteBook, insertBook, updateBook}
