// ********************************************************************* //
// TIME LIBRARY
// ********************************************************************* //
// gets today's date from moment.js
// ll locale date format = Feb 26, 2021
let todayDate = moment().format('ll');
// LT locale time format = 6:17pm 
let todayTime = moment().format('LT');

// * creates <h2> to shows current date 
window.addEventListener('load', function () {
  // creates new h2 element
  let h2El = document.createElement('h2');
  // places date text into h2
  h2El.innerHTML = todayDate;
  // attaches new h2 element to existing <div>
  document.getElementById('today-div').appendChild(h2El);
});

// * creates <h3> to shows current time 
window.addEventListener('load', function () {
  // creates new h2 element
  let h3El = document.createElement('h3');
  // places date text into h2
  h3El.innerHTML = todayTime;
  // attaches new h2 element to existing <div>
  document.getElementById('today-div').appendChild(h3El);
});

// ********************************************************************* //
// CHANGE STYLE BASED ON PAST-PRESENT-FUTURE
// ********************************************************************* //

// GET HOUR WITHOUT MINUTES
// take current time - turn to string - pull first character
let currentHourExact = moment().format('LT'); // 10:57 AM
// change current time to a string, then split the string at : character to return the single- or double-digit hour number, FINALLY use parseInt to turn back into a number so military time math works
let currentHourString = parseInt(currentHourExact.toString().split(':')[0]); // "10"
// add 12h to turn into military time
if (currentHourString < 8) {
  currentHourString += 12;
  console.log('current hour is:', currentHourString);
  // ? ============ i now have the current hour to compare against all time blocks
}

// links JS variables to HTML elements in DOM
const todoForm = document.querySelector('.todo-form'); // <form>
const todoInput = document.querySelector('.todo-input'); // <input>
const todoItemsList = document.querySelector('.todo-items'); // <ul>

// creates array to store todo objects
// the todoObject & properties are created inside addTodo()
let todosArray = [];

// TODO: CREATE AN ARRAY WITH ALL TIME BLOCK NUMBERS

// let masterTimeBlockArray = []
// // connect JS variable to HTML <form> element with id #todo-form-hour-#
// let timeBlockHour = document.getElementById(`todo-form-hour-${currentHourString}`);
// // look at all <form>s and for each, push their child <input>'s data-hour attribute into the masterArray
// timeBlockHour.firstElementChild.forEach(function(getAttribute('data-hour') {
//   // push values into array
//   // why the red squiggles?
// }));
// get the input element with relevant hour-number
// let numberCurrentHour = document.getElementById(`todo-input-hour-${currentHourString}`);
// // pull the data-hour info from that
// let comparisonNumber = numberCurrentHour.getAttribute("data-hour");
//     console.log("compNumb is:", comparisonNumber);
// // select each time block row, so i can run forEach() on them
// var masterTimeBlocksArray = document.getElementById(`todo-form-hour-${currentHourString}`);
// console.log(masterTimeBlocksArray);
// // todo: append style class 
// masterTimeBlocksArray.forEach(function () {
//   if (currentHourString < comparisonTimeBlockNumber) {
//     console.log('add past hour styling');
//   } else if (currentHourString > comparisonTimeBlockNumber) {
//     console.log('add future hour styling');
//   } else {
//     console.log('add current hour styling')
//   };
// });

// * link JS variable to HTML div
let divEl8 = document.getElementById('task-area-hour-8');
let divEl9 = document.getElementById('task-area-hour-9');
let divEl10 = document.getElementById('task-area-hour-10');
let divEl11 = document.getElementById('task-area-hour-11');
let divEl12 = document.getElementById('task-area-hour-12');
let divEl13 = document.getElementById('task-area-hour-13');
let divEl14 = document.getElementById('task-area-hour-14');
let divEl15 = document.getElementById('task-area-hour-15');
let divEl16 = document.getElementById('task-area-hour-16');
let divEl17 = document.getElementById('task-area-hour-17');

// * assign numeric value to each time block
let taskAreaBlockHour8 = 8;
let taskAreaBlockHour9 = 9;
let taskAreaBlockHour10 = 10;
let taskAreaBlockHour11 = 11;
let taskAreaBlockHour12 = 12;
let taskAreaBlockHour13 = 13;
let taskAreaBlockHour14 = 14;
let taskAreaBlockHour15 = 15;
let taskAreaBlockHour16 = 16;
let taskAreaBlockHour17 = 17;

// * Determine whether each time block is in the past, present, or future

if (taskAreaBlockHour8 < currentHourString) {
  console.log('8am: ','add past hour styling');
  divEl8.classList.add('past');
} else if (taskAreaBlockHour8 > currentHourString) {
  console.log('8am: ','add future hour styling');
  divEl8.classList.add('future');
} else {
  console.log('8am: ','add current hour styling');
  divEl8.classList.add('present');
}

if (taskAreaBlockHour9 < currentHourString) {
  console.log('9am: ','add past hour styling');
  divEl9.classList.add('past');
} else if (taskAreaBlockHour9 > currentHourString) {
  console.log('9am: ','add future hour styling');
  divEl9.classList.add('future');
} else {
  console.log('9am: ','add current hour styling');
  divEl9.classList.add('present');
}

if (taskAreaBlockHour10 < currentHourString) {
  console.log('10am: ','add past hour styling');
  divEl10.classList.add('past');
} else if (taskAreaBlockHour10 > currentHourString) {
  console.log('10am: ','add future hour styling');
  divEl10.classList.add('future');
} else {
  console.log('10am: ','add current hour styling');
  divEl10.classList.add('present');
}

if (taskAreaBlockHour11 < currentHourString) {
  console.log('11am: ','add past hour styling');
  divEl11.classList.add('past');
} else if (taskAreaBlockHour11 > currentHourString) {
  console.log('11am: ','add future hour styling');
  divEl11.classList.add('future');
} else {
  console.log('11am: ','add current hour styling');
  divEl11.classList.add('present');
}

if (taskAreaBlockHour12 < currentHourString) {
  console.log('12am: ','add past hour styling');
  divEl12.classList.add('past');
} else if (taskAreaBlockHour12 > currentHourString) {
  console.log('12am: ','add future hour styling');
  divEl12.classList.add('future');
} else {
  console.log('12am: ','add current hour styling');
  divEl12.classList.add('present');
}

if (taskAreaBlockHour13 < currentHourString) {
  console.log('13am: ','add past hour styling');
  divEl13.classList.add('past');
} else if (taskAreaBlockHour13 > currentHourString) {
  console.log('13am: ','add future hour styling');
  divEl13.classList.add('future');
} else {
  console.log('13am: ','add current hour styling');
  divEl13.classList.add('present');
}

if (taskAreaBlockHour14 < currentHourString) {
  console.log('14am: ','add past hour styling');
  divEl14.classList.add('past');
} else if (taskAreaBlockHour14 > currentHourString) {
  console.log('14am: ','add future hour styling');
  divEl14.classList.add('future');
} else {
  console.log('14am: ','add current hour styling');
  divEl14.classList.add('present');
}

if (taskAreaBlockHour15 < currentHourString) {
  console.log('15am: ','add past hour styling');
  divEl15.classList.add('past');
} else if (taskAreaBlockHour15 > currentHourString) {
  console.log('15am: ','add future hour styling');
  divEl15.classList.add('future');
} else {
  console.log('15am: ','add current hour styling');
  divEl15.classList.add('present');
}

if (taskAreaBlockHour16 < currentHourString) {
  console.log('16am: ','add past hour styling');
  divEl16.classList.add('past');
} else if (taskAreaBlockHour16 > currentHourString) {
  console.log('16am: ','add future hour styling');
  divEl16.classList.add('future');
} else {
  console.log('16am: ','add current hour styling');
  divEl16.classList.add('present');
}

if (taskAreaBlockHour17 < currentHourString) {
  console.log('17am: ','add past hour styling');
  divEl17.classList.add('past');
} else if (taskAreaBlockHour17 > currentHourString) {
  console.log('17am: ','add future hour styling');
  divEl17.classList.add('future');
} else {
  console.log('17am: ','add current hour styling');
  divEl17.classList.add('present');
}

// updated file