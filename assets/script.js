// ********************************************************************* //
// SCRIPT STATUS
// ********************************************************************* //

// * Display current date & time w/date.fns
// * Highlight current hour's row; Shade past hour rows; & Shade#2 future hour rows

// ? Task items can be entered, saved, and deleted
// ? Saved task items do not disappear on page refresh
// * Enter/Save/Delete task items for multiple hours of the workday
// * Use expand button to hide user-input when it is not needed

// ********************************************************************* //
// ADD, SAVE, & DELETE TODO ITEMS
// ********************************************************************* //

// link JS variables to HTML elements in DOM
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
  // if item is not empty
  if (item !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObject = {
      id: Date.now(),
      name: item,
      completed: false
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

// * function to set values in localStorage
function setLocalStorage(todosArray) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
  // shows values on screen when they are added to localStorage
  renderTodos(todosArray);
}

// * function to get values from localStorage after page refresh;
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

// * function to toggle completion status
function toggle(id) {
  todosArray.forEach(function(item) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (item.id == id) {
      // toggles the value
      item.completed = !item.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorage(todosArray);
}

// * function to delete item from todosArray
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

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsList.addEventListener('click', function(event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});







