const {_getAllProducts, _getProductById} = require('../models/products.js');

const getAllProducts = async (req, res) => {
    try {
        const data = await _getAllProducts();
        res.json(data); // Utiliza res en lugar de req para enviar la respuesta JSON
    } catch(error) {
        console.log(error);
        res.status(404).json({ mes: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await _getProductById(id);
        res.json(data); 
    } catch(error) {
        console.log(error);
        res.status(404).json({ mes: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
