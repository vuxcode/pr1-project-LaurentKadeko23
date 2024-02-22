const { render } = require("react-dom");

const todoForm = document.querySelectorAll(".todo-form")
const todoInput= document.querySelectorAll(".todo-input")
const todoItemList= document.querySelectorAll(".todo-items")

// stores every todos
let todos = [];
const todo = {
  id: Date.now(),
  name: "buy Milk",
  completed: false
}

// add an eventListener on form, and listen for submit event 
todoForm.addEventListener("submit", function(event) {
  // prevent the page from reloading when submiting the form 
  event.preventDefault();
  addTodo(todoInput.value); //call addTodo function
})

function addTodo(item) {
  // if item is not empty
  if(item !== "") {
    // make a todo object which has id, name , and completed properties
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };
    // addd it to todos array
    todos.push(todo);
    renderTodos(todos) // render them between ul

    // clearing the input box
    todoInput.values = " ";
  }
}


function renderTodos(todos) {
  // clear everything inside ul
  todoItemList.innerHTML = " ";

  // run trough each item inside todos
  todos.forEach(function(item) {
    // check if item is completed
    const checked = item.completed ? " checked": null;
  })

  // make a li element and fill it
  const li  = document.createElement("li")
  li.setAttribute("class", "item");
  li.setAttribute("data-key", item.id)
  // if item is completed, then add a class to li called checked
  if(item === true) {
    li.classList.add("checked")
  };

  li.innerHTML = `
  <input type="checkbox" class=" checkbox" ${checked} ${item.name}
  <button class="delete-button" >X</button>
  `
  todoItemList.append(li)
}

// function to add todos to local storage