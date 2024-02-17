const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../config/db');

// POST /register: Allow users to register
router.post('/register', async (req, res) => {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await pool.query('BEGIN');
        await pool.query('INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id', [email, username, first_name, last_name]);
        await pool.query('INSERT INTO hashpwd (username, password) VALUES ($1, $2)', [username, hashedPassword]);
        await pool.query('COMMIT');
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        await pool.query('ROLLBACK');
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST /login: Allow users to login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query('SELECT password FROM hashpwd WHERE username = $1', [username]);
        const hashedPassword = result.rows[0].password;
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
        if (isPasswordMatch) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /users: Retrieve a list of all registered users
router.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET /users/:id: Retrieve a specific user by ID
router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT /users/:id: Update a user’s information by ID
router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { email, username, first_name, last_name } = req.body;

    try {
        const result = await pool.query('UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *', [email, username, first_name, last_name, userId]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

