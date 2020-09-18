This random password generator is designed to create a password between 8-128 characters in length and consisting of lower-case, upper-case, numeric and special characters.
All of the types of characters are selected randomly, using the math.random function. 
I started the project by creating an empty array that would eventually hold the contents of the password.
I then created four separate arrays, each holding the complete list of possibilities within each of the character classes. 
To generate the password, I created two functions:
1.	RetrievePassword 
a.	This function prompts the user for the number of characters they would like (if less than 8 or 128 it returns an error message) and what sort of characters they would like to include (a separate prompt for each). 
b.	Depending on their answer, each of the arrays containing the different characters are pushed (concatenated) into the empty array. 
2.	generatePassword
a.	This function loops through the array (which started empty but has now had arrays of characters pushed into it), randomly selecting characters, until it reaches the number of characters chosen by the user. 
b.	These characters are stored into a new variable
3.	writePassword
a.	This final function attaches the contents of the new variable to the container which has the class “password”.

A “Generate Password” button was created in the html for the user to click, and an event listener was created in the JS code which initiates the RetrievePassword function when clicked. One the required user input is collected, the remaining functions are executed and the password is displayed. 


