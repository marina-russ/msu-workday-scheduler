// ********************************************************************* //
// * 17:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR17 = document.getElementById('todo-form-hour-17');
const todoInputHR17 = document.getElementById('todo-input-hour-17');
const todoItemsListHR17 = document.getElementById('todo-item-list-hour-17'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR17 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR17.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR17(todoInputHR17.value);
});

// * takes new value and pushes into todo array
function addTodoHR17(dateItemHR17) {
  // if item is not empty
  if (dateItemHR17 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR17 = {
      id: Date.now(),
      name: dateItemHR17,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR17.push(todoObjectHR17);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR17(todosArrayHR17);
    // clears the input box value so new todos can be entered
    todoInputHR17.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR17(todosArrayHR17) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR17.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR17.forEach(function (dateItemHR17) {
    // makes an <li> element 
    const liHR17 = document.createElement('li');
    // sets <li> attributes
    liHR17.setAttribute('class', 'dateItemHR17');
    liHR17.setAttribute('data-key', dateItemHR17.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR17.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR17.completed === true) {
      liHR17.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR17.innerHTML = `
      <input type="checkbox" class="checkbox li-hour" ${checked}>
      ${dateItemHR17.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR17.append(liHR17);
  });
}

// * sets values in localStorage
function setLocalStorageHR17(todosArrayHR17) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR17', JSON.stringify(todosArrayHR17));
  // shows values on screen when they are added to localStorage
  renderTodosHR17(todosArrayHR17);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR17() {
  const storageRefHR17 = localStorage.getItem('todosArrayHR17');
  // if storage Reference variable exists,
  if (storageRefHR17) {
    // uses JSON to convert string values back into array
    todosArrayHR17 = JSON.parse(storageRefHR17);
    // stores converted values in todosArray
    renderTodosHR17(todosArrayHR17);
  }
}

// * toggles completion status
function toggleHR17(id) {
  todosArrayHR17.forEach(function (dateItemHR17) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR17.id == id) {
      // toggles the value
      dateItemHR17.completed = !dateItemHR17.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR17(todosArrayHR17);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR17(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR17 = todosArrayHR17.filter(function (dateItemHR17) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR17.id != id;
  });
  // update the localStorage
  setLocalStorageHR17(todosArrayHR17);
}

// calls function
getLocalStorageHR17();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR17.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR17(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR17(event.target.parentElement.getAttribute('data-key'));
  }
});
