import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService {
  createList(listData) {
    const list = new List(listData)
    ProxyState.lists = [list, ...ProxyState.lists]
    console.log('lists', ProxyState.lists)
  }

  removeList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== id)
  }

}

export const listsService = new ListsService()