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
}
);

// * creates <h3> to shows current time 
window.addEventListener('load', function () {
  // creates new h2 element
  let h3El = document.createElement('h3');
  // places date text into h2
  h3El.innerHTML = todayTime;
  // attaches new h2 element to existing <div>
  document.getElementById('today-div').appendChild(h3El);
}
);

// ********************************************************************* //
// CHANGE STYLE BASED ON PAST-PRESENT-FUTURE
// ********************************************************************* //

// dataHourKey = document.getAttribute(data-hour)



// let dataHourKey = document.getElementsByClassName('todo-input')[0].getAttribute('data-hour')

// let now = new Date().getHours();

// data-hour.forEach()

// round to the hour:
// take time - turn to string - pull first character
let currentHourExact = moment().format('LT'); // 8:57 PM
let currentHourString = currentHourExact.toString(); // "8:57pm"
let currentHourRound = currentHourExact.charAt(0); // 8
console.log(currentHourRound);

/* can't figure out why template literal won't work...*/
//let numberCurrentHour = document.getElementById(`todo-input-hour-${currentHourRound}`);

let comparisonNumber = numberCurrentHour.getAttribute("data-hour");
console.log("compNumb", comparisonNumber);

if (currentHourRound < comparisonNumber) {
  console.log('add past hour styling');
} else if (comparisonNumber > currentHourRound) {
  console.log('add future hour styling');
} else {
  console.log('add current hour styling')
}

// data-hour="8"
// HTML:
  // < div class="grid-row-wrapper" >
  //         < !--HOUR COLUMN-- >
  //         <div class="hour">
  //           <h4>8<span>:00</span></h4>
  //         </div>
  //         <!--TASK AREA COLUMN-- >
  // <div class="task-area">
  //   <!-- user input -->
  //           <form id="todo-form-hour-8" class="todo-form">
  //     <input type="text" id="todo-input-hour-8" class="todo-input" data-hour="8" placeholder="To-do:"></input>

