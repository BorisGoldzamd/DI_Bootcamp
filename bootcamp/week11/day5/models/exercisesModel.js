// Importar Knex para la conexión a la base de datos
const knex = require('../config/knexconnect');

const Exercise = {
  // Obtener todos los ejercicios
  getAll: async () => {
    return knex('exercises').select('*');
  },

  // Crear un nuevo ejercicio
  create: async (exerciseData) => {
    return knex('exercises').insert(exerciseData).returning('*');
  },

  // Actualizar un ejercicio existente
  update: async (exerciseId, exerciseData) => {
    return knex('exercises').where({ id: exerciseId }).update(exerciseData).returning('*');
  },

  // Eliminar un ejercicio existente
  delete: async (exerciseId) => {
    return knex('exercises').where({ id: exerciseId }).del();
  }
};

module.exports = Exercise;
