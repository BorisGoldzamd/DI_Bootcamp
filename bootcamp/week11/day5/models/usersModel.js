// Importar Knex para la conexión a la base de datos
const knex = require('../config/knexconnect');

const User = {
  // Obtener todos los usuarios
  getAll: async () => {
    return knex('users').select('*');
  },

  // Crear un nuevo usuario
  create: async (userData) => {
    return knex('users').insert(userData).returning('*');
  },

  // Actualizar un usuario existente
  update: async (userId, userData) => {
    return knex('users').where({ id: userId }).update(userData).returning('*');
  },

  // Eliminar un usuario existente
  delete: async (userId) => {
    return knex('users').where({ id: userId }).del();
  }
};

module.exports = User;
