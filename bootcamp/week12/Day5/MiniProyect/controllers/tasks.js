const express = require('express');
const router = express.Router();
const tasksModule = require('../modules/moduleTasks.js'); // Importa el módulo correctamente

router.get('/', getTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

function getTasks(req, res) {
  const allTasks = tasksModule.getAllTasks();
  res.json(allTasks);
}

function getTaskById(req, res) {
  const taskId = req.params.id;
  const task = tasksModule.getTaskById(taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
}

function createTask(req, res) {
  const newTask = req.body;
  const createdTask = tasksModule.createTask(newTask);
  res.status(201).json(createdTask);
}

function updateTask(req, res) {
  const taskId = req.params.id;
  const updatedTask = req.body;
  const result = tasksModule.updateTask(taskId, updatedTask);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Tarea no encontrada' });
  }
}

function deleteTask(req, res) {
  const taskId = req.params.id;
  tasksModule.deleteTask(taskId);
  res.status(204).send();
}

