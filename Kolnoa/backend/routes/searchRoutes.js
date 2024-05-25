import express from 'express';
import {searchOMBDByMovies, searchOMBDBySeries, getStreamingInfo} from '../controllers/searchController.js';

// Importa los controladores necesarios

const router = express.Router();
// Ruta para buscar en OMDB usando términos de búsqueda
router.get('/search/movies/:title', searchOMBDByMovies);  
router.get('/search/series/:title', searchOMBDBySeries);  

// Ruta para obtener información de streaming basada en el título de la película
router.get('/available/:title', getStreamingInfo);  // Uso de '/search/available/:title'

export default router;