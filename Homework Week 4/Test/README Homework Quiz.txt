This quiz application is designed to cycle through a number of questions related to Javascript and is timed, with the user losing time for every wrong answer. The quiz is complete when either all questions are answered or the user runs out of time. At the end of the, if the user achieves the highest score, they are prompted to enter their initials and their initials are stored in local storage. The quiz also has a button to clear the local storage if/when required. 
The quiz has six major functions: 
1.	Startquiz. This function sits outside of all of the other function and is called when the start button is pressed. 

2.	Questions. This is the major function within the application, which holds the master array (containing questions, answers and correct answers) and uses a loop to cycle through the array. This function also creates the four answer buttons, which have eventlisteners attached. When the buttons are pressed, the user is alerted to whether they were correct/wrong, the scores and question counts are updated and the Nextquestions and Checkiflast functions are both called. 

3.	Nextquestions. This function compared the current question count to the length of the array, and if the last question is not reached, it continues to cycle through the array of questions. 

4.	Checkiflast. This function also compares the length of the array with the question count, and if the last question is reached, it will tell the user that they have reached the end of the quiz. It also calls the function InputHighScore.

5.	setTime. This function contains a timer, which is set to 45 seconds and is displayed as part of the quiz. Once the timer reaches zero, the user is alerted that their time is up, and the InputHighScore function is also called. 

6.	InputHighScore. This function compared the score with the value in local storage. If the user’s score is greater than the value in local storage, the user is alerted to their score being the highest and asked to input their initials. I have also included a button to clear local storage if the user wishes. 

I have used a bootstrap container to ensure that the app is dynamic and can be used on the full range of devices. The rest of the styling was through a separate CSS sheet, mainly just to add colour to the app to differentiate between the divisions. 
