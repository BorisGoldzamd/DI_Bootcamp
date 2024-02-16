// app.js
const express = require('express');
const app = express();

// Importar el módulo de enrutamiento
const router = require('./routes');

// Montar el módulo de enrutamiento
app.use('/', router);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
