// ********************************************************************* //
// SCRIPT STATUS
// ********************************************************************* //

// ? Display current date & time
// * Highlight current hour's row; Shade past hour rows; & Shade#2 future hour rows

// ? Task items can be entered, saved, and deleted
// ? Saved task items do not disappear on page refresh
// * Enter/Save/Delete events for multiple hours of the workday

// ********************************************************************* //
// TIME LIBRARY
// ********************************************************************* //
// gets today's date from moment.js
// ll locale date format = Feb 26, 2021
let nowDate = moment().format('ll');
// LT locale time format = 6:17pm 
let nowTime = moment().format('LT');

// * creates <h2> to shows current date 
window.addEventListener('load', function () {
  // creates new h2 element
  let h2El = document.createElement('h2');
  // places date text into h2
  h2El.innerHTML = nowDate;
  // attaches new h2 element to existing <div>
  document.getElementById('today-div').appendChild(h2El);
  }
);

// // * creates <h3> to shows current time 
// window.addEventListener('load', function () {
//   // creates new h2 element
//   let h3El = document.createElement('h3');
//   // places date text into h2
//   h3El.innerHTML = nowTime;
//   // attaches new h2 element to existing <div>
//   document.getElementById('today-div').appendChild(h3El);
// }
// );

// ********************************************************************* //
// ADD, SAVE, & DELETE TODO ITEMS
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArray = [];

// *Stops page reload on submit, passes input value to addTodo()
todoForm.addEventListener('submit', function(event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodo(todoInput.value);
});

// * takes new value and pushes into todo array

function addTodo(item) {
  // TODO: this is where item value is set, correct? i put it in as an empty parameter but then the following code assigns it a value.
  // if item is not empty
  if (item !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObject = {
      id: Date.now(),
      name: item,
    };

    // adds todoObject to todosArray
    todosArray.push(todoObject);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorage(todosArray); 
    // clears the input box value so new todos can be entered
    todoInput.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodos(todosArray) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsList.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArray.forEach(function(item) {
    // makes an <li> element 
    const li = document.createElement('li');
    // sets <li> attributes
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = item.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (item.completed === true) {
      li.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsList.append(li);
  });
}

// * sets values in localStorage
function setLocalStorage(todosArray) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
  // shows values on screen when they are added to localStorage
  renderTodos(todosArray);
}

// * grabs values from localStorage after page refresh
function getLocalStorage() {
  const storageRef = localStorage.getItem('todosArray');
  // if storage Reference variable exists,
  if (storageRef) {
    // uses JSON to convert string values back into array
    todosArray = JSON.parse(storageRef);
    // stores converted values in todosArray
    renderTodos(todosArray);
  }
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodo(id) {
  // filters out <li> with the id and updates the todos array
  todosArray = todosArray.filter(function(item) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return item.id != id;
  });
  // update the localStorage
  setLocalStorage(todosArray);
}

// calls function
getLocalStorage();

// ********************************************************************* //
// MULTIPLE HOURS TO HANDLE
// ********************************************************************* //










