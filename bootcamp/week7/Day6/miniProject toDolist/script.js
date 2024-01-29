const tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const currentDate = new Date();
    const newTask = {
      id: tasks.length,
      text: taskText,
      startDate: currentDate.toISOString(),
      endDate: '', // You can set the end date as needed
      completed: false
    };

    tasks.push(newTask);
    saveTasksToLocalStorage();
    displayTasks();
    taskInput.value = '';
  }
}

function displayTasks() {
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.innerHTML = '';

  const sortedTasks = sortTasksByStartDate(tasks);

  sortedTasks.forEach(task => {
    const taskElement = createTaskElement(task);
    tasksContainer.appendChild(taskElement);
  });
}

function createTaskElement(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');
  if (task.completed) {
    taskElement.classList.add('completed');
  } else if (new Date(task.endDate) < new Date() && !task.completed) {
    taskElement.classList.add('overdue');
  }

  taskElement.addEventListener('click', () => toggleTaskDescription(task.id));

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  checkbox.addEventListener('change', () => toggleTaskStatus(task.id));

  const taskText = document.createElement('span');
  taskText.innerText = task.text;

  const deleteBtn = document.createElement('span');
  deleteBtn.innerText = 'X';
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.addEventListener('click', () => deleteTask(task.id));

  const editBtn = document.createElement('span');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('editBtn');
  editBtn.addEventListener('click', () => editTask(task.id));

  taskElement.appendChild(checkbox);
  taskElement.appendChild(taskText);
  taskElement.appendChild(deleteBtn);
  taskElement.appendChild(editBtn);

  return taskElement;
}

function toggleTaskStatus(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    saveTasksToLocalStorage();
    displayTasks();
  }
}

function toggleTaskDescription(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    alert(tasks[taskIndex].text);
  }
}

function deleteTask(taskId) {
  if (confirm('Are you sure you want to delete this task?')) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      saveTasksToLocalStorage();
      displayTasks();
    }
  }
}

function editTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const newTaskText = prompt('Edit task:', tasks[taskIndex].text);
    if (newTaskText !== null) {
      tasks[taskIndex].text = newTaskText;
      saveTasksToLocalStorage();
      displayTasks();
    }
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.length = 0; // Clear the array
  tasks.push(...storedTasks);
}

function sortTasksByStartDate(tasks) {
  return tasks.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

// Load tasks from local storage when the script is executed
loadTasksFromLocalStorage();

// Display tasks
displayTasks();
