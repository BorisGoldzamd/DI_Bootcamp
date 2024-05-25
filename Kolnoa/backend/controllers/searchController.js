import axios from 'axios';

export const searchOMBDByMovies = async (req, res) => {
    const {search} = req.params;
    const apiKey = process.env.MY_API_KEY_OMBd;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}&type=movie` ;

    try {
        const response = await axios.get(url);
        if (response.data.Response === "True") {
            res.json(response.data.Search);
        } else {
            res.status(404).json({ message: response.data.Error });
        }
    } catch (error) {
        console.error('Error in searchOMDB:', error);
        res.status(500).json({ message: "Server error" });
    }
}
export const searchOMBDBySeries = async (req, res) => {
    const {search} = req.params;
    const apiKey = process.env.MY_API_KEY_OMBd;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}&type=series` ;

    try {
        const response = await axios.get(url);
        if (response.data.Response === "True") {
            res.json(response.data.Search);
        } else {
            res.status(404).json({ message: response.data.Error });
        }
    } catch (error) {
        console.error('Error in searchOMDB:', error);
        res.status(500).json({ message: "Server error" });
    }
}

export const getStreamingInfo = async (req, res) => {
    const { title } = req.params;
    const apiKey = process.env.MY_API_KEY_RapidApi;
    const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?output_language=en&title=${title}&show_type=movie&series_granularity=show&country=US`;
    
    const options = {
        headers: {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": apiKey
        }
    };

    try {
        const response = await axios.get(url, options);
        console.log(response.data)
        const data = response.data;
        if (response.status === 200) {
            res.json(data [0] || {});
        } else {
            res.status(response.status).json({ message: data.message });
        }
    } catch (error) {
        console.error('Error in getStreamingInfo:', error);
        res.status(500).json({ message: "Server error" });
    }
};
