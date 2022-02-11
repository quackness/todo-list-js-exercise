
// //using an object to keep track of the state
// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task //returns task title, description and state
// }

// // prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

// // DRIVER CODE:
// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); //title, description
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed, uses data from the object
// completeTask(task1); //calling completeTask to pass true, this will change the outcome of the next console.log
// logTaskState(task1); // Clean Cat Litter has been completed, uses object but the complete status was re-assigned to: true

// //let's make sure we see our tasks
// console.log(tasks); //logs an array of objects


// Use Methods to make it object oriented. a task has been encapsulated inside the task object.

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`); //this task
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE:
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); //title, description
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//calls
task1.logState(); // Clean Cat Litter has not been completed, uses data from the object
task1.markCompleted(); //calling completeTask to pass true, this will change the outcome of the next console.log
task1.logState(); // Clean Cat Litter has been completed, uses object but the complete status was re-assigned to: true

task2.logState(); // Clean Cat Litter has not been completed, uses data from the object
task2.markCompleted(); //calling completeTask to pass true, this will change the outcome of the next console.log
task2.logState(); // Clean Cat Litter has been completed, uses object but the complete status was re-assigned to: true

//let's make sure we see our tasks
// console.log(tasks); //logs an array of objects

