
let allBooks = [
    { title: "Harry Potter", author: "JK Rowling", image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg", alreadyRead: true },

    { title: "Lord of the Rings", author: "J.R.R. Tolkien", image: "https://cdn.forbes.com.mx/2020/03/El-sen%CC%83or-de-los-anillos-Golum-.jpg", alreadyRead: false }
];
let divListBooks = document.querySelector('.listBooks');
let table = document.createElement('table');
divListBooks.appendChild(table);


let headers = ["Title", "Autor", "Img", "Read"];
let thead = table.createTHead();
let row = thead.insertRow();
headers.forEach(headerText => row.appendChild(document.createElement('th')).textContent = headerText);

let tbody = table.createTBody();
allBooks.forEach(book => {
    let tr = tbody.insertRow();
    tr.insertCell().textContent = `${book.title} escrito por ${book.author}`;
    let imgCell = tr.insertCell();
    imgCell.appendChild(document.createElement('img')).src = book.image;
    imgCell.querySelector('img').width = 100;
    let readCell = tr.insertCell();
    readCell.textContent = book.alreadyRead ? "Yes" : "No";
    tr.style.color = book.alreadyRead ? "red" : "black";
});
