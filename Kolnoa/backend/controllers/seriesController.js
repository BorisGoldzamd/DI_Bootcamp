// seriesController.js
import  { getSeries } from '../services/seriesService.js'; // Verifica que la ruta del servicio sea correcta

export const fetchSeries = async (req, res) => {
    try {
        const series = await getSeries(10); // Asume que quieres los primeros 10 resultados
        res.json(series);
    } catch (error) {
        console.error('Error fetching series:', error);
        res.status(500).json({ message: "Internal Server Error", detail: error.message });
    }
};
