// ********************************************************************* //
// * 8:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR8 = document.getElementById('todo-form-hour-8');
const todoInputHR8 = document.getElementById('todo-input-hour-8');
const todoItemsListHR8 = document.getElementById('todo-item-list-hour-8'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR8 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR8.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR8(todoInputHR8.value);
});

// * takes new value and pushes into todo array
function addTodoHR8(dateItemHR8) {
  // if item is not empty
  if (dateItemHR8 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR8 = {
      id: Date.now(),
      name: dateItemHR8,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR8.push(todoObjectHR8);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR8(todosArrayHR8);
    // clears the input box value so new todos can be entered
    todoInputHR8.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR8(todosArrayHR8) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR8.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR8.forEach(function (dateItemHR8) {
    // makes an <li> element 
    const liHR8 = document.createElement('li');
    // sets <li> attributes
    liHR8.setAttribute('class', 'dateItemHR8');
    liHR8.setAttribute('data-key', dateItemHR8.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR8.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR8.completed === true) {
      liHR8.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR8.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR8.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR8.append(liHR8);
  });
}

// * sets values in localStorage
function setLocalStorageHR8(todosArrayHR8) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR8', JSON.stringify(todosArrayHR8));
  // shows values on screen when they are added to localStorage
  renderTodosHR8(todosArrayHR8);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR8() {
  const storageRefHR8 = localStorage.getItem('todosArrayHR8');
  // if storage Reference variable exists,
  if (storageRefHR8) {
    // uses JSON to convert string values back into array
    todosArrayHR8 = JSON.parse(storageRefHR8);
    // stores converted values in todosArray
    renderTodosHR8(todosArrayHR8);
  }
}

// * toggles completion status
function toggleHR8(id) {
  todosArrayHR8.forEach(function (dateItemHR8) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR8.id == id) {
      // toggles the value
      dateItemHR8.completed = !dateItemHR8.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR8(todosArrayHR8);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR8(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR8 = todosArrayHR8.filter(function (dateItemHR8) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR8.id != id;
  });
  // update the localStorage
  setLocalStorageHR8(todosArrayHR8);
}

// calls function
getLocalStorageHR8();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR8.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR8(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR8(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 9:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR9 = document.getElementById('todo-form-hour-9');
const todoInputHR9 = document.getElementById('todo-input-hour-9');
const todoItemsListHR9 = document.getElementById('todo-item-list-hour-9'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR9 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR9.addEventListener('submit', function(event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodo(todoInputHR9.value);
});

// * takes new value and pushes into todo array
function addTodo(dateItemHR9) {
  // if item is not empty
  if (dateItemHR9 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR9 = {
      id: Date.now(),
      name: dateItemHR9,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR9.push(todoObjectHR9);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorage(todosArrayHR9);
    // clears the input box value so new todos can be entered
    todoInputHR9.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodos(todosArrayHR9) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR9.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR9.forEach(function (dateItemHR9) {
    // makes an <li> element 
    const liHR9 = document.createElement('li');
    // sets <li> attributes
    liHR9.setAttribute('class', 'dateItemHR9');
    liHR9.setAttribute('data-key', dateItemHR9.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR9.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR9.completed === true) {
      liHR9.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR9.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR9.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR9.append(liHR9);
  });
}

// * sets values in localStorage
function setLocalStorage(todosArrayHR9) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR9', JSON.stringify(todosArrayHR9));
  // shows values on screen when they are added to localStorage
  renderTodos(todosArrayHR9);
}

// * grabs values from localStorage after page refresh
function getLocalStorage() {
  const storageRefHR9 = localStorage.getItem('todosArrayHR9');
  // if storage Reference variable exists,
  if (storageRefHR9) {
    // uses JSON to convert string values back into array
    todosArrayHR9 = JSON.parse(storageRefHR9);
    // stores converted values in todosArray
    renderTodos(todosArrayHR9);
  }
}

// * toggles completion status
function toggle(id) {
  todosArrayHR9.forEach(function (dateItemHR9) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR9.id == id) {
      // toggles the value
      dateItemHR9.completed = !dateItemHR9.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorage(todosArrayHR9);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodo(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR9 = todosArrayHR9.filter(function (dateItemHR9) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR9.id != id;
  });
  // update the localStorage
  setLocalStorage(todosArrayHR9);
}

// calls function
getLocalStorage();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR9.addEventListener('click', function (event) {
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

// ********************************************************************* //
// * 10:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR10 = document.getElementById('todo-form-hour-10');
const todoInputHR10 = document.getElementById('todo-input-hour-10');
const todoItemsListHR10 = document.getElementById('todo-item-list-hour-10'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR10 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR10.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR10(todoInputHR10.value);
});

// * takes new value and pushes into todo array
function addTodoHR10(dateItemHR10) {
  // if item is not empty
  if (dateItemHR10 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR10 = {
      id: Date.now(),
      name: dateItemHR10,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR10.push(todoObjectHR10);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR10(todosArrayHR10);
    // clears the input box value so new todos can be entered
    todoInputHR10.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR10(todosArrayHR10) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR10.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR10.forEach(function (dateItemHR10) {
    // makes an <li> element 
    const liHR10 = document.createElement('li');
    // sets <li> attributes
    liHR10.setAttribute('class', 'dateItemHR10');
    liHR10.setAttribute('data-key', dateItemHR10.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR10.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR10.completed === true) {
      liHR10.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR10.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR10.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR10.append(liHR10);
  });
}

// * sets values in localStorage
function setLocalStorageHR10(todosArrayHR10) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR10', JSON.stringify(todosArrayHR10));
  // shows values on screen when they are added to localStorage
  renderTodosHR10(todosArrayHR10);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR10() {
  const storageRefHR10 = localStorage.getItem('todosArrayHR10');
  // if storage Reference variable exists,
  if (storageRefHR10) {
    // uses JSON to convert string values back into array
    todosArrayHR10 = JSON.parse(storageRefHR10);
    // stores converted values in todosArray
    renderTodosHR10(todosArrayHR10);
  }
}

// * toggles completion status
function toggleHR10(id) {
  todosArrayHR10.forEach(function (dateItemHR10) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR10.id == id) {
      // toggles the value
      dateItemHR10.completed = !dateItemHR10.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR10(todosArrayHR10);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR10(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR10 = todosArrayHR10.filter(function (dateItemHR10) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR10.id != id;
  });
  // update the localStorage
  setLocalStorageHR10(todosArrayHR10);
}

// calls function
getLocalStorageHR10();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR10.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR10(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR10(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 11:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR11 = document.getElementById('todo-form-hour-11');
const todoInputHR11 = document.getElementById('todo-input-hour-11');
const todoItemsListHR11 = document.getElementById('todo-item-list-hour-11'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR11 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR11.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR11(todoInputHR11.value);
});

// * takes new value and pushes into todo array
function addTodoHR11(dateItemHR11) {
  // if item is not empty
  if (dateItemHR11 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR11 = {
      id: Date.now(),
      name: dateItemHR11,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR11.push(todoObjectHR11);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR11(todosArrayHR11);
    // clears the input box value so new todos can be entered
    todoInputHR11.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR11(todosArrayHR11) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR11.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR11.forEach(function (dateItemHR11) {
    // makes an <li> element 
    const liHR11 = document.createElement('li');
    // sets <li> attributes
    liHR11.setAttribute('class', 'dateItemHR11');
    liHR11.setAttribute('data-key', dateItemHR11.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR11.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR11.completed === true) {
      liHR11.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR11.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR11.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR11.append(liHR11);
  });
}

// * sets values in localStorage
function setLocalStorageHR11(todosArrayHR11) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR11', JSON.stringify(todosArrayHR11));
  // shows values on screen when they are added to localStorage
  renderTodosHR11(todosArrayHR11);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR11() {
  const storageRefHR11 = localStorage.getItem('todosArrayHR11');
  // if storage Reference variable exists,
  if (storageRefHR11) {
    // uses JSON to convert string values back into array
    todosArrayHR11 = JSON.parse(storageRefHR11);
    // stores converted values in todosArray
    renderTodosHR11(todosArrayHR11);
  }
}

// * toggles completion status
function toggleHR11(id) {
  todosArrayHR11.forEach(function (dateItemHR11) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR11.id == id) {
      // toggles the value
      dateItemHR11.completed = !dateItemHR11.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR11(todosArrayHR11);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR11(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR11 = todosArrayHR11.filter(function (dateItemHR11) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR11.id != id;
  });
  // update the localStorage
  setLocalStorageHR11(todosArrayHR11);
}

// calls function
getLocalStorageHR11();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR11.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR11(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR11(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 12:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR12 = document.getElementById('todo-form-hour-12');
const todoInputHR12 = document.getElementById('todo-input-hour-12');
const todoItemsListHR12 = document.getElementById('todo-item-list-hour-12'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR12 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR12.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR12(todoInputHR12.value);
});

// * takes new value and pushes into todo array
function addTodoHR12(dateItemHR12) {
  // if item is not empty
  if (dateItemHR12 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR12 = {
      id: Date.now(),
      name: dateItemHR12,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR12.push(todoObjectHR12);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR12(todosArrayHR12);
    // clears the input box value so new todos can be entered
    todoInputHR12.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR12(todosArrayHR12) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR12.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR12.forEach(function (dateItemHR12) {
    // makes an <li> element 
    const liHR12 = document.createElement('li');
    // sets <li> attributes
    liHR12.setAttribute('class', 'dateItemHR12');
    liHR12.setAttribute('data-key', dateItemHR12.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR12.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR12.completed === true) {
      liHR12.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR12.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR12.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR12.append(liHR12);
  });
}

// * sets values in localStorage
function setLocalStorageHR12(todosArrayHR12) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR12', JSON.stringify(todosArrayHR12));
  // shows values on screen when they are added to localStorage
  renderTodosHR12(todosArrayHR12);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR12() {
  const storageRefHR12 = localStorage.getItem('todosArrayHR12');
  // if storage Reference variable exists,
  if (storageRefHR12) {
    // uses JSON to convert string values back into array
    todosArrayHR12 = JSON.parse(storageRefHR12);
    // stores converted values in todosArray
    renderTodosHR12(todosArrayHR12);
  }
}

// * toggles completion status
function toggleHR12(id) {
  todosArrayHR12.forEach(function (dateItemHR12) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR12.id == id) {
      // toggles the value
      dateItemHR12.completed = !dateItemHR12.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR12(todosArrayHR12);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR12(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR12 = todosArrayHR12.filter(function (dateItemHR12) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR12.id != id;
  });
  // update the localStorage
  setLocalStorageHR12(todosArrayHR12);
}

// calls function
getLocalStorageHR12();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR12.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR12(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR12(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 13:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR13 = document.getElementById('todo-form-hour-13');
const todoInputHR13 = document.getElementById('todo-input-hour-13');
const todoItemsListHR13 = document.getElementById('todo-item-list-hour-13'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR13 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR13.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR13(todoInputHR13.value);
});

// * takes new value and pushes into todo array
function addTodoHR13(dateItemHR13) {
  // if item is not empty
  if (dateItemHR13 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR13 = {
      id: Date.now(),
      name: dateItemHR13,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR13.push(todoObjectHR13);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR13(todosArrayHR13);
    // clears the input box value so new todos can be entered
    todoInputHR13.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR13(todosArrayHR13) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR13.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR13.forEach(function (dateItemHR13) {
    // makes an <li> element 
    const liHR13 = document.createElement('li');
    // sets <li> attributes
    liHR13.setAttribute('class', 'dateItemHR13');
    liHR13.setAttribute('data-key', dateItemHR13.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR13.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR13.completed === true) {
      liHR13.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR13.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR13.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR13.append(liHR13);
  });
}

// * sets values in localStorage
function setLocalStorageHR13(todosArrayHR13) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR13', JSON.stringify(todosArrayHR13));
  // shows values on screen when they are added to localStorage
  renderTodosHR13(todosArrayHR13);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR13() {
  const storageRefHR13 = localStorage.getItem('todosArrayHR13');
  // if storage Reference variable exists,
  if (storageRefHR13) {
    // uses JSON to convert string values back into array
    todosArrayHR13 = JSON.parse(storageRefHR13);
    // stores converted values in todosArray
    renderTodosHR13(todosArrayHR13);
  }
}

// * toggles completion status
function toggleHR13(id) {
  todosArrayHR13.forEach(function (dateItemHR13) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR13.id == id) {
      // toggles the value
      dateItemHR13.completed = !dateItemHR13.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR13(todosArrayHR13);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR13(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR13 = todosArrayHR13.filter(function (dateItemHR13) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR13.id != id;
  });
  // update the localStorage
  setLocalStorageHR13(todosArrayHR13);
}

// calls function
getLocalStorageHR13();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR13.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR13(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR13(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 14:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR14 = document.getElementById('todo-form-hour-14');
const todoInputHR14 = document.getElementById('todo-input-hour-14');
const todoItemsListHR14 = document.getElementById('todo-item-list-hour-14'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR14 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR14.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR14(todoInputHR14.value);
});

// * takes new value and pushes into todo array
function addTodoHR14(dateItemHR14) {
  // if item is not empty
  if (dateItemHR14 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR14 = {
      id: Date.now(),
      name: dateItemHR14,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR14.push(todoObjectHR14);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR14(todosArrayHR14);
    // clears the input box value so new todos can be entered
    todoInputHR14.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR14(todosArrayHR14) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR14.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR14.forEach(function (dateItemHR14) {
    // makes an <li> element 
    const liHR14 = document.createElement('li');
    // sets <li> attributes
    liHR14.setAttribute('class', 'dateItemHR14');
    liHR14.setAttribute('data-key', dateItemHR14.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR14.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR14.completed === true) {
      liHR14.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR14.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR14.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR14.append(liHR14);
  });
}

// * sets values in localStorage
function setLocalStorageHR14(todosArrayHR14) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR14', JSON.stringify(todosArrayHR14));
  // shows values on screen when they are added to localStorage
  renderTodosHR14(todosArrayHR14);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR14() {
  const storageRefHR14 = localStorage.getItem('todosArrayHR14');
  // if storage Reference variable exists,
  if (storageRefHR14) {
    // uses JSON to convert string values back into array
    todosArrayHR14 = JSON.parse(storageRefHR14);
    // stores converted values in todosArray
    renderTodosHR14(todosArrayHR14);
  }
}

// * toggles completion status
function toggleHR14(id) {
  todosArrayHR14.forEach(function (dateItemHR14) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR14.id == id) {
      // toggles the value
      dateItemHR14.completed = !dateItemHR14.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR14(todosArrayHR14);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR14(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR14 = todosArrayHR14.filter(function (dateItemHR14) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR14.id != id;
  });
  // update the localStorage
  setLocalStorageHR14(todosArrayHR14);
}

// calls function
getLocalStorageHR14();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR14.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR14(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR14(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 15:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR15 = document.getElementById('todo-form-hour-15');
const todoInputHR15 = document.getElementById('todo-input-hour-15');
const todoItemsListHR15 = document.getElementById('todo-item-list-hour-15'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR15 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR15.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR15(todoInputHR15.value);
});

// * takes new value and pushes into todo array
function addTodoHR15(dateItemHR15) {
  // if item is not empty
  if (dateItemHR15 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR15 = {
      id: Date.now(),
      name: dateItemHR15,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR15.push(todoObjectHR15);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR15(todosArrayHR15);
    // clears the input box value so new todos can be entered
    todoInputHR15.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR15(todosArrayHR15) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR15.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR15.forEach(function (dateItemHR15) {
    // makes an <li> element 
    const liHR15 = document.createElement('li');
    // sets <li> attributes
    liHR15.setAttribute('class', 'dateItemHR15');
    liHR15.setAttribute('data-key', dateItemHR15.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR15.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR15.completed === true) {
      liHR15.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR15.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR15.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR15.append(liHR15);
  });
}

// * sets values in localStorage
function setLocalStorageHR15(todosArrayHR15) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR15', JSON.stringify(todosArrayHR15));
  // shows values on screen when they are added to localStorage
  renderTodosHR15(todosArrayHR15);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR15() {
  const storageRefHR15 = localStorage.getItem('todosArrayHR15');
  // if storage Reference variable exists,
  if (storageRefHR15) {
    // uses JSON to convert string values back into array
    todosArrayHR15 = JSON.parse(storageRefHR15);
    // stores converted values in todosArray
    renderTodosHR15(todosArrayHR15);
  }
}

// * toggles completion status
function toggleHR15(id) {
  todosArrayHR15.forEach(function (dateItemHR15) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR15.id == id) {
      // toggles the value
      dateItemHR15.completed = !dateItemHR15.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR15(todosArrayHR15);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR15(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR15 = todosArrayHR15.filter(function (dateItemHR15) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR15.id != id;
  });
  // update the localStorage
  setLocalStorageHR15(todosArrayHR15);
}

// calls function
getLocalStorageHR15();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR15.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR15(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR15(event.target.parentElement.getAttribute('data-key'));
  }
});

// ********************************************************************* //
// * 16:00
// ********************************************************************* //

// links JS variables to HTML elements in DOM
const todoFormHR16 = document.getElementById('todo-form-hour-16');
const todoInputHR16 = document.getElementById('todo-input-hour-16');
const todoItemsListHR16 = document.getElementById('todo-item-list-hour-16'); // <ul> class

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArrayHR16 = [];

// *Stops page reload on submit, passes input value to addTodo()
todoFormHR16.addEventListener('submit', function (event) {
  // prevents page reload from 'submit' event
  event.preventDefault();
  // gets the value that user typed in the input box
  addTodoHR16(todoInputHR16.value);
});

// * takes new value and pushes into todo array
function addTodoHR16(dateItemHR16) {
  // if item is not empty
  if (dateItemHR16 !== '') {
    // makes an Object which has id, name, and completed properties
    const todoObjectHR16 = {
      id: Date.now(),
      name: dateItemHR16,
      completed: false
    };

    // adds todoObject to todosArray
    todosArrayHR16.push(todoObjectHR16);
    // sends value to setToLocalStorage(), which will call renderTodos()
    setLocalStorageHR16(todosArrayHR16);
    // clears the input box value so new todos can be entered
    todoInputHR16.value = '';
  }
}

// * renders each listed todo item on the screen with HTML attributes
function renderTodosHR16(todosArrayHR16) {
  // clears everything inside <ul>t that contains .todo-items, since we are going to re-loop through everything and don't want to duplicate all of the older items
  todoItemsListHR16.innerHTML = '';

  // runs through each item inside the todosArray and creates <li> for each
  todosArrayHR16.forEach(function (dateItemHR16) {
    // makes an <li> element 
    const liHR16 = document.createElement('li');
    // sets <li> attributes
    liHR16.setAttribute('class', 'dateItemHR16');
    liHR16.setAttribute('data-key', dateItemHR16.id); // aka time id

    // looks to see if item has 'checked' status (ternary operator)
    // adds .checked class to item if item.completed property is true
    const checked = dateItemHR16.completed ? 'checked' : null;
    // adds .checked to completed <li> elements, creates strike-through text decoration
    if (dateItemHR16.completed === true) {
      liHR16.classList.add('checked');
    }

    // adds HTML styling to new <li>'s that we add, also has template literal to dynamically enter needed values
    // uses back dashes to include the line breaks so HTML reads nicer
    liHR16.innerHTML = `
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
      ${dateItemHR16.name}
      <button class="delete-button">X</button>
    `;
    // adds new <li> to the <ul>!
    todoItemsListHR16.append(liHR16);
  });
}

// * sets values in localStorage
function setLocalStorageHR16(todosArrayHR16) {
  // uses JSON to convert array values into string; format is ('key', value)
  localStorage.setItem('todosArrayHR16', JSON.stringify(todosArrayHR16));
  // shows values on screen when they are added to localStorage
  renderTodosHR16(todosArrayHR16);
}

// * grabs values from localStorage after page refresh
function getLocalStorageHR16() {
  const storageRefHR16 = localStorage.getItem('todosArrayHR16');
  // if storage Reference variable exists,
  if (storageRefHR16) {
    // uses JSON to convert string values back into array
    todosArrayHR16 = JSON.parse(storageRefHR16);
    // stores converted values in todosArray
    renderTodosHR16(todosArrayHR16);
  }
}

// * toggles completion status
function toggleHR16(id) {
  todosArrayHR16.forEach(function (dateItemHR16) {
    // uses loose equality instead of strict here because one value is a number and one is a string
    if (dateItemHR16.id == id) {
      // toggles the value
      dateItemHR16.completed = !dateItemHR16.completed;
    }
  });
  // runs setLocalStorage() to update localStorage info
  setLocalStorageHR16(todosArrayHR16);
}

// * deletes item from todosArray
//then updates localStorage & user screen
function deleteTodoHR16(id) {
  // filters out <li> with the id and updates the todos array
  todosArrayHR16 = todosArrayHR16.filter(function (dateItemHR16) {
    // use loose inequality instead of strict here because one value is a number and one is a string
    return dateItemHR16.id != id;
  });
  // update the localStorage
  setLocalStorageHR16(todosArrayHR16);
}

// calls function
getLocalStorageHR16();

// * listens for any checkbox or delete button events, then passes data-key value
todoItemsListHR16.addEventListener('click', function (event) {
  // checks if event is about the checkbox
  if (event.target.type === 'checkbox') {
    // toggles event state between checkbox and !checkbox for styling
    toggleHR16(event.target.parentElement.getAttribute('data-key'));
  }

  // checks if event is about the delete button
  if (event.target.classList.contains('delete-button')) {
    // passes parent <li>'s data-key id value to deleteTodo()
    deleteTodoHR16(event.target.parentElement.getAttribute('data-key'));
  }
});

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
      <input type="checkbox" class="checkbox li-hour-9" ${checked}>
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