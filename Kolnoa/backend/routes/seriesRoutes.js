const express = require('express');
const router = express.Router();

const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.getAllSeries);
router.get('/:id', seriesController.getSeriesById);
router.get('/search', seriesController.getSeriesByName);

module.exports = router;
