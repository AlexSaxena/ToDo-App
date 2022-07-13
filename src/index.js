import content from "./content";
// import "./styles/main.css";
import { createNewToDo, checkToDo } from "./createToDo";
content;
console.log("Greetings, General Kenobi!");

document.querySelector(".create-items").addEventListener("click", () => {
  createNewToDo("a", "a", "a", "top", true);
});

document.querySelector(".show-items").addEventListener("click", () => {
  checkToDo();
});
