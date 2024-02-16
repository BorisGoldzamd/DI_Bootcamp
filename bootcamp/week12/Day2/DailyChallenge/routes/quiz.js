// routes/quiz.js
const express = require('express');
const router = express.Router();
const triviaQuestions = require('../trivia');

let currentQuestionIndex = 0;
let userScore = 0;

// GET /quiz
router.get('/', (req, res) => {
  const question = triviaQuestions[currentQuestionIndex].question;
  res.send(question);
});

// POST /quiz
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    userScore++;
    res.send("Correct! Next question:");
  } else {
    res.send(`Incorrect! The correct answer is ${correctAnswer}. Next question:`);
  }

  currentQuestionIndex++;
});

// GET /quiz/score
router.get('/score', (req, res) => {
  res.send(`Your final score is ${userScore}`);
});

module.exports = router;
