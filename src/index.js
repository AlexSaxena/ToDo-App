import {
  createNewToDo,
  checkToDo,
  allToDoArray,
  getLocalTodos,
  removeLocalTodos,
} from "./createToDo";

console.log("Greetings, General Kenobi!");
let popup = document.getElementById("popup");

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
  let filterOption = document.querySelector(".select-filter");
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
    filterOption,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  getLocalTodos();
  fillToDoList();
});

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

// Listener for Filter Options
renderBodyElements.filterOption.addEventListener("click", filterToDo);

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
  renderBodyElements.formPriority.value = "Low";
};

// Get Values from Form and Send to ToDo Func..
const newToDo = () => {
  let title = renderBodyElements.formTitle.value;
  let desc = renderBodyElements.formDesc.value;
  let dueDate = renderBodyElements.formDueDate.value;
  let prio = renderBodyElements.formPriority.value;
  let done = false;
  // let current = getCurrentProject();
  if (
    title.length < 2 ||
    desc.length < 2 ||
    dueDate.length < 2 ||
    prio.length < 1
  ) {
    alert("Please Fill In All The Boxes!");
  } else {
    createNewToDo(title, desc, dueDate, prio, done);
  }
  fillToDoList();
};

// Fill ToDo List
function fillToDoList(filter = "all") {
  let list = renderBodyElements.todoList;
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  if (filter == "all") {
    allToDoArray.forEach((item) => {
      createToDoItem(item);
    });
  } else if (filter == "completed") {
    allToDoArray.forEach((item) => {
      if (item.Completed == true) {
        createToDoItem(item);
      }
    });
  } else if (filter == "uncompleted") {
    allToDoArray.forEach((item) => {
      if (item.Completed == false) {
        createToDoItem(item);
      }
    });
  }
}

// Function for generating a new ToDo item
function createToDoItem(todoObject) {
  // Div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.setAttribute("id", "todo" + todoObject.Id);
  if (todoObject.Completed == true) {
    todoDiv.classList.add("todo-line");
  }

  // Span Title
  const title = document.createElement("span");
  title.classList.add("todo-item-title");
  title.innerText = todoObject.Title + " |";

  // Span Desc
  const descr = document.createElement("span");
  descr.classList.add("todo-item-desc");
  descr.innerText = todoObject.Description;

  // Span Date
  const dueDate = document.createElement("span");
  dueDate.classList.add("todo-item-dueDate");
  dueDate.innerText = "| " + todoObject.DueDate;

  // Span Priority
  const priority = document.createElement("span");
  priority.classList.add("todo-item-priority");
  priority.innerText = "| " + todoObject.Priority;

  // list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.append(title, descr, dueDate, priority);
  todoDiv.appendChild(newTodo);

  //btns
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = "<i class='fas fa-check'></i>";
  completedBtn.classList.add("complete-btn");
  completedBtn.addEventListener("click", () => completed(todoObject.Id));
  todoDiv.appendChild(completedBtn);

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "<i class='fas fa-trash'></i>";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", function () {
    removeLocalTodos(todoObject);
    removeToDo(todoObject.Id);
  });
  todoDiv.appendChild(removeBtn);

  // Append to Todo LIST
  renderBodyElements.todoList.appendChild(todoDiv);
}

// Function for removing ToDo
function removeToDo(ToDoId) {
  let removeIndex = allToDoArray
    .map(function (todoItem) {
      return todoItem.Id;
    })
    .indexOf(ToDoId);
  allToDoArray.splice(removeIndex, 1);
  fillToDoList();
}

// Function for Adding ID line-through;
function completed(ToDoId) {
  let completedIndex = allToDoArray
    .map(function (todoItem) {
      return todoItem.Id;
    })
    .indexOf(ToDoId);

  let currentToDoId = allToDoArray[completedIndex].Id;

  if (allToDoArray[completedIndex].Completed == false) {
    allToDoArray[completedIndex].Completed = true;
    changeStatus(true, currentToDoId);
  } else if (allToDoArray[completedIndex].Completed == true) {
    allToDoArray[completedIndex].Completed = false;
    changeStatus(false, currentToDoId);
  }
}

function changeStatus(status, index) {
  let current = document.querySelector(`#todo${index}`);
  if (status == false || status == true) {
    current.classList.toggle("todo-line");
  }
}

function filterToDo() {
  if (renderBodyElements.filterOption.value == "all") {
    fillToDoList("all");
  } else if (renderBodyElements.filterOption.value == "completed") {
    fillToDoList("completed");
  } else if (renderBodyElements.filterOption.value == "uncompleted") {
    fillToDoList("uncompleted");
  }
}

// Gets Current Project name
// function getCurrentProject() {
//   let main = document.querySelector(".main-content");
//   let current = main.getAttribute("id");
//   return current;
// }
