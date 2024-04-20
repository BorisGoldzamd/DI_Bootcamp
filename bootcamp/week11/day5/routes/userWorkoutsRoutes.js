const express = require('express');
const router = express.Router();

// Importar el controlador de relaciones usuario-entrenamiento
const userWorkoutsController = require('../controllers/userWorkoutsController');

// Rutas para manejar operaciones relacionadas con la relación usuario-entrenamiento
router.get('/user-workouts', userWorkoutsController.getAllUserWorkouts);
router.post('/user-workouts', userWorkoutsController.createUserWorkout);
router.put('/user-workouts/:userWorkoutId', userWorkoutsController.updateUserWorkout);
router.delete('/user-workouts/:userWorkoutId', userWorkoutsController.deleteUserWorkout);

module.exports = router;
