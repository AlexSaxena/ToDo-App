import content from "./content";
import { createNewToDo, checkToDo } from "./createToDo";

console.log("Greetings, General Kenobi!");
content;

let popup = document.getElementById("popup");
// createNewToDo("a", "a", "a", "top", true);

const renderBodyElements = (function () {
  let openPopupBtn = document.querySelector(".btn-create-todo");
  let closePopupBtn = document.querySelector(".popup-btn-exit");
  let popup = document.getElementById("popup");
  let formTitle = document.querySelector("#title");
  let formDesc = document.querySelector("#description");
  let formPriority = document.querySelector("#priority");
  let formDueDate = document.querySelector("#duedate");
  return {
    openPopupBtn,
    closePopupBtn,
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

const resetForm = () => {
  renderBodyElements.formTitle.value = null;
  renderBodyElements.formDesc.value = null;
  renderBodyElements.formDueDate.value = null;
  renderBodyElements.formPriority.value = "low";
};

// Listeners
renderBodyElements.closePopupBtn.addEventListener("click", () => {
  closePopup();
  resetForm();
});

// Functions for Removing Open/Close Popup CLASS
const showPopup = () => {
  renderBodyElements.popup.classList.add("open-popup");
};
const closePopup = () => {
  renderBodyElements.popup.classList.remove("open-popup");
};

// document.querySelector(".show-items").addEventListener("click", () => {
//   checkToDo();
// });
