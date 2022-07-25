import content from "./content";
import { createNewToDo, checkToDo, allToDoArray } from "./createToDo";

console.log("Greetings, General Kenobi!");
content;

let popup = document.getElementById("popup");
// createNewToDo("a", "a", "a", "top", true);

const renderBodyElements = (function () {
  let openPopupBtn = document.querySelector(".btn-create-todo");
  let closePopupBtn = document.querySelector(".popup-btn-exit");
  let newToDoItem = document.querySelector(".popup-btn-add");
  let popup = document.getElementById("popup");
  let formTitle = document.querySelector("#title");
  let formDesc = document.querySelector("#description");
  let formPriority = document.querySelector("#priority");
  let formDueDate = document.querySelector("#duedate");
  let todoList = document.querySelector(".todo-list");
  return {
    openPopupBtn,
    closePopupBtn,
    newToDoItem,
    popup,
    formTitle,
    formDesc,
    formPriority,
    formDueDate,
    todoList,
  };
})();

// Event Listeners For opening & Closing Form
renderBodyElements.openPopupBtn.addEventListener("click", () => {
  if (popup.classList.contains("open-popup")) {
    closePopup();
    resetForm();
  } else {
    showPopup();
  }
});

// Listener On Form Close Btn
renderBodyElements.closePopupBtn.addEventListener("click", () => {
  closePopup();
  resetForm();
});

// Listener ADD TODO
renderBodyElements.newToDoItem.addEventListener("click", () => {
  newToDo();
  resetForm();
  checkToDo();
  closePopup();
});

// Functions for Removing Open/Close Popup CLASS
const showPopup = () => {
  renderBodyElements.popup.classList.add("open-popup");
};
const closePopup = () => {
  renderBodyElements.popup.classList.remove("open-popup");
};

// Reset Form Values Function
const resetForm = () => {
  renderBodyElements.formTitle.value = null;
  renderBodyElements.formDesc.value = null;
  renderBodyElements.formDueDate.value = null;
  renderBodyElements.formPriority.value = "low";
};

// Get Values from Form and Send to ToDo Func..
const newToDo = () => {
  let title = renderBodyElements.formTitle.value;
  let desc = renderBodyElements.formDesc.value;
  let dueDate = renderBodyElements.formDueDate.value;
  let prio = renderBodyElements.formPriority.value;
  let done = false;
  // let current = getCurrentProject();
  if (title.length < 2 || desc.length < 2 || dueDate.length < 2) {
    alert("Please Fill In All The Boxes!");
  } else {
    createNewToDo(title, desc, dueDate, prio, done);
  }
  fillToDoList();
};

// Fill ToDo List
function fillToDoList() {
  let list = renderBodyElements.todoList;
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  allToDoArray.forEach((item) => {
    createToDoItem(item);
    console.table(item);
  });
}

// Function for generating a new ToDo item
function createToDoItem(todoObject) {
  // Div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Span Title
  const title = document.createElement("span");
  title.classList.add("todo-item-title");
  title.innerText = todoObject.Title;

  // Span Desc
  const descr = document.createElement("span");
  descr.classList.add("todo-item-desc");
  descr.innerText = todoObject.Description;

  // Span Date
  const dueDate = document.createElement("span");
  dueDate.classList.add("todo-item-dueDate");
  dueDate.innerText = todoObject.DueDate;

  // Span Priority
  const priority = document.createElement("span");
  priority.classList.add("todo-item-priority");
  priority.innerText = todoObject.Priority;

  // list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.append(title, descr, dueDate, priority);
  todoDiv.appendChild(newTodo);

  //btns
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class='fas fa-check'></i>";
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "<i class='fas fa-trash'></i>";
  removeBtn.classList.add("remove-btn");
  todoDiv.appendChild(removeBtn);

  // Append to Todo LIST
  renderBodyElements.todoList.appendChild(todoDiv);
}

// Gets Current Project name
// function getCurrentProject() {
//   let main = document.querySelector(".main-content");
//   let current = main.getAttribute("id");
//   return current;
// }
