const now = new Date();

const date = now.toDateString();
const time = now.toLocaleTimeString();

const dateTimeElement = document.createElement('p');
dateTimeElement.innerText = `${date} - ${time}`;
const topSection = document.querySelector('.top');
topSection.appendChild(dateTimeElement);

setInterval(() => {
  const now = new Date();
  const date = now.toDateString();
  const time = now.toLocaleTimeString();
  dateTimeElement.innerText = `${date} - ${time}`;
}, 1000);


function addTodo() {
  const todoText = document.getElementById("middle2").value;
  if (todoText === "") {
    alert("Please enter a ToDo item");
    return;
  }
  const newTodo = document.createElement("li");
  newTodo.innerHTML = `
    
    <p class="text">${todoText}</p>
    <i class="fa fa-pencil-square-o edit" job="edit"></i>
    <i class="fa fa-trash-o de" job="delete"></i>
  `;
  document.getElementById("list").appendChild(newTodo);
  document.getElementById("middle2").value = "";
}

function editTodo() {
  const todoItem = this.parentNode;
  const todoTextElement = todoItem.querySelector(".text");
  const todoText = todoTextElement.textContent;
  const newTodoText = prompt("Edit ToDo item:", todoText);
  if (newTodoText === null || newTodoText === "") {
    return;
  }
  todoTextElement.textContent = newTodoText;
}

function deleteTodo() {
  const todoItem = this.parentNode;
  todoItem.remove();
}

function completeTodo() {
  const todoItem = this.parentNode;
  todoItem.classList.toggle("completed");
}

document.getElementById("middle1").addEventListener("submit", function(event) {
  event.preventDefault();
  addTodo();

  clearButton.addEventListener('click', () => {
    localStorage.removeItem('todos');
    todos = [];
    
  });
});

const todoList = document.getElementById("list");
todoList.addEventListener("click", function(event) {
  const target = event.target;
  if (target.classList.contains("edit")) {
    editTodo.call(target);
  } else if (target.classList.contains("de")) {
    deleteTodo.call(target);
  } else if (target.classList.contains("co")) {
    completeTodo.call(target);
  }
});


