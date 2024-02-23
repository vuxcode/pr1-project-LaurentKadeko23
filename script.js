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
  card.classList.add("card");
  button.classList.add("clear");
  cbContainer.classList.add("cb-container");
  cbInput.classList.add("cb-input");
  item.classList.add("item");
  check.classList.add("check");
  button.classList.add("clear")

  // set atrributes 
  card.setAttribute("draggable", true);
  img.setAttribute("src", "./assets/images/icon-cross.svg")
  img.setAttribute("alt", "Clear it")
  cbContainer.setAttribute("type", "checkbox");

  // set todo item for card
  item.textContent = todo.item;

  // if completed -> add respective class / attributes

  if(todo.isCompleted){
    card.classList.add("checked");
    cbContainer.setAttribute("checed", "checked")
  }

  // add click listener to chechbox 
  cbContainer.addEventListener("click", function () {
    const correspondingCard = this.parentElement.parentElement;
    const checked = this.checked;
    // state todo in localStorage 
    stateTodo([
      document.querySelectorAll(".todos", ".card").indexOf(correspondingCard),
      checked
    ]);
    // updating class
  })
})


