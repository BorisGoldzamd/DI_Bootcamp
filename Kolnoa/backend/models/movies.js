const knex = require('knex');
const knexConfig = require('../config/dbConfig');

const db = knex(knexConfig);

module.exports = {
    getAllMovies: async () => {
        try {
            const movies = await db.select('*').from('movies');
            return movies;
        } catch (error) {
            throw error;
        }
    },

    getMovieById: async (id) => {
        try {
            const movie = await db.select('*').from('movies').where({ id }).first();
            return movie;
        } catch (error) {
            throw error;
        }
    },

    searchMovies: async (query) => {
        try {
            const movies = await db('movies').where('name', 'ilike', `%${query}%`);
            return movies;
        } catch (error) {
            throw error;
        }
    }
};
