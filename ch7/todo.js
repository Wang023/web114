// Gana Sehaki

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// add event to addTaskBtn button 
addTaskBtn.addEventListener("click", function(){
    const newTask = taskInput.value.trim();

    // error check
    if(newTask === ''){
        alert("Please enter a task.");
        return;
    }

    // Create a li html element and add the text to it
    const listTask = document.createElement("li");
    listTask.textContent = newTask;

    // Create a delete button and add text to it
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";

    // Add a click event listener to the button and remove the task from the list
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listTask);
    });

    // add the delete button the list and the task and clear the input field
    listTask.appendChild(deleteButton);
    taskList.appendChild(listTask);
    taskInput.value = "";
    taskInput.focus();
})


