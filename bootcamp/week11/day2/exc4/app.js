import TodoList from './todo.js';

// Crear una instancia de la clase TodoList
const todoList = new TodoList();

// Agregar algunas tareas
todoList.addTask('Buy groceries');
todoList.addTask('Do laundry');
todoList.addTask('Write report');

// Marcar una tarea como completada
todoList.completeTask(0);

// Listar todas las tareas
todoList.listTasks();