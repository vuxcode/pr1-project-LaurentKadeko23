// getting all todos

addTodo();
document.querySelector(".todos").addEventListener("dragover", function (e) {
  e.preventDefault();
  if(
    !e.target.classList.contains("dragging") &&
    e.target.classList.contains("card")
  ){
    const draggingCard = document.querySelector("dragging");
    const currPos = cards.indexOf(draggingCard);
    const newPos = cards.indexOf(e.target);
    console.log(currPos, newPos);
    if(currPos > newPos){
      this.insertBefore(draggingCard, e.target);
    }else{
      this.insertBefore(draggingCard, e.target.nexSibling);
    }
    const todos = JSON.parse(localStorage.getItem("todos"));
    const removed = todos.splice(currPos, 1);
    todos.splice(newPos, 0, removed[0]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
});

// adding new todos on user input
const add = document.getElementById("add-btn");
const txtInput = document.querySelector(".txt-input");
add.addEventListener("click", function () {
  const item = txtInput.value.trim() ;
  if(item) {
    txtInput.value = " ";
    const todos = !localStorage.getItem("todos")
    ? []
    : JSON.parse(localStorage.getItem("todos"));
    const currentTodo = {
      item,
      isCompleted: false
    };
    addTodo([currentTodo])
    todos.push(currentTodo);
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  txtInput.focus();
})

// add todo also on enter key
txtInput.addEventListener("keydown", function(e) {
  if(e.keyCode === 14) {
    add.click();
  }
});

// filter todo
document