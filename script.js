// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText)); // Use text node, not textContent

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            li.remove(); // Use .remove() instead of taskList.removeChild(li)
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Use keydown instead of keypress
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
