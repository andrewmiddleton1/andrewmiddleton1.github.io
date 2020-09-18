 // 1. Create the start button
 var button = document.createElement("button");
 button.innerHTML = "Start Quiz";
 
 // 2. Append somewhere
 
 document.getElementById("Start").appendChild(button);
 
 // 3. Add event handler
 button.addEventListener ("click", function() {
   Startquiz();
 });
 
//declare variable for the highscore
//var score = 0;

function Startquiz() {
    
 //create variable for the counter
 var counter = document.getElementById("count");
 var count = 0;
 counter.textContent = "Your current score is: " + count + "/" + questions.length
 
 
// create a variable to store the question number we are up to
//var questioncount = 0;
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
    { question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<javascript>", "<scripting>", "<js>"],
    correctanswer:"a" }, 
    
    {
    question: "Where is the correct place to insert a JavaScript?",
    options: ["The <body> Section", "Both the <head> and the <body> section", "The <head> section", "Anywhere"],
    correctanswer: "b"
    },

    {
    question: "How does a FOR loop start?",
     options: ["for(i=0; i<=5; i++)", "for i=1 to 5", "for(i<=5, i++", "for(i=0; i<=5)"],
    correctanswer: "a"
        },

    {
    question: "How do you create a function in Javascript?",
    options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function myFunction() = myFunction"],
    correctanswer: "b"
    },

    {
    question: "How does a WHILE loop start?",
    options: ["while (i <=10; i++)", "while i=1 to 10", "while (i<=10)", "while i + 10++"],
    correctanswer: "c"
                    },

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
   if (questions[questioncount].correctanswer == "a") {
    alert("Correct!!");
    score++;
    count++;
    counter.textContent = "Your current score is: " + count + "/" + questions.length;
    questioncount++;
    NextQuestions();
    checkiflast();
    
   }
   else {
    alert("Wrong");
    secondsLeft -= 15;
    questioncount++;
    NextQuestions();
    checkiflast();
   } 
 });

 

 var answerbbutton = document.createElement("button");
 answerbbutton.innerHTML = "answer B";
 document.getElementById("Questions").appendChild(answerbbutton);
 
 // with an event handler
 answerbbutton.addEventListener ("click", function() {
    if (questions[questioncount].correctanswer == "b") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your score is: " + count + "/" + questions.length;
        questioncount++;
        NextQuestions();
        checkiflast();
    }
       else {
        alert("Wrong");
        secondsLeft -= 15;
        questioncount++;
        NextQuestions();
        checkiflast();
       } 
 });

 var answercbutton = document.createElement("button");
 answercbutton.innerHTML = "answer C";
 document.getElementById("Questions").appendChild(answercbutton);
 
 // with an event handler
 answercbutton.addEventListener ("click", function() {
    if (questions[questioncount].correctanswer == "c") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your score is: " + count + "/" + questions.length;
        questioncount++;
        NextQuestions();
        checkiflast();
    }
       else {
        alert("Wrong");
        secondsLeft -= 15;
        questioncount++;
        NextQuestions();
        checkiflast();
       } ;
 });

 var answerdbutton = document.createElement("button");
 answerdbutton.innerHTML = "answer D";
 document.getElementById("Questions").appendChild(answerdbutton);
 
 // with an event handler
 answerdbutton.addEventListener ("click", function() {
    if (questions[questioncount].correctanswer == "d") {
        alert("Correct!!");
        score++;
        count++;
        counter.textContent = "Your score is: " + count + "/" + questions.length;
        questioncount++;
        NextQuestions();
        checkiflast();
    }
       else {
        alert("Wrong");
        secondsLeft -= 15;
        questioncount++;
        NextQuestions();
        checkiflast();
       } ;
 });

function NextQuestions() {

    if (questioncount >= questions.length) {
       return; 
    }
    console.log(questioncount);
      
        listEl.textContent = questions[questioncount].question;
        li1.textContent = questions[questioncount].options[0];
        li2.textContent = questions[questioncount].options[1];
        li3.textContent = questions[questioncount].options[2];
        li4.textContent = questions[questioncount].options[3];
 
        listEl.appendChild(li1);
        listEl.appendChild(li2);
        listEl.appendChild(li3);
        listEl.appendChild(li4);
        

        console.log(li1.textContent);
        console.log(li2.textContent);
        console.log(li3.textContent);
        console.log(li4.textContent);
}

//end to the quiz
function checkiflast() {
    console.log(questioncount, questions.length);
       if (questioncount == questions.length) {
       clearInterval(timerInterval);
       timeEl.textContent = "End Quiz"
       HighScore();
    }
   }

      // Input High Score
      function HighScore() {
  
        console.log(score);
        var scorestring = JSON.stringify(score);
        localStorage.setItem("highscore", scorestring); 
        var highscore = localStorage.getItem("highscore");
        var initials = localStorage.getItem("initials");
        
        if(highscore !== null){
            if (score > highscore) {
                localStorage.setItem("highscore", scorestring); 
                var newhighscoreinitials = prompt("You have the highest score! Please enter your initials");
                localStorage.setItem("initials", newhighscoreinitials);   
                
            }
        }
        else{
            localStorage.setItem("highscore", scorestring);
        }
            console.log(highscore);
                console.log(initials); 
        }

// Create a button to clear the high scores
var clearhighscorebtn = document.createElement("button");   // Create a <button> element
clearhighscorebtn.innerHTML = "Clear High Score";                   // Insert text
document.body.appendChild(clearhighscorebtn);               // Append <button> to <body>

// Clear High Score when Clicked
clearhighscorebtn.addEventListener ("click", function() {
  window.localStorage.clear();
});

clearhighscorebtn.addEventListener ("click", function() {
  window.localStorage.clear();
  
  console.log(localStorage);
  console.log(localStorage.getItem("highscore"));
});



}

questions();


// timer part of the app

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 45;
var timerInterval; 

function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining until end of quiz.";

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
     }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Your Time is Up";
}

setTime();



}


    
   