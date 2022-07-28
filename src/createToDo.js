/*  factory Function to create new ToDo Items
    Every object Should have | Title, Description, Due Date, Priority, Checkbox(True == Completed), Id |

    For Testing
    createNewToDo("Title |", "Description", "| Due Date", "| Priority");
    let test1 = createNewToDo("b", "b", "b", "mid", true);
    let test2 = createNewToDo("c", "c", "c", "bottom", false);

*/

let allToDoArray = [];

function generateId() {
  let randomId = Math.floor(Math.random() * 100);
  let alpha = ["A", "a", "B", "b", "C", "c"];
  let randomAlphaIndex = Math.floor(Math.random() * 6);
  let randomAlpha = alpha[randomAlphaIndex];
  let UID = randomAlpha + randomId;
  return UID;
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
  saveLocalTodos(todo);
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

function saveLocalTodos(todo) {
  // first check if Storage Exist
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (item) {
    allToDoArray.push(item);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let pos = todos
    .map(function (e) {
      return e.Id;
    })
    .indexOf(todo.Id);

  todos.splice(pos, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export {
  createNewToDo,
  checkToDo,
  allToDoArray,
  getLocalTodos,
  removeLocalTodos,
};
