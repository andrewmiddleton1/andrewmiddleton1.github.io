// import date/time from momentJS for the Title
var datetime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#datetime").append(datetime);

console.log(datetime);

// This code will change the colour of the segments base on the current time
var currenthour = moment().format("HH");
console.log(currenthour);

function changingsegmentcolour() {
  if (currenthour == "15") {
    $("#fifteen").css("background-color", "magenta");
  }
  console.log(currenthour);
}
changingsegmentcolour();

// this is the start of the code for the 0900 segment 

var ninetodoInput = document.querySelector("#ninetodo-text");
var ninetodoForm = document.querySelector("#ninetodo-form");
var ninetodoList = document.querySelector("#ninetodo-list");

// create the array in which everything will be stored
var ninetodos = [];

initnine();

function renderTodosnine() {
  // Clear todoList element and update todoCountSpan
  $(ninetodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < ninetodos.length; i++) {
    var ninetodo = ninetodos[i];

    var li = document.createElement("li");
    $(li).text(ninetodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(ninetodoList).prepend(li);
  }
}

function initnine() {
  // Get items from localStorage and parse to new variable

  var ninestoredTodos = JSON.parse(localStorage.getItem("ninetodos"));

  // As long as there are items in storage, transfer to the todos array
  if (ninestoredTodos !== null) {
    ninetodos = ninestoredTodos;
  }
  // Call the function
  renderTodosnine();
}

function storeTodosnine() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("ninetodos", JSON.stringify(ninetodos));
}

// When the "save task" button for the 0900 section is clicked
$("#ninehundred").click(function(event) {

  var ninetodoText = ninetodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (ninetodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  ninetodos.push(ninetodoText);
  ninetodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosnine();
  renderTodosnine();
});

// In order to remove the items once they are complete
$(ninetodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    ninetodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosnine();
    renderTodosnine();
  }
});

// this is the start of the code for the 1000 segment 

var tentodoInput = document.querySelector("#tentodo-text");
var tentodoForm = document.querySelector("#tentodo-form");
var tentodoList = document.querySelector("#tentodo-list");

// create the array in which everything will be stored
var tentodos = [];

initten();

function renderTodosten() {
  // Clear todoList element and update todoCountSpan
  $(tentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < tentodos.length; i++) {
    var tentodo = tentodos[i];

    var li = document.createElement("li");
    $(li).text(tentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(tentodoList).prepend(li);
  }
}

function initten() {
  // Get items from localStorage and parse to new variable

  var tenstoredTodos = JSON.parse(localStorage.getItem("tentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (tenstoredTodos !== null) {
    tentodos = tenstoredTodos;
  }
  // Call the function
  renderTodosten();
}

function storeTodosten() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("tentodos", JSON.stringify(tentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#tenhundred").click(function(event) {

  var tentodoText = tentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (tentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  tentodos.push(tentodoText);
  tentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosten();
  renderTodosten();
});

// In order to remove the items once they are complete
$(tentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    tentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosten();
    renderTodosten();
  }
});

// this is the start of the code for the 1100 segment 

var eleventodoInput = document.querySelector("#eleventodo-text");
var eleventodoForm = document.querySelector("#eleventodo-form");
var eleventodoList = document.querySelector("#eleventodo-list");

// create the array in which everything will be stored
var eleventodos = [];

initeleven();

function renderTodoseleven() {
  // Clear todoList element and update todoCountSpan
  $(eleventodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < eleventodos.length; i++) {
    var eleventodo = eleventodos[i];

    var li = document.createElement("li");
    $(li).text(eleventodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(eleventodoList).prepend(li);
  }
}

function initeleven() {
  // Get items from localStorage and parse to new variable

  var elevenstoredTodos = JSON.parse(localStorage.getItem("eleventodos"));

  // As long as there are items in storage, transfer to the todos array
  if (elevenstoredTodos !== null) {
    eleventodos = elevenstoredTodos;
  }
  // Call the function
  renderTodoseleven();
}

function storeTodoseleven() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("eleventodos", JSON.stringify(eleventodos));
}

// When the "save task" button for the 0900 section is clicked
$("#elevenhundred").click(function(event) {

  var eleventodoText = eleventodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (eleventodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  eleventodos.push(eleventodoText);
  eleventodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodoseleven();
  renderTodoseleven();
});

// In order to remove the items once they are complete
$(eleventodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    eleventodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodoseleven();
    renderTodoseleven();
  }
});

// this is the start of the code for the 1200 segment 

var twelvetodoInput = document.querySelector("#twelvetodo-text");
var twelvetodoForm = document.querySelector("#twelvetodo-form");
var twelvetodoList = document.querySelector("#twelvetodo-list");

// create the array in which everything will be stored
var twelvetodos = [];

inittwelve();

function renderTodostwelve() {
  // Clear todoList element and update todoCountSpan
  $(twelvetodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < twelvetodos.length; i++) {
    var twelvetodo = twelvetodos[i];

    var li = document.createElement("li");
    $(li).text(twelvetodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(twelvetodoList).prepend(li);
  }
}

function inittwelve() {
  // Get items from localStorage and parse to new variable

  var twelvestoredTodos = JSON.parse(localStorage.getItem("twelvetodos"));

  // As long as there are items in storage, transfer to the todos array
  if (twelvestoredTodos !== null) {
    twelvetodos = twelvestoredTodos;
  }
  // Call the function
  renderTodostwelve();
}

function storeTodostwelve() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("twelvetodos", JSON.stringify(twelvetodos));
}

// When the "save task" button for the 0900 section is clicked
$("#twelvehundred").click(function(event) {

  var twelvetodoText = twelvetodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (twelvetodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  twelvetodos.push(twelvetodoText);
  twelvetodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodostwelve();
  renderTodostwelve();
});

// In order to remove the items once they are complete
$(twelvetodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    twelvetodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodostwelve();
    renderTodostwelve();
  }
});

// this is the start of the code for the 1300 segment 

var thirteentodoInput = document.querySelector("#thirteentodo-text");
var thirteentodoForm = document.querySelector("#thirteentodo-form");
var thirteentodoList = document.querySelector("#thirteentodo-list");

// create the array in which everything will be stored
var thirteentodos = [];

initthirteen();

function renderTodosthirteen() {
  // Clear todoList element and update todoCountSpan
  $(thirteentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < thirteentodos.length; i++) {
    var thirteentodo = thirteentodos[i];

    var li = document.createElement("li");
    $(li).text(thirteentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(thirteentodoList).prepend(li);
  }
}

function initthirteen() {
  // Get items from localStorage and parse to new variable

  var thirteenstoredTodos = JSON.parse(localStorage.getItem("thirteentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (thirteenstoredTodos !== null) {
    thirteentodos = thirteenstoredTodos;
  }
  // Call the function
  renderTodosthirteen();
}

function storeTodosthirteen() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("thirteentodos", JSON.stringify(thirteentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#thirteenhundred").click(function(event) {

  var thirteentodoText = thirteentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (thirteentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  thirteentodos.push(thirteentodoText);
  thirteentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosthirteen();
  renderTodosthirteen();
});

// In order to remove the items once they are complete
$(thirteentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    thirteentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosthirteen();
    renderTodosthirteen();
  }
});

// this is the start of the code for the 1400 segment 

var fourteentodoInput = document.querySelector("#fourteentodo-text");
var fourteentodoForm = document.querySelector("#fourteentodo-form");
var fourteentodoList = document.querySelector("#fourteentodo-list");

// create the array in which everything will be stored
var fourteentodos = [];

initfourteen();

function renderTodosfourteen() {
  // Clear todoList element and update todoCountSpan
  $(fourteentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < fourteentodos.length; i++) {
    var fourteentodo = fourteentodos[i];

    var li = document.createElement("li");
    $(li).text(fourteentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(fourteentodoList).prepend(li);
  }
}

function initfourteen() {
  // Get items from localStorage and parse to new variable

  var fourteenstoredTodos = JSON.parse(localStorage.getItem("fourteentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (fourteenstoredTodos !== null) {
    fourteentodos = fourteenstoredTodos;
  }
  // Call the function
  renderTodosfourteen();
}

function storeTodosfourteen() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("fourteentodos", JSON.stringify(fourteentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#fourteenhundred").click(function(event) {

  var fourteentodoText = fourteentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (fourteentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  fourteentodos.push(fourteentodoText);
  fourteentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosfourteen();
  renderTodosfourteen();
});

// In order to remove the items once they are complete
$(fourteentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    fourteentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosfourteen();
    renderTodosfourteen();
  }
});

// this is the start of the code for the 1500 segment 

var fifteentodoInput = document.querySelector("#fifteentodo-text");
var fifteentodoForm = document.querySelector("#fifteentodo-form");
var fifteentodoList = document.querySelector("#fifteentodo-list");

// create the array in which everything will be stored
var fifteentodos = [];

initfifteen();

function renderTodosfifteen() {
  // Clear todoList element and update todoCountSpan
  $(fifteentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < fifteentodos.length; i++) {
    var fifteentodo = fifteentodos[i];

    var li = document.createElement("li");
    $(li).text(fifteentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(fifteentodoList).prepend(li);
  }
}

function initfifteen() {
  // Get items from localStorage and parse to new variable

  var fifteenstoredTodos = JSON.parse(localStorage.getItem("fifteentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (fifteenstoredTodos !== null) {
    fifteentodos = fifteenstoredTodos;
  }
  // Call the function
  renderTodosfifteen();
}

function storeTodosfifteen() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("fifteentodos", JSON.stringify(fifteentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#fifteenhundred").click(function(event) {

  var fifteentodoText = fifteentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (fifteentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  fifteentodos.push(fifteentodoText);
  fifteentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosfifteen();
  renderTodosfifteen();
});

// In order to remove the items once they are complete
$(fifteentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    fifteentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosfifteen();
    renderTodosfifteen();
  }
});

// this is the start of the code for the 1600 segment 

var sixteentodoInput = document.querySelector("#sixteentodo-text");
var sixteentodoForm = document.querySelector("#sixteentodo-form");
var sixteentodoList = document.querySelector("#sixteentodo-list");

// create the array in which everything will be stored
var sixteentodos = [];

initsixteen();

function renderTodossixteen() {
  // Clear todoList element and update todoCountSpan
  $(sixteentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < sixteentodos.length; i++) {
    var sixteentodo = sixteentodos[i];

    var li = document.createElement("li");
    $(li).text(sixteentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(sixteentodoList).prepend(li);
  }
}

function initsixteen() {
  // Get items from localStorage and parse to new variable

  var sixteenstoredTodos = JSON.parse(localStorage.getItem("sixteentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (sixteenstoredTodos !== null) {
    sixteentodos = sixteenstoredTodos;
  }
  // Call the function
  renderTodossixteen();
}

function storeTodossixteen() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("sixteentodos", JSON.stringify(sixteentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#sixteenhundred").click(function(event) {

  var sixteentodoText = sixteentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (sixteentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  sixteentodos.push(sixteentodoText);
  sixteentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodossixteen();
  renderTodossixteen();
});

// In order to remove the items once they are complete
$(sixteentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    sixteentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodossixteen();
    renderTodossixteen();
  }
});

// this is the start of the code for the 1700 segment 

var seventeentodoInput = document.querySelector("#seventeentodo-text");
var seventeentodoForm = document.querySelector("#seventeentodo-form");
var seventeentodoList = document.querySelector("#seventeentodo-list");

// create the array in which everything will be stored
var seventeentodos = [];

initseventeen();

function renderTodosseventeen() {
  // Clear todoList element and update todoCountSpan
  $(seventeentodoList).html("");
  //$(todoCountSpan).text(todos.length);

  // Render a new li for each todo
  for (var i = 0; i < seventeentodos.length; i++) {
    var seventeentodo = seventeentodos[i];

    var li = document.createElement("li");
    $(li).text(seventeentodo);
    $(li).attr("data-index", i);

    var button = document.createElement("button");
    $(button).text("Complete");

    $(li).prepend(button);
    $(seventeentodoList).prepend(li);
  }
}

function initseventeen() {
  // Get items from localStorage and parse to new variable

  var seventeenstoredTodos = JSON.parse(localStorage.getItem("seventeentodos"));

  // As long as there are items in storage, transfer to the todos array
  if (seventeenstoredTodos !== null) {
    seventeentodos = seventeenstoredTodos;
  }
  // Call the function
  renderTodosseventeen();
}

function storeTodosseventeen() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("seventeentodos", JSON.stringify(seventeentodos));
}

// When the "save task" button for the 0900 section is clicked
$("#seventeenhundred").click(function(event) {

  var seventeentodoText = seventeentodoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (seventeentodoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  seventeentodos.push(seventeentodoText);
  seventeentodoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodosseventeen();
  renderTodosseventeen();
});

// In order to remove the items once they are complete
$(seventeentodoList).click (function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove (splice) the todo element from the list
    var index = $(element.parentElement).attr("data-index");
    seventeentodos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodosseventeen();
    renderTodosseventeen();
  }
});








