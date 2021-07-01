/**
 * Assets logo
 * <i class="fas fa-trash" onclick="alert('s')"></i>
  <i class="fas fa-edit"  onclick="alert('s')"></i>
  <i class="fas fa-sync-alt" onclick="alert('s')"></i>
*/
//get tthe content of the input task value
// if not empty we add task, else alert
// after that reset the input value
function dragStart() {
  console.log("start draging");
}
function dragEnd() {
  console.log("drag finish");
}

function removeTask() {
  console.log("remove");
}
function editTask() {
  console.log("editTask");
}
//function addTask
function addTask(x) {
  //create new list , and stored in a variable
  let task = document.createElement("li");
  //Adding content
  //create a div element to hold content
  let taskContent = document.createElement("div");
  //add class to this div
  taskContent.classList.add("task-content");
  //add content to this div
  taskContent.innerText = x;
  // add the div into the li element that created on lin 26
  task.appendChild(taskContent);
  //style to the li lement
  task.classList.add("task");
  task.classList.add("fill");
  //behavior
  //drag and drop to the li element
  task.setAttribute("draggable", "true");
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
  //logo button
  let logoCollections = document.createElement("div");
  logoCollections.classList.add("trash");
  //create a div to contain our trash logo
  let trash = document.createElement("div");
  let trashLogo = "<i class='fas fa-trash' ></i>";
  trash.innerHTML = trashLogo;
  trash.addEventListener("click", removeTask);
  //create a div to contain our edit logo
  let edit = document.createElement("div");
  let editLogo = "<i class='fas fa-edit'></i>";
  edit.innerHTML = editLogo;
  edit.addEventListener("click", editTask);
  logoCollections.appendChild(trash);
  logoCollections.appendChild(edit);
  task.appendChild(logoCollections);
  //select the tasks list collection area
  let tasks = document.getElementById("tasks-added");
  // insert the task li element created on line 26 , and insert before the first child - element -li - task of the tasks list id #tasks-added
  tasks.insertBefore(task, tasks.childNodes[0]);
}
//get the input value from user
document.getElementById("add-task").addEventListener("click", function () {
  //step 1 : geting user input
  let taskInput = document.getElementById("task-value"); //our input box
  let inputValue = taskInput.value;
  if (!inputValue) {
    alert("yo!!! please input task");
    return;
  }
  //step 2:
  addTask(inputValue); /// calling , executing a function  -> the value of this "inputValue is " =
  document.getElementById("task-value").value = "";
});
