import { tasksService } from "../Services/TasksService.js"


export class TasksController {
    constructor() {

    }

    createTask(listId) {
        window.event.preventDefault()
        let form = window.event.target
        // let taskData = {
        //     title: form.taskName.value,
        //     listId: listId
        // }
        // console.log('Task Name', form.taskName.value)
        // console.log('Creating Task', taskData)
        // tasksService.createTask(taskData)
    }

    removeTask(taskId) {
        if (confirm("Delete this task?")) {
            tasksService.removeTask(taskId)
        }
    }



}



function alskdjf() {

}