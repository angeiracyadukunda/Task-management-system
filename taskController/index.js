
// index.js
const { addTask, removeTask, updateTask,updateManyTasks } = require("../taskController/Controller");

const newTask = {
  taskNumber: 1,
  description: "Complete project",
  deadline: "2023-01-31",
  completed: false,
};

addTask(newTask);

const updatedTaskInfo = {
  description: "Updated project",
  deadline: "2023-02-28",
  completed: true,
};
const result = updateManyTasks(5, updatedTaskInfo);

if (result) {
  console.log(`\nCar at index ${result.index} has been updated:`);
  console.log(result.updatedCar);
} else {
  console.log("UpdateMany failed");
}

// Provide the task number and updated task information to the updateTask function
updateTask(1, updatedTaskInfo);

// You can also call removeTask if needed
removeTask(2); // Example task number
updateManyTasks
