// script.js 
document.addEventListener('DOMContentLoaded', function() {
    // 1. Select DOM elements exactly as specified
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Define addTask function exactly as specified
    function addTask() {
        // 2a. Retrieve and trim input value
        const taskText = taskInput.value.trim();
        
        // 2b. Check for empty string exactly
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // 3. Task creation exactly as specified
        const listItem = document.createElement('li');
        listItem.textContent = taskText;  // Must use textContent directly
        
        // 3a. Remove button creation exactly as specified
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";  // Exact text
        removeButton.className = "remove-btn";  // Exact class name
        
        // 3b. Remove functionality exactly as specified
        removeButton.onclick = function() {
            taskList.removeChild(listItem);  // Must use removeChild
        };
        
        // 3c. Append elements in exact order
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // 3d. Clear input exactly
        taskInput.value = "";
    }

    // 4. Event listeners exactly as specified
    addButton.addEventListener('click', addTask);  // Simple callback
    
    // 4a. Enter key listener exactly as specified
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {  // Must check exact key
            addTask();
        }
    });
});