import { ProxyState } from "../AppState.js";
import { List } from "../Models/Listmodel.js";

class ListsService{

  removeList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== id)
  }

  createList(listData){
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists
      
    ]
  }
}

export const listsService = new ListsService()