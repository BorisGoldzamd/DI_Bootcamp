const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para analizar el cuerpo de las solicitudes entrantes como JSON
app.use(bodyParser.json());

// Importar las rutas
const exercisesRoutes = require('./routes/exercisesRoutes');
const workoutsRoutes = require('./routes/workoutsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userWorkoutsRoutes = require('./routes/userWorkoutsRoutes');

// Aplicar las rutas
app.use(exercisesRoutes);
app.use(workoutsRoutes);
app.use(usersRoutes);
app.use(userWorkoutsRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ha ocurrido un error en el servidor' });
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
