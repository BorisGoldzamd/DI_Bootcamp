// Importar el modelo de ejercicios
const Exercise = require('../models/exercisesModel');

// Controlador para manejar las operaciones CRUD en la entidad de ejercicios
const exercisesController = {
  // Obtener todos los ejercicios
  getAllExercises: async (req, res) => {
    try {
      const exercises = await Exercise.getAll(); // Método getAll() del modelo
      res.json(exercises);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Crear un nuevo ejercicio
  createExercise: async (req, res) => {
    const { name, description, muscle_group } = req.body;
    try {
      const newExercise = await Exercise.create({ name, description, muscle_group }); // Método create() del modelo
      res.status(201).json(newExercise);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Actualizar un ejercicio existente
  updateExercise: async (req, res) => {
    const { exerciseId } = req.params;
    const { name, description, muscle_group } = req.body;
    try {
      const updatedExercise = await Exercise.update(exerciseId, { name, description, muscle_group }); // Método update() del modelo
      res.json(updatedExercise);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Eliminar un ejercicio existente
  deleteExercise: async (req, res) => {
    const { exerciseId } = req.params;
    try {
      await Exercise.delete(exerciseId); // Método delete() del modelo
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = exercisesController;
