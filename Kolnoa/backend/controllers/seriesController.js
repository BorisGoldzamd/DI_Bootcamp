const seriesModel = require('../models/series');

module.exports = {
    getAllSeries: async (req, res) => {
        try {
            const series = await seriesModel.getAllSeries();
            res.json(series);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching series' });
        }
    },

    getSeriesById: async (req, res) => {
        const { id } = req.params;
        try {
            const series = await seriesModel.getSeriesById(id);
            if (!series) {
                res.status(404).json({ error: 'Series not found' });
            } else {
                res.json(series);
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching series by ID' });
        }
    },

    getSeriesByName: async (req, res) => {
        const { name } = req.query;
        try {
            const series = await seriesModel.getSeriesByName(name);
            if (!series) {
                res.status(404).json({ error: 'Series not found' });
            } else {
                res.json(series);
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching series by name' });
        }
    }
};
