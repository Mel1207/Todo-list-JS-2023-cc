// VARIABLES
const form = document.getElementById('form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const todoItem = document.querySelectorAll('todo')
const clearBtn = document.querySelector('.btn-link')

// FUNCTIONS
const addTodo = (e) => {
  e.preventDefault();
  let val = todoInput.value

  if(val) {
    createTodo(val)
    displayAlert('Added new todo', 'success')
  } else {
    // alert('Please fill up fields!')
    displayAlert('Please fill all fields', 'error')
  }
  // CLEAR INPUT
  todoInput.value = null
}

const createTodo = (val) => {
  const li = document.createElement('li')
  li.classList.add('todo')
  li.innerHTML = `
    <p>${val}</p>
    <div class="todo-actions">
      <span class="status status-ongoing">On-going</span>
      <a class="action action-edit">Edit
        <img src="./img/icon-edit.svg" alt="Edit">
      </a>
      <a class="action action-delete">Delete 
        <img src="./img/icon-delete-red.svg" alt="Delete">
      </a>
    </div>
  `
  todoList.append(li)
}

const displayAlert = (msg, classStyle) => {
  console.log(`message: ${msg}, alert type: ${classStyle}`)
}

const removeAllTodo = () => {
  todoList.innerHTML = null
  displayAlert('All todos were removed', 'error')
}


const deleteTodo = (e) => {
  console.log(e.target.className)
} 

// CALL FUNCTION - EVENT LISTENERS
form.addEventListener('submit', addTodo)
clearBtn.addEventListener('click', removeAllTodo)
deleteBtn.addEventListener('click', deleteTodo)
