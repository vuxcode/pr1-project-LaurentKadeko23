

const todoForm = document.querySelectorAll(".todo-form")
const todoInput= document.querySelectorAll(".todo-input")
const todoItemList= document.querySelectorAll(".todo-items")

// add todo
todoForm.addEventListener("submit", function(event) {
  // prevent the page from reloading
  event.preventDefault();
  addTodo(todoInput.value) // call addTodo function with input box
})