import movieModel from '../models/movies.js';
import { getMovies } from '../services/moviesService.js';

export const fetchMovies = async (req, res) => {
    try {
        const movies = await getMovies(10);  // Verifica el límite y el nombre de la función
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: "Internal Server Error", detail: error.message });
    }
};

export const getAllMovies = async (req, res) => {
    try {
        const movies = await movieModel.getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movies' });
    }
};

export const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await movieModel.getMovieById(id);
        if (!movie) {
            res.status(404).json({ error: 'Movie not found' });
        } else {
            res.json(movie);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movie by ID' });
    }
};

export const getMovieByName = async (req, res) => {
    const { name } = req.query;
    try {
        const movie = await movieModel.getMovieByName(name);
        if (!movie) {
            res.status(404).json({ error: 'Movie not found' });
        } else {
            res.json(movie);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching movie by name' });
    }
};
