// app.js
const express = require('express');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.json());

// Mount the router module
app.use('/quiz', quizRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
