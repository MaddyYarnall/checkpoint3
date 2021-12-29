import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { getListForm } from "../Utils/Components/ListForm.js";

function _drawLists(){
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

function drawListForm(){
  document.getElementById('modal-body-slot').innerHTML = getListForm()
}

export class ListsController {
  constructor() {
    ProxyState.on('cars', _drawLists)
  }
  drawLists() {
    _drawLists()
    document.getElementById('modal-body-slot').innerHTML = getListForm()
  }

  createList() {
    // prevents page reload
    window.event.preventDefault()
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const listData = {
      title: form.listHeader.value,
      item: form.listItem.value
    }
    listsService.createList(listData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-list')).hide()
  }

  removeList(id){
    console.log('deleting', id)
    listsService.removeList(id)
  }

drawListForm(){
  drawListForm()
}


}