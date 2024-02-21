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
    const todo = inputBox.value;
    // console.log("this is the input:", inputBox.value)
    li.setAttribute("id", todo);
    // whatever  text we add into the input field will be added into the list-container
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
   
    saveData()
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
        showTask()
    
      }
     
      saveData();
      handleCheckBoxEvent(inputBox.value)
      addTask();
  }

  // this will remove the list inside the input field so I can add more
  inputBox.value = '';
  saveData();
}

 function handleCheckBoxEvent(value = "") {
  listContainer.addEventListener("click", function(e){


  
  // Check if checkbox is checked
   if(e.target.tagName === "LI"){

    

    if(e.target.id === value) {
      let isChecked = e.target.classList.value === "checked";
      console.log([value, isChecked])
    }
  
   }

},false)};



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


function saveData(value = "") {

  localStorage.setItem("data", listContainer.innerHTML)
}


function showTask() {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask() 