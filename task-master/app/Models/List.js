import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.id = generateId()
    this.color = data.color
    this.title = data.title
  }
  get Template() {
    return `
  <div style="height: 25vw;" class="col-4 d-flex justify-content-center ">
      <div class="card" style="width: 18rem;">
        <header style="background-color: ${this.color};">
          <h5 class="card-title text-center  text-light">${this.title}</h5></header>
        </div>
        <div class="card-body text-end">
          <input style="margin-top: 12rem;" class="form-control" type="text" name="" placeholder="Add to the list.."
            aria-label="default input example">
          <a href="#" class="btn btn-danger my-3">Delete</a>
        </div>
      </div>
    </div>
    `}
}
