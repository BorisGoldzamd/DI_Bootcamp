const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
});

// Middleware to parse JSON in requests
app.use(express.json());

// Route to get all posts
app.get('/posts', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get a specific post by its ID
app.get('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new post
app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update an existing post by its ID
app.put('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const { rows } = await pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, postId]);
    if (rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete an existing post by its ID
app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [postId]);
    if (rowCount === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
