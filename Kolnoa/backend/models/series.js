const knex = require('knex');
const knexConfig = require('../config/dbConfig');

const db = knex(knexConfig);

module.exports = {
    getAllSeries: async () => {
        try {
            const series = await db.select('*').from('series');
            return series;
        } catch (error) {
            throw error;
        }
    },

    getSeriesById: async (id) => {
        try {
            const series = await db.select('*').from('series').where({ id }).first();
            return series;
        } catch (error) {
            throw error;
        }
    },

    getSeriesByName: async (name) => {
        try {
            const series = await db('series').where('name', 'ilike', `%${name}%`);
            return series;
        } catch (error) {
            throw error;
        }
    }
};
