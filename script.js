document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item and set its text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Create remove button with exact specifications
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Add removal functionality
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Append elements in exact specified order
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        
        // Clear input field
        taskInput.value = "";
    }

    // Add button click event listener
    addButton.addEventListener('click', addTask);
    
    // Add Enter key event listener
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});