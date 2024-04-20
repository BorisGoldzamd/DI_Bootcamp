const express = require('express');
const router = express.Router();

// Importar el controlador de ejercicios
const exercisesController = require('../controllers/exercisesController');

// Rutas para manejar operaciones relacionadas con ejercicios
router.get('/exercises', exercisesController.getAllExercises);
router.post('/exercises', exercisesController.createExercise);
router.put('/exercises/:exerciseId', exercisesController.updateExercise);
router.delete('/exercises/:exerciseId', exercisesController.deleteExercise);

module.exports = router;
