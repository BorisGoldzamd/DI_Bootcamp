// app.js (continued)
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import the router module for todos
const todoRouter = require('./routes/todos');

// Mount the todo router
app.use('/todos', todoRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
