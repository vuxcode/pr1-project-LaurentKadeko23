
// get all todos 
addTodo()
// drag over on .todos container
document.querySelector(".todos").addEventListener("dragover"), function(e) {
  e.preventDefault();
  if(!e.target.classList.contains("dragging") &&
  !e.target.classList.contains("card") 
  ) {
    const draggingCard = document.querySelectorAll("card");
  }

  const currPos = cards.index.Of(draggingCard);
  const newPos = cards.indexOf(e.target);
  console.log(currPos, newPos)
  if(currPos > newPos) {
    this.insertBefore(draggingCard, e.target);
  }else{
    this.insertBefore(draggingCard, e.target.nextSibling);
  }
  const todos = JSON.parse(localStorage.getItemS("todos"));
  const removed = todos.splice(currPos, 1);
  todos.splice(newPos, 0, removed[0]);
  localStorage.setItem("todos", JSON.stringify(todos))
}

// addd new todos on user input
