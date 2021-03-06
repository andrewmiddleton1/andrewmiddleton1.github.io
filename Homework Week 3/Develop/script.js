// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Array of special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters 
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Move random items from each of the arrays into new Variables
var RandomSpecChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
console.log(RandomSpecChar)

var RandomNumChar = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
console.log(RandomNumChar)

var RandomLowerCase = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
console.log(RandomLowerCase)

var RandomUpperCase = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
console.log(RandomUpperCase)

// place the new random variables into arrays which will be called depending on the user input

// create an all-encompassing array, into which values can be pushed




// Add event listener to generate button
var generateBtn = document.getElementById("generate")
generateBtn.addEventListener("click", RetrievePassword);

function RetrievePassword() {

  var AllCharacters = []

  var PasswordLength = prompt("How many Characters would you like to use")

  if (PasswordLength < 8) {
    alert("Number of Characters Needs to be 8 or more")
  }

  if (PasswordLength > 128) {

    alert("Number of Characters need to be 128 or less")
  }

  else if (PasswordLength >= 8 && PasswordLength <= 128) {
    // Invoke the main set of actions here:

    var useSpecChar = confirm("Do you want to Use Special Characters")

    if (useSpecChar == true) {
      console.log(RandomSpecChar)
      AllCharacters = AllCharacters.concat(specialCharacters)
    }

    var useNumberChar = confirm("Do you want to use Numbers?")

    if (useNumberChar == true) {
      console.log(RandomNumChar)
      var AllCharacters = AllCharacters.concat(numericCharacters)
    }

    var useLowerCase = confirm("Do you want to use Lower Case?")

    if (useLowerCase == true) {
      console.log(RandomLowerCase)
      var AllCharacters = AllCharacters.concat(lowerCasedCharacters)
    }

    var useUpperCase = confirm("Do you want to use Upper Case?")

    if (useUpperCase == true) {
      console.log(RandomUpperCase)
      AllCharacters = AllCharacters.concat(upperCasedCharacters)
    }


    // then create a function, to grab random characters from AllCharacters

    function generatePassword() {
      var passwordString = '';
      for (var i = 0; i < parseInt(PasswordLength); i++) {
        passwordString += AllCharacters[Math.floor(Math.random() * AllCharacters.length)];

      }
      return passwordString;
    }


  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  writePassword();
}