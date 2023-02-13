// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();
$('#date').text(today.format("dddd, MMMM D YYYY, h:mm.ss"));

// assigning times from html
let time9am = $("#9AM");
let time10am = $("#10AM");
let time11am = $("#11AM");
let time12pm = $("#12PM");
let time1pm = $("#1PM");
let time2pm = $("#2PM");
let time3pm = $("#3PM");
let time4pm = $("#4PM");
let time5pm = $("#5PM");
let time6pm = $("#6PM");

let timesheet = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm,
    time6pm,
];

let timecheck = dayjs().format("hh");

for (let i =0; i < timesheet.length; i++){
    timesheet[i].removeClass("future past present");

    if(timecheck > timesheet[i].data("hour")){
        timesheet[i].addClass('past');

    }else if (timecheck === timesheet[i].attr("data-hour")){
        timesheet[i].addClass('present');

    }else  {
        timesheet[i].addClass('future');
    }
}


  
  


var todoInput = document.querySelector("#task");
var saveButton = document.querySelector("#save");
var todoSpan = document.querySelector("#user-task");



renderLastRegistered();

function renderLastRegistered() {
  var todo = localStorage.getItem("task");
 
  todoSpan.textContent = todo;
 
}


saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var list = document.querySelector("#task").value;
 

    localStorage.setItem("task", list);
   
    renderLastRegistered();
  }
);

// 2nd

var todoInput2 = document.querySelector("#task2");
var saveButton2 = document.querySelector("#save2");
var todoSpan2 = document.querySelector("#user-task2");


renderLastRegistered2();


function renderLastRegistered2() {
  var todo2 = localStorage.getItem("task2");
 
  todoSpan2.textContent = todo2;
 
}


saveButton2.addEventListener("click", function(event) {
  event.preventDefault();

  var list2 = document.querySelector("#task2").value;
 

    localStorage.setItem("task2", list2);
   
    renderLastRegistered2();
  }
);

// 3rd

var todoInput3 = document.querySelector("#task3");
var saveButton3 = document.querySelector("#save3");
var todoSpan3 = document.querySelector("#user-task3");


renderLastRegistered3();


function renderLastRegistered3() {
  var todo3 = localStorage.getItem("task3");
 
  todoSpan3.textContent = todo3;
 
}


saveButton3.addEventListener("click", function(event) {
  event.preventDefault();

  var list3 = document.querySelector("#task3").value;
 

    localStorage.setItem("task3", list3);
   
    renderLastRegistered3();
  }
);

// 4TH

var todoInput4 = document.querySelector("#task4");
var saveButton4 = document.querySelector("#save4");
var todoSpan4 = document.querySelector("#user-task4");


renderLastRegistered4();


function renderLastRegistered4() {
  var todo4 = localStorage.getItem("task4");
 
  todoSpan4.textContent = todo4;
 
}


saveButton4.addEventListener("click", function(event) {
  event.preventDefault();

  var list4 = document.querySelector("#task4").value;
 

    localStorage.setItem("task4", list4);
   
    renderLastRegistered4();
  }
);

// 5TH

var todoInput5 = document.querySelector("#task5");
var saveButton5 = document.querySelector("#save5");
var todoSpan5 = document.querySelector("#user-task5");


renderLastRegistered5();


function renderLastRegistered5() {
  var todo5 = localStorage.getItem("task5");
 
  todoSpan5.textContent = todo5;
 
}


saveButton5.addEventListener("click", function(event) {
  event.preventDefault();

  var list5 = document.querySelector("#task5").value;
 

    localStorage.setItem("task5", list5);
   
    renderLastRegistered5();
  }
);

// 6TH

var todoInput6 = document.querySelector("#task6");
var saveButton6 = document.querySelector("#save6");
var todoSpan6 = document.querySelector("#user-task6");


renderLastRegistered6();


function renderLastRegistered6() {
  var todo6 = localStorage.getItem("task6");
 
  todoSpan6.textContent = todo6;
 
}


saveButton6.addEventListener("click", function(event) {
  event.preventDefault();

  var list6 = document.querySelector("#task6").value;
 

    localStorage.setItem("task6", list6);
   
    renderLastRegistered6();
  }
);

// 7TH

var todoInput7 = document.querySelector("#task7");
var saveButton7 = document.querySelector("#save7");
var todoSpan7 = document.querySelector("#user-task7");


renderLastRegistered7();


function renderLastRegistered7() {
  var todo7 = localStorage.getItem("task7");
 
  todoSpan7.textContent = todo7;
 
}


saveButton7.addEventListener("click", function(event) {
  event.preventDefault();

  var list7 = document.querySelector("#task7").value;
 

    localStorage.setItem("task7", list7);
   
    renderLastRegistered7();
  }
);

// 8TH

var todoInput8 = document.querySelector("#task8");
var saveButton8 = document.querySelector("#save8");
var todoSpan8 = document.querySelector("#user-task8");


renderLastRegistered8();


function renderLastRegistered8() {
  var todo8 = localStorage.getItem("task8");
 
  todoSpan8.textContent = todo8;
 
}


saveButton8.addEventListener("click", function(event) {
  event.preventDefault();

  var list8 = document.querySelector("#task8").value;
 

    localStorage.setItem("task8", list8);
   
    renderLastRegistered8();
  }
);

// 9TH

var todoInput9 = document.querySelector("#task9");
var saveButton9 = document.querySelector("#save9");
var todoSpan9 = document.querySelector("#user-task9");


renderLastRegistered9();


function renderLastRegistered9() {
  var todo9 = localStorage.getItem("task9");
 
  todoSpan9.textContent = todo9;
 
}


saveButton9.addEventListener("click", function(event) {
  event.preventDefault();

  var list9 = document.querySelector("#task9").value;
 

    localStorage.setItem("task9", list9);
   
    renderLastRegistered9();
  }
);