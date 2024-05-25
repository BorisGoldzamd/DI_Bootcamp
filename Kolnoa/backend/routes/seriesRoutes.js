import express from 'express';
import {fetchSeries} from'../controllers/seriesController.js';  // Asegúrate de que la ruta está correcta.

const router = express.Router();
// Definir la ruta para obtener series
router.get('/series', fetchSeries);

export default router;
