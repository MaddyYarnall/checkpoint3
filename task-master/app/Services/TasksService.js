class TasksService {
  createTask(taskData){
    const task = new Task(taskData)
    
  }
}


export const tasksService = new TasksService()