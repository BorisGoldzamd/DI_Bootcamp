// Importar Knex para la conexión a la base de datos
const knex = require('../config/knexconnect');

const Workout = {
  // Obtener todos los entrenamientos
  getAll: async () => {
    return knex('workouts').select('*');
  },

  // Crear un nuevo entrenamiento
  create: async (workoutData) => {
    return knex('workouts').insert(workoutData).returning('*');
  },

  // Actualizar un entrenamiento existente
  update: async (workoutId, workoutData) => {
    return knex('workouts').where({ id: workoutId }).update(workoutData).returning('*');
  },

  // Eliminar un entrenamiento existente
  delete: async (workoutId) => {
    return knex('workouts').where({ id: workoutId }).del();
  }
};

module.exports = Workout;
