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