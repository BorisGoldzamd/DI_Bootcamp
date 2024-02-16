// routes/index.js
const express = require('express');
const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
    res.send('¡Hola from home!');
});

// Ruta para la página de About Us
router.get('/about', (req, res) => {
    res.send('¡hi from about us!');
});

module.exports = router;
