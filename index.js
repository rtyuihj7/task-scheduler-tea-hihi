// index.js

const fs = require('fs');

class TaskScheduler {
  constructor() {
    this.tasks = [];
  }

  loadTasks() {
    try {
      const data = fs.readFileSync('tasks.json', 'utf8');
      this.tasks = JSON.parse(data);
      console.log('Tasks loaded successfully.');
    } catch (err) {
      console.error('Error loading tasks:', err);
    }
  }

  saveTasks() {
    try {
      const data = JSON.stringify(this.tasks, null, 2);
      fs.writeFileSync('tasks.json', data);
      console.log('Tasks saved successfully.');
    } catch (err) {
      console.error('Error saving tasks:', err);
    }
  }

  scheduleTask(task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  displayTasks() {
    console.log('Scheduled Tasks:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.date} - ${task.description}`);
      console.log('-------------------------------------');
    });
  }
}

const taskScheduler = new TaskScheduler();
taskScheduler.loadTasks();
taskScheduler.displayTasks();

// Example: Schedule a new task
const newTask = {
  date: '2024-03-15',
  description: 'Project deadline'
};
taskScheduler.scheduleTask(newTask);
