// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));
  if (bookIndex !== -1) {
    books[bookIndex] = { id: parseInt(id), title, author };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

module.exports = router;
