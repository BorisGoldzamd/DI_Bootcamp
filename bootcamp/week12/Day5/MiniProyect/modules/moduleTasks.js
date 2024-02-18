// Importa el modelo de tareas si es necesario
const tasks = require('../tasks.json');

// Función para obtener todas las tareas
exports.getAllTasks = () => {
  return tasks;
};

// Función para obtener una tarea por su ID
exports.getTaskById = (taskId) => {
  return tasks.find(task => task.id === taskId);
};

// Función para crear una nueva tarea
exports.createTask = (newTask) => {
  // Agrega la nueva tarea al array de tareas
  tasks.push(newTask);
  return newTask;
};

// Función para actualizar una tarea existente
exports.updateTask = (taskId, updatedTask) => {
  // Encuentra la tarea existente por su ID y actualiza sus propiedades
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index] = updatedTask;
    return updatedTask;
  } else {
    return null; // La tarea no fue encontrada
  }
};

// Función para eliminar una tarea
exports.deleteTask = (taskId) => {
  // Filtra la tarea con el ID dado y devuelve el array sin esa tarea
  tasks = tasks.filter(task => task.id !== taskId);
};
