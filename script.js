const itemsLeft = document.getElementById("items-left")
// get all todos 
function addTodo() {
  if(!todos) {
    return null;
  }
}

// creating necessary elements
todos.forEach(function(todo){
  const card = document.createElement("li")
  const cbContainer = document.createElement("div")
  const cbInput = document.createElement("input")
  const check = document.createElement("span")
  const item = document.createElement("p")
  const button = document.createElement("button")
  const img = document.createElement("img")

  // adding classes
  

})


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
const add = document.getElementById("add-btn");
const txtInput = document.querySelector(".txt-input");
add.addEventListener("click", function() {
  const item = txtInput.value.trim();
  if(item) {
    txtInput.value = " ";
    const todos = !localStorage.getItem("todos")
    ? []
    :JSON.parse(localStorage.getItem("todos"));
    const currentTodo = {
      item,
      isCompleted: false,
    };
    addTodo([currentTodo]);
    todos.push(currentTodo);
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  txtInput.focus();
})