const { render } = require("react-dom");


const todoForm = document.querySelectorAll(".todo-form")
const todoInput= document.querySelectorAll(".todo-input")
const todoItemList= document.querySelectorAll(".todo-items")

// add todo
let todos = [];
todoForm.addEventListener("submit", function(event) {
  // prevent the page from reloading
  event.preventDefault();
  addTodo(todoInput.value) // call addTodo function with input box
});

function addTodo(item) {
  // if item is not empty
  if(item !== " ") {
    // make a todo object, which has an ide, name, and completed properties 
    const todo = {
      it: Date.now(),
      name: item,
      completed: false
    };

    // tadd it to todos array
    todos.push(todo);
    renderTodos(todos)

    // clearing the input box value
    todoInput = " ";
  }
}

// function to render given todos to screen
function renderTodos(tods) {
  // clear everything inside ul
}