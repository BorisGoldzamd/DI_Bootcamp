import express from 'express';
import { fetchMovies } from '../controllers/moviesControllers.js';

const router = express.Router();

router.get('/movies', fetchMovies);

export default router;
