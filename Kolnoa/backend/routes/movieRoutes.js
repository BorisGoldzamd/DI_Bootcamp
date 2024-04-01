const express = require('express');
const router = express.Router();

const movieController = require('../controllers/moviesControllers');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.get('/search', movieController.getMovieByName);

module.exports = router;
