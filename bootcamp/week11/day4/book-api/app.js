const express = require('express');
const app = express();

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    }
];

const PORT = process.env.port || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

app.get('/api/books',(req,res)=>{
    res.json(books)
});

app.get('/api/books/:bookid', (req, res) => {
    const bookId = parseInt(req.params.bookid);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})