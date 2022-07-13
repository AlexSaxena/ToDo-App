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
  todo = {
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
