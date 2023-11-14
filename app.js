// VARIABLES 
let taskListArr = [];
const taskForm = document.getElementById("form")
const taskValue = document.getElementById("todoInput")
const todoList = document.getElementById("myTodoList") 
const removeAllTodo = document.querySelector("#clearAll")


let isLocal = localStorage.getItem("todoTaskList")

const renderTaskList = () => {
  todoList.innerHTML = ""
  taskListArr.map(item => {
    todoList.innerHTML += `
    <li class="todo" todo-id="${item.taskId}">
      <p>${item.taskName}</p>
      <div class="todo-actions">
        <span class="status status-ongoing">${item.taskStatus}</span>
        <a class="action action-edit" onClick="editTask(${item.taskId})">Edit
          <img src="./img/icon-edit.svg" alt="Edit">
        </a>
        <a class="action action-delete" id="deleteTaskBtn" onClick="deleteTask(${item.taskId})">Delete 
          <img src="./img/icon-delete-red.svg" alt="Delete">
        </a>
      </div>
    </li>
    `
  })
}

if(isLocal !== null) {
  taskListArr = JSON.parse(isLocal);
  renderTaskList()
}

// FUNCTION
const addTask = (e) => {
  e.preventDefault();
  // debugger;
  let taskItem = {
    taskId: taskListArr.length + 1,
    taskName: taskValue.value,
    taskStatus: 'On-going'
  }

  if(!taskValue.value) {
    alert('Please add your todo!')
    return
  }

  taskListArr.push(taskItem);
  localStorage.setItem("todoTaskList", JSON.stringify(taskListArr))
  taskValue.value = "";
  console.log(taskListArr)
  renderTaskList()
}

const deleteTask = (e) => {
  // debugger;
  let index = taskListArr.findIndex(item => item.taskId == e);
  console.log(index)
  taskListArr.splice(index, 1);
  renderTaskList();
}

const editTask = (e) => {
  let taskObj = taskListArr.find(item => item.taskId == e)
  taskValue.value = taskObj.taskName
}

const removeAllTask = () => {
  console.log('all task removed')
  taskListArr.splice(0)
  renderTaskList()
}

// CALLERS
taskForm.addEventListener("submit", addTask)
removeAllTodo.addEventListener("click", removeAllTask)






