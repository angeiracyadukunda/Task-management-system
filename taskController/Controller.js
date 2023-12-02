// taskController.js
const { stock } = require("../database/stock");


const displayTasks = () => {
  console.log("\nCurrent Tasks:");
  console.log(stock);
};

const addTask = (newTask) => {
  displayTasks();
  stock.push(newTask);
  console.log("\nNew task added:");
  console.log(newTask);
  displayTasks();
};

const removeTask = (taskNumber) => {
  displayTasks();
  const indexToRemove = stock.findIndex((task) => task.taskNumber === taskNumber);

  if (indexToRemove === -1) {
    console.log(`\nTask with number ${taskNumber} not found`);
    return;
  }

  const removedTask = stock.splice(indexToRemove, 1)[0];
  console.log("\nTask has been removed:");
  console.log(removedTask);
  displayTasks();
};

const updateTask = (taskNumber, updatedTask) => {
  displayTasks();
  const indexToUpdate = stock.findIndex((task) => task.taskNumber === taskNumber);

  if (indexToUpdate === -1) {
    console.log(`\nTask with number ${taskNumber} not found`);
    return;
  }

  stock[indexToUpdate] = { ...stock[indexToUpdate], ...updatedTask };
  console.log(`\nTask with number ${taskNumber} has been updated:`);
  console.log(stock[indexToUpdate]);
  displayTasks();
};

const updateManyTasks = (taskNumber, updatedProperties) => {
  displayTasks();

  const indexToUpdate = stock.findIndex((task) => task.taskNumber === taskNumber);

  if (indexToUpdate === -1) {
    console.log(`\nTask with number ${taskNumber} not found`);
    displayTasks();
    return;
  }

  for (const property in updatedProperties) {
    stock[indexToUpdate][property] = updatedProperties[property];
  }

  console.log(`\nTask with number ${taskNumber} has been updated:`);
  console.log(stock[indexToUpdate]);

  displayTasks();
};

module.exports = {
  addTask,
  removeTask,
  updateTask,
  displayTasks,
  updateManyTasks
};
