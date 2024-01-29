const tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Check if the input is not empty
  if (taskInput.value.trim() !== '') {
    // Create a new task object
    const newTask = {
      task_id: tasks.length,
      text: taskInput.value,
      done: false
    };

    // Add the task object to the tasks array
    tasks.push(newTask);

    // Create task DOM elements
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <input type="checkbox" data-task-id="${newTask.task_id}" onchange="doneTask(${newTask.task_id})">
      <label>${newTask.text}</label>
      <button onclick="deleteTask(${newTask.task_id})"><i class="fas fa-times"></i></button>
    `;

    // Append task to the task list
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = '';
  }
}

function doneTask(taskId) {
  // Find the task in the array
  const task = tasks.find(task => task.task_id === taskId);

  // Update the task's done property
  task.done = !task.done;

  // Update the task appearance in the DOM
  const taskLabel = document.querySelector(`[data-task-id="${taskId}"] + label`);
  taskLabel.style.textDecoration = task.done ? 'line-through' : 'none';
}

function deleteTask(taskId) {
  // Find the index of the task in the array
  const taskIndex = tasks.findIndex(task => task.task_id === taskId);

  // Remove the task from the array
  tasks.splice(taskIndex, 1);

  // Remove the task from the DOM
  const taskElement = document.querySelector(`[data-task-id="${taskId}"]`).parentNode;
  taskElement.remove();
}
