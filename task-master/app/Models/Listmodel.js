import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data){
    this.id = generateId()
    this.listHeader = data.listHeader
    this.listItem = data.listItem
  }
  get Template() {
  return `
  <div class="card text-center">
  <ul>
    <header>
      <h3 class="text-center">${this.listHeader}</h3>
    </header>
    <li>${this.listItem}</li>
  </ul>
</div>`
  }
}
