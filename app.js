// VARIABLES 
let taskListArr = [];
const taskForm = document.getElementById("form")
const taskValue = document.getElementById("todoInput")
const todoList = document.getElementById("myTodoList") 
const testBtn = document.querySelector('#testBtn')



// FUNCTION
const addTask = (e) => {
  e.preventDefault();
  // debugger;
  let taskItem = {
    taskId: taskListArr.length + 1,
    taskName: taskValue.value,
    taskStatus: 'On-going'
  }
  taskListArr.push(taskItem);
  taskValue.value = "";
  console.log(taskListArr)
  renderTaskList()
}

const renderTaskList = () => {
  todoList.innerHTML = ""
  taskListArr.map(item => {
    todoList.innerHTML += `
    <li class="todo" todo-id="${item.taskId}">
      <p>${item.taskName}</p>
      <div class="todo-actions">
        <span class="status status-ongoing">${item.taskStatus}</span>
        <a class="action action-edit">Edit
          <img src="./img/icon-edit.svg" alt="Edit">
        </a>
        <a class="action action-delete" id="deleteTaskBtn">Delete 
          <img src="./img/icon-delete-red.svg" alt="Delete">
        </a>
      </div>
    </li>
    `
  })
}

const deleteTask = (e) => {
  // e.target.parentElement.parentElement.remove()
  // todoList.innerHTML = ""
  const selectedTodo = e.target.parentElement.parentElement.getAttribute("todo-id")

  taskListArr.filter(item => item.taskId !== selectedTodo)

  console.log(taskListArr)
  // renderTaskList()
}


// CALLERS
taskForm.addEventListener("submit", addTask)
todoList.addEventListener('click', deleteTask)
// testBtn.addEventListener('click', checkButtonArr)



