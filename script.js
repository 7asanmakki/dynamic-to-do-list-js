document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define addTask function exactly as specified
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();
        
        // Check for empty string exactly as specified
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new li element and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button with exact specifications
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Assign onclick event that removes the li from taskList
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append remove button to li, then li to taskList
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field exactly as specified
        taskInput.value = "";
    }

    // Add click event listener to addButton
    addButton.addEventListener('click', addTask);
    
    // Add keypress event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});