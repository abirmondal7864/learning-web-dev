const fs = require("fs");
const filepath = "./tasks.json";

/*
  Load tasks from the JSON file.
  Returns an array of task objects like [{ task: "Buy milk" }, ...].
  If the file doesn't exist or is empty, returns an empty array.
*/
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath); // read raw bytes from file
    const dataJSON = dataBuffer.toString(); // convert bytes to string
    return JSON.parse(dataJSON); // convert JSON string to JS array
  } catch (error) {
    return []; // return empty array if file not found or invalid
  }
};

const command = process.argv[2]; // command: 'add', 'remove', or 'list'
const argument = process.argv[3]; //task

/*
  List all tasks with numbering.
*/
const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    // Each task is an object like { task: "Buy milk" }, so access with task.task
    console.log(`${index + 1} - ${task.task}`);
  });
};

/*
  Save tasks array to JSON file.
*/
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); // convert JS array to JSON string
  fs.writeFileSync(filepath, dataJSON); // write string to file
};

/*
  Add a new task to the tasks list.
*/
const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task }); // store task as an object
  saveTasks(tasks); // save updated array to file
  console.log("Task added: " + task);
};

/*
  Remove a task by its index (1-based number from the list command).
*/
const removeTask = (index) => {
  const tasks = loadTasks();

  if (index < 1 || index > tasks.length) {
    // validate index
    console.log("Invalid task number!");
    return;
  }

  // Remove the task and get the removed element as an array
  const removed = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log("Task removed: " + removed[0].task);
};

/*
  Main program logic: decide which command to execute
*/
if (command === "list") {
  listTasks();
} else if (command === "add") {
  addTask(argument);
} else if (command === "remove") {
  removeTask(parseInt(argument)); // convert string to int
} else {
  console.log("Command not found! Use: add, remove, or list");
}
