// Importar Knex para la conexión a la base de datos
const knex = require('../config/knexconnect');

const UserWorkout = {
  // Obtener todas las relaciones usuario-entrenamiento
  getAll: async () => {
    return knex('user_workouts').select('*');
  },

  // Crear una nueva relación usuario-entrenamiento
  create: async (userWorkoutData) => {
    return knex('user_workouts').insert(userWorkoutData).returning('*');
  },

  // Actualizar una relación usuario-entrenamiento existente
  update: async (userWorkoutId, userWorkoutData) => {
    return knex('user_workouts').where({ id: userWorkoutId }).update(userWorkoutData).returning('*');
  },

  // Eliminar una relación usuario-entrenamiento existente
  delete: async (userWorkoutId) => {
    return knex('user_workouts').where({ id: userWorkoutId }).del();
  }
};

module.exports = UserWorkout;
