// routes/todos.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: todos.length + 1, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const todoToUpdate = todos.find(todo => todo.id === parseInt(id));
    if (!todoToUpdate) {
        return res.status(404).send('Todo not found');
    }
    todoToUpdate.title = title;
    res.json(todoToUpdate);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('Todo not found');
    }
    todos.splice(index, 1);
    res.sendStatus(204);
});

module.exports = router;
