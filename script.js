document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage
  loadTasks();

  // Add new task on button click
  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
    addTask(taskText, true);
    taskInput.value = '';
  });

  // Add new task on Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
      addTask(taskText, true);
      taskInput.value = '';
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    removeButton.addEventListener('click', () => {
      taskItem.remove();
      removeTaskFromStorage(taskText);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    if (save) {
      saveTaskToStorage(taskText);
    }
  }

  function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});
