const tasks = [];

// Add a task to the list
function addTask(task) {
    tasks.push(task);
}

// Remove a task from the list
function removeTask(task) {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
}

// Print all tasks in the list
function printTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// Usage example
addTask("Buy groceries");
addTask("Finish homework");
printTasks();
