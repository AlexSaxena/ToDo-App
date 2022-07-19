import content from "./content";
import { createNewToDo, checkToDo } from "./createToDo";

console.log("Greetings, General Kenobi!");
content;

let popup = document.getElementById("popup");
// createNewToDo("a", "a", "a", "top", true);

const renderVariables = (function () {
  let openPopupBtn = document.querySelector(".btn-create-todo");
  let closePopupBtn = document.querySelector(".popup-btn-exit");
  let popup = document.getElementById("popup");
  return { openPopupBtn, closePopupBtn, popup };
})();

// Event Listeners For opening & Closing Form
renderVariables.openPopupBtn.addEventListener("click", () => {
  if (popup.classList.contains("open-popup")) {
    closePopup();
  } else {
    showPopup();
  }
});

renderVariables.closePopupBtn.addEventListener("click", () => {
  closePopup();
});

// Functions for Removing Open/Close Popup CLASS
const showPopup = () => {
  renderVariables.popup.classList.add("open-popup");
};
const closePopup = () => {
  renderVariables.popup.classList.remove("open-popup");
};

// document.querySelector(".show-items").addEventListener("click", () => {
//   checkToDo();
// });
