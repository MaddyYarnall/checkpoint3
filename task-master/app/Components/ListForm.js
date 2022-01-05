/* <label for="exampleColorInput" class="form-label">Color picker</label>
<input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> 

COLOR PICKER FOR FORM

*/

//NOTE I commented out my color picker since I was going to put that in the form where you name your list

export function getListForm() {
  return /*html*/ `
<form onsubmit='app.listsConstroller.createList()'>
<div class="mb-3">
<label for="listHeader" class="form-label listHeader1">List Title</label> 
<input type="text" class="form-control" id="exampleInputHeader" aria-describedby="headerHelp">
</div>
<div class="mb-3">
<label for="list item" class="form-label">Task...</label>
<input type="text" class="form-control" id="exampleInputTask">
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form> 
`
}