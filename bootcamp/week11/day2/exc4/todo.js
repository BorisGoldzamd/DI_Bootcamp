class TodoList {
    constructor() {
        // Inicializar una lista vacía de tareas
        this.tasks = [];
    }

    // Método para agregar una tarea
    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    // Método para marcar una tarea como completada
    completeTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks[taskIndex].completed = true;
        }
    }

    // Método para listar todas las tareas
    listTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Pending'}`);
        });
    }
}

// Exportar la clase TodoList
export default TodoList;