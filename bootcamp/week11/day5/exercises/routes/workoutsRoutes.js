const express = require('express');
const router = express.Router();

// Importar el controlador de entrenamientos
const workoutsController = require('../controllers/workoutsController');

// Rutas para manejar operaciones relacionadas con entrenamientos
router.get('/workouts', workoutsController.getAllWorkouts);
router.post('/workouts', workoutsController.createWorkout);
router.put('/workouts/:workoutId', workoutsController.updateWorkout);
router.delete('/workouts/:workoutId', workoutsController.deleteWorkout);

module.exports = router;
