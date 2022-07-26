/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allToDoArray": () => (/* binding */ allToDoArray),
/* harmony export */   "checkToDo": () => (/* binding */ checkToDo),
/* harmony export */   "createNewToDo": () => (/* binding */ createNewToDo)
/* harmony export */ });
/*  factory Function to create new ToDo Items
    Every object Should have | Title, Description, Due Date, Priority, Checkbox(True == Completed), Id |

    For Testing
    createNewToDo("a", "a", "a", "top", true);
    let test1 = createNewToDo("b", "b", "b", "mid", true);
    let test2 = createNewToDo("c", "c", "c", "bottom", false);

*/

let id = 0;
let allToDoArray = [];

function generateId() {
  let test = id++;
  return test;
}

function createNewToDo(
  title,
  Desc,
  date,
  priority,
  completed = false,
  currentProject = "standard"
) {
  let todo = {
    Title: title,
    Description: Desc,
    DueDate: date,
    Priority: priority,
    Completed: completed,
    Id: generateId(),
    CurrentProject: currentProject,
  };
  allToDoArray.push(todo);

  return todo;
}

function checkToDo() {
  if (allToDoArray.length < 1) {
    return console.log("empty");
  }
  allToDoArray.forEach((item) => {
    console.table(item);
  });
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");


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
  (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.checkToDo)();
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
    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.createNewToDo)(title, desc, dueDate, prio, done);
  }
  fillToDoList();
};

// Fill ToDo List
function fillToDoList() {
  let list = renderBodyElements.todoList;
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray.forEach((item) => {
    createToDoItem(item);
    console.table(item);
  });
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

  let removeBtn = document.createElement("button");
  removeBtn.innerHTML = "<i class='fas fa-trash'></i>";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => removeToDo(todoObject.Id));
  todoDiv.appendChild(removeBtn);

  // Append to Todo LIST
  renderBodyElements.todoList.appendChild(todoDiv);
}

// Function for removing ToDo
function removeToDo(ToDoId) {
  let removeIndex = _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray.map(function (todoItem) {
      return todoItem.Id;
    })
    .indexOf(ToDoId);
  _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray.splice(removeIndex, 1);

  fillToDoList();
}

// Function for Adding ID line-through;
function completed(ToDoId) {
  let completedIndex = _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray.map(function (todoItem) {
      return todoItem.Id;
    })
    .indexOf(ToDoId);

  let currentToDoId = _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray[completedIndex].Id;

  if (_createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray[completedIndex].Completed == false) {
    _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray[completedIndex].Completed = true;
    changeStatus(true, currentToDoId);
  } else if (_createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray[completedIndex].Completed == true) {
    _createToDo__WEBPACK_IMPORTED_MODULE_0__.allToDoArray[completedIndex].Completed = false;
    changeStatus(false, currentToDoId);
  }
}

function changeStatus(status, index) {
  let current = document.querySelector(`#todo${index}`);
  if (status == false || status == true) {
    current.classList.toggle("todo-line");
  }
}

// Gets Current Project name
// function getCurrentProject() {
//   let main = document.querySelector(".main-content");
//   let current = main.getAttribute("id");
//   return current;
// }

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map