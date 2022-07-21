/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (console.log("Hello There!"));


/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allToDoArray": () => (/* binding */ allToDoArray),
/* harmony export */   "checkToDo": () => (/* binding */ checkToDo),
/* harmony export */   "createNewToDo": () => (/* binding */ createNewToDo),
/* harmony export */   "generateId": () => (/* binding */ generateId)
/* harmony export */ });
/*  factory Function to create new ToDo Items
    Every object Should have | Title, Description, Due Date, Priority, Checkbox(True == Completed), Id |

    For Testing
    createNewToDo("a", "a", "a", "top", true);
    let test1 = createNewToDo("b", "b", "b", "mid", true);
    let test2 = createNewToDo("c", "c", "c", "bottom", false);

*/

let id = 1;
let allToDoArray = [];

function generateId() {
  let test = id++;
  return test;
}

function createNewToDo(title, Desc, date, priority, completed = false) {
  let todo = {
    Title: title,
    Description: Desc,
    DueDate: date,
    Priority: priority,
    Completed: completed,
    Id: generateId(),
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
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ "./src/content.js");
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");



console.log("Greetings, General Kenobi!");
_content__WEBPACK_IMPORTED_MODULE_0__["default"];

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
  return {
    openPopupBtn,
    closePopupBtn,
    newToDoItem,
    popup,
    formTitle,
    formDesc,
    formPriority,
    formDueDate,
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
  (0,_createToDo__WEBPACK_IMPORTED_MODULE_1__.checkToDo)();
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

const newToDo = () => {
  let title = renderBodyElements.formTitle.value;
  let desc = renderBodyElements.formDesc.value;
  let dueDate = renderBodyElements.formDueDate.value;
  let prio = renderBodyElements.formPriority.value;
  let done = false;
  (0,_createToDo__WEBPACK_IMPORTED_MODULE_1__.createNewToDo)(title, desc, dueDate, prio, done);
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map