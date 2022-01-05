import { ProxyState } from "../AppState.js";
import { List } from "../Models/Listmodel.js";

//NOTE I remember having something in the constructor but I don't remember what happened to it or what I had in there 
class ListsService{

  constructor(){
     
  }

  //NOTE my "list" in my const list says it is declared but it's value is never read
  createList(listData){
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists]
    console.log('lists', ProxyState.lists)
  }

  //NOTE again, my remove list wont apply until I can actually get a list created
  removeList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== id)
  }

}

export const listsService = new ListsService()