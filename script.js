



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

      function addTask() {
        // initialsize an empty array 
        const inputArray = [];
      
        // Get the input elements
        const value1  = inputBox.value;
      
        // Add the values to the array
        inputArray.push(value1)
        // print to the console
        console.log(inputArray)
      
        inputBox.value = '';
      
      }
      addTask()
  }

  

  // this will remove the list inside the input field so I can add more
  inputBox.value = '';
  saveData();
}



listContainer.addEventListener("click", function(e){
  // When you press on any list element you will be able to mark it as done or undone
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData();
  }

  // if you press on the x you will remove the any list 
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
},false);



// saving the data so it doesn' disappear 
function saveData(inputValue){
  // whatever content that are in the list-container will be stored in our browser

  // want the value of the list container not the entire list 
  window.localStorage.setItem("data", listContainer.innerHTML)

}

// display the data whenever we open or refresh our browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

