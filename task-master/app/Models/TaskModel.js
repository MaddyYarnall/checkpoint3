import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(data){
    this.taskId = data.taskId || generateId()
    this.title = data.title
    this.listId = data.listId
    this.completed = data.completed || false
  }

  get Template() {
    return `
    <form action=''>
    <input type="checkbox" onclick="app.tasksController.checkStatus('${this.taskId}')" id='${this.taskId}' class="form-check-input me-1" aria-label="..." name="checkName" value="${this.taskId}"   ${this.completed ? 'checked' : 'unchecked'}> 
    <label for='${this.taskId}'>${this.title}</label>
    
    <span title="delete task" class="selectable" onclick="app.tasksController.removeTask('${this.taskId}')"><i>(delete)</i></span>
 </form>
    `
  }



}