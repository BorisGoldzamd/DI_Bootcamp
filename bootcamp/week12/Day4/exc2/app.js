const express = require('express');
const app = express();
const {pool} = require('pg')
const port = 5000;

const pool = new pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password:'12345',
    port: 5432,
})

app.use(express.json());

app.get('/api/books', async (req, res) => {
    try {
      const queryResult = await pool.query('SELECT * FROM books');
      const books = queryResult.rows;
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/api/books/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
  
    try {
      const queryResult = await pool.query('SELECT * FROM books WHERE id = $1', [bookId]);
      const book = queryResult.rows[0];
  
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    } catch (error) {
      console.error('Error fetching book:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.post('/api/books', async (req, res) => {
    const { title, author, publishedYear } = req.body;
  
    try {
      const queryResult = await pool.query('INSERT INTO books (title, author, publishedYear) VALUES ($1, $2, $3) RETURNING *', [title, author, publishedYear]);
      const newBook = queryResult.rows[0];
      res.status(201).json(newBook);
    } catch (error) {
      console.error('Error creating book:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});

