const movieModel = require('../models/movies');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await movieModel.getAllMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching movies' });
        }
    },

    getMovieById: async (req, res) => {
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
    },

    getMovieByName: async (req, res) => {
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
    }
};