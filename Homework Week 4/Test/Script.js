 // 1. Create the start button
 var button = document.createElement("button");
 button.innerHTML = "Start Quiz";
 
 // 2. Append somewhere
 
 document.getElementById("Start").appendChild(button);
 
 // 3. Add event handler
 button.addEventListener ("click", function() {
   alert("Put start function here");
 });
 
 //}
 
 //create variable for the counter
 var counter = document.getElementById("count");
 var count = 0;
 counter.textContent = "Your current score is: " + count
 

 

// Function startquiz()
//function startquiz() {
    //Start the timer
   // setTime();
//Start the questions
//}

function questions () {
     //present first questions in list with buttons for answers
     //for loop should roll through the questions iteratively
     //create an empty array to push the answers to (look at logic in current quiz)
     // have logic that amends the clock count if wrong answer chosen
 //

 
// Create a submit button that finishes the rest and calls function answers
// Onclick, this stops the timeer

// quiz part of the app

var questions = [
    { question: "What is the first question?",
    options: ["Here is option A for Q1", "Here is Option B for Q1", "Here is Option C for Q1", "Here is Option D for Q1"],
    correctanswer:"a" }, 
    
    {
    question: "What is the second question?",
    options: ["Here is OptionA for Q2", "Here is Option B for Q2", "Here is Option C for Q2", "Here is Option D for Q2"],
    correctanswer: "a"
    }
];   

// We start the Quiz with a score of 0.
var score = 0;

//and a question count of 0
var questioncount = 0;

 
// Display first question/answers to user 
//Create a list for the possible answers

var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Store our li elements in a variable
var listItems = document.getElementsByTagName("li");

// text content
listEl.textContent = questions[0].question;
li1.textContent = questions[0].options[0];
li2.textContent = questions[0].options[1];
li3.textContent = questions[0].options[2];
li4.textContent = questions[0].options[3];

//append the elements

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
document.getElementById("Questions").appendChild(listEl);  
  
// also create buttons for each answer

 var answerabutton = document.createElement("button");
 answerabutton.innerHTML = "answer A";
 document.getElementById("Questions").appendChild(answerabutton);
 
 // with an event handler
 answerabutton.addEventListener ("click", function() {
   if (questions[0].correctanswer == "a") {
    alert("Correct!!");
    score++;
    count++;
    counter.textContent = "Your current score is: " + count;
    questioncount++;
    NextQuestions();
   }
   else {
    alert("Wrong");
    secondsLeft -= 15;
   } 
 });

 

 var answerbbutton = document.createElement("button");
 answerbbutton.innerHTML = "answer B";
 document.getElementById("Questions").appendChild(answerbbutton);
 
 // with an event handler
 answerbbutton.addEventListener ("click", function() {
    if (questions[0].correctanswer == "b") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your current score is: " + count;
       }
       else {
        alert("Wrong");
        secondsLeft -= 15;
       } 
 });

 var answercbutton = document.createElement("button");
 answercbutton.innerHTML = "answer C";
 document.getElementById("Questions").appendChild(answercbutton);
 
 // with an event handler
 answercbutton.addEventListener ("click", function() {
    if (questions[0].correctanswer == "c") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your current score is: " + count;
       }
       else {
        alert("Wrong");
        secondsLeft -= 15;
       } ;
 });

 var answerdbutton = document.createElement("button");
 answerdbutton.innerHTML = "answer D";
 document.getElementById("Questions").appendChild(answerdbutton);
 
 // with an event handler
 answerdbutton.addEventListener ("click", function() {
    if (questions[0].correctanswer == "d") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your current score is: " + count;
       }
       else {
        alert("Wrong");
        secondsLeft -= 15;
       } ;
 });

function NextQuestions() {

    console.log(questioncount);
      
        listEl.textContent = questions[questioncount].question;
        li1.textContent = questions[questioncount].options[0];
        li2.textContent = questions[questioncount].options[1];
        li3.textContent = questions[questioncount].options[2];
        li4.textContent = questions[questioncount].options[3];
 
}

}

questions();

// Loop over every question object
//for (var i = 0; i < questions.length; i++) {

//var answer = prompt(questions[i].question);

  

  // Compare answers
  //if ((answer === "0") ||
  //  (answer === "1")) {
    // Increase score
  //  score++;
  //  count++;
  //  alert("Correct!");
//  }
  //else {
 //   alert("Wrong!");
 /// }
//}

// Show total at end
//alert("You got " + score + "/" + questions.length); */

// end of questions function}




 //function answers() {
     //comapare the new array of answers with the existing array containing answers
     //display a score
 //}





// timer part of the app

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining until end of quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Your Time is Up";



}

setTime();
   