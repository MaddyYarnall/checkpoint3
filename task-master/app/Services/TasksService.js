import { Task } from "../Models/Task.js"

class TasksService {
  createTask(taskData) {
    const task = new Task(taskData)

  }

  removeTask(id) {

  }
}


export const tasksService = new TasksService()