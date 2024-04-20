// Importar el modelo de relaciones usuario-entrenamiento
const UserWorkout = require('../models/userWorkoutsModel');

// Controlador para manejar las operaciones CRUD en la entidad de relaciones usuario-entrenamiento
const userWorkoutsController = {
  // Obtener todas las relaciones usuario-entrenamiento
  getAllUserWorkouts: async (req, res) => {
    try {
      const userWorkouts = await UserWorkout.getAll(); // Método getAll() del modelo
      res.json(userWorkouts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Crear una nueva relación usuario-entrenamiento
  createUserWorkout: async (req, res) => {
    const { userId, workoutId } = req.body;
    try {
      const newUserWorkout = await UserWorkout.create({ userId, workoutId }); // Método create() del modelo
      res.status(201).json(newUserWorkout);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Actualizar una relación usuario-entrenamiento existente
  updateUserWorkout: async (req, res) => {
    const { userWorkoutId } = req.params;
    const { userId, workoutId } = req.body;
    try {
      const updatedUserWorkout = await UserWorkout.update(userWorkoutId, { userId, workoutId }); // Método update() del modelo
      res.json(updatedUserWorkout);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Eliminar una relación usuario-entrenamiento existente
  deleteUserWorkout: async (req, res) => {
    const { userWorkoutId } = req.params;
    try {
      await UserWorkout.delete(userWorkoutId); // Método delete() del modelo
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = userWorkoutsController;
