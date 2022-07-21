import content from "./content";
import { createNewToDo, checkToDo } from "./createToDo";

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
  checkToDo();
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
  createNewToDo(title, desc, dueDate, prio, done);
};
