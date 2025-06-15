// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign remove function
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach Event Listener to Add Button
    addButton.addEventListener('click', addTask);

    // Attach Event Listener for Enter Key in Input Field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
