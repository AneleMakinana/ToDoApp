// Get DOM elements
const nameInput = document.getElementById('name');
const todoInput = document.getElementById('middle2');
const todoForm = document.getElementById('middle1');
const todoList = document.getElementById('list');
const clearButton = document.querySelector('.clear');
const completeButtons = document.getElementsByClassName('co');
const deleteButtons = document.getElementsByClassName('de');

// Define array to hold todos
let todos = [];

// Load todos from local storage if available
if (localStorage.getItem('todos')) {
  todos = JSON.parse(localStorage.getItem('todos'));
  displayTodos();
}

// Function to display todos in the list
function displayTodos() {
  // Clear previous todos in the list
  todoList.innerHTML = '';

  // Loop through todos and create new DOM elements for each one
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `
      <i class="fa ${todo.completed ? 'fa-check-circle' : 'fa-circle-thin'} co" job="complete" id="${index}"></i>
      <p class="text ${todo.completed ? 'completed' : ''}">${todo.content}</p>
      <i class="fa fa-trash-o de" job="delete" id="${index}"></i>
    `;
    todoList.appendChild(li);
  });

  // Save updated todos to local storage
  localStorage.setItem('todos', JSON.stringify(todos));
}

