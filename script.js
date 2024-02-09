// Getting access to to the input field and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
  // if the input box is empty it will give the message("You must worite something") on the screen
  if(inputBox.value === ''){
    alert("You must write something")
  }
  else{
    let li = document.createElement("li");
    // whatever  text we add into the input field will be added into the list-container
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
      // create a plceholder element where i press the x it will delete the information
      let span = document.createElement("span")
      span.innerHTML = "\u00d7"
      li.appendChild(span)
  }

  // this will remove the list inside the input field so I can add more
  inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
  }

  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
},false);

