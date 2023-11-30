/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


const inputElement = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


function inititialise(){
  if(!todoList) {
    console.error("Could not find the todo list");
    return
  }
}

function addTodo(){
  if(inputElement.value === ""){
    alert("Please enter a todo");
  }
  else{
    const li = document.createElement("li");
    li.innerText = inputElement.value;
    li.addEventListener("click", toggleTodo);
    todoList.appendChild(li);
  }
  inputElement.value = "";

}

function toggleTodo(){
  this.classList.toggle("completed");
}

function clearTodo(){
  const completedItems = document.querySelectorAll("#todo-list .completed");
  completedItems.forEach(item => item.remove());
  
}

inititialise();