// app.js
const express = require('express');
const app = express();

// Import the router module
const booksRouter = require('./routes/books');

// Mount the router module
app.use('/books', booksRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
