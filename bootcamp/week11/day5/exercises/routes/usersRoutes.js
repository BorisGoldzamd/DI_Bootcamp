const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const usersController = require('../controllers/usersController');

// Rutas para manejar operaciones relacionadas con usuarios
router.get('/users', usersController.getAllUsers);
router.post('/users', usersController.createUser);
router.put('/users/:userId', usersController.updateUser);
router.delete('/users/:userId', usersController.deleteUser);

module.exports = router;
