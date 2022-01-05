import { ProxyState } from "../AppState.js";
import { getListForm } from "../Components/ListForm.js";
import { listsService } from "../Services/ListsService.js";

//NOTE Nothing is letting me draw anything (besides html things) to the page
 
function _drawLists(){
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

//NOTE I thought everything was connected, but even with my draw list form function and my get list form function, nothing will draw
function drawListForm(){
  document.getElementById('modal-body-slot').innerHTML = getListForm()
}

export class ListsController {
  constructor() {

    ProxyState.on('lists', _drawLists)
    _drawLists()
    
  }
  
  createList() {
    window.event.preventDefault()
    const form = window.event.target

//NOTE This is saying it doesn't exist on event target

    const listData = {
      title: form.title.value,
      color: form.color.value
    }

    listsService.createList(listData)
    form.reset()
    
  }

    //NOTE My modal wont pop up when I click my add list button. It used to, but then I broke it 

    //NOTE I'm also getting an "unexpected token" error when I first refresh the page about this bootstrap.Modal thing. Its saying that the '.' should be a ',' on the document.getelementbyid
   
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-list')).toggle()
  }

  removeList(id){
    console.log('deleting', id)
    listsService.removeList(id)
  }


//NOTE I'm not able to draw my list modal or anything to the page when I click on the button
drawListForm(){
  drawListForm()
}

//NOTE Technically my removelist function doesn't apply yet considering I cant get anything to draw to the page let alone delete something off the page

removeList(listId) {
  console.log(listId)

  if (confirm("Are you sure you want to delete this list?")) {
      listsService.removeList(listId)
  }
}

}