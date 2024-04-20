// Importar el modelo de usuarios
const User = require('../models/usersModel');

// Controlador para manejar las operaciones CRUD en la entidad de usuarios
const usersController = {
  // Obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await User.getAll(); // Método getAll() del modelo
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Crear un nuevo usuario
  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password }); // Método create() del modelo
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Actualizar un usuario existente
  updateUser: async (req, res) => {
    const { userId } = req.params;
    const { username, email, password } = req.body;
    try {
      const updatedUser = await User.update(userId, { username, email, password }); // Método update() del modelo
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Eliminar un usuario existente
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    try {
      await User.delete(userId); // Método delete() del modelo
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = usersController;
