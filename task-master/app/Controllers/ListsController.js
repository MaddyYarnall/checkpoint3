import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _drawLists(){
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}


// function drawListForm(){
//   document.getElementById('modal-body-slot').innerHTML = getListForm()
// }
export class ListsController {
  constructor() {

    ProxyState.on('lists', _drawLists)
    _drawLists()
    
  }
  
  createList() {
    window.event.preventDefault()
    const form = window.event.target

    const listData = {
      title: form.title.value,
      color: form.color.value
    }

    listsService.createList(listData)
    form.reset()
    
  }

    

//     // clear form
//     form.reset()
//     // close modal
//     // @ts-ignore
//     bootstrap.Modal.getOrCreateInstance(document.getElementById('new-list')).toggle()
//   }

//   removeList(id){
//     console.log('deleting', id)
//     listsService.removeList(id)
//   }

// drawListForm(){
//   drawListForm()
// }


removeList(listId) {
  console.log(listId)

  if (confirm("Are you sure you want to delete this list?")) {
      listsService.removeList(listId)
  }
}

}