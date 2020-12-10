// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// TODO: Create a generatePassword funtion and write the logic within this function
 

function generatePassword () {

// Confirm user for special characters. Set variable. 


// Confirm user for numbers. Set variable. 


// Confirm user for capital letters. Set variable. 


// Confirm user for lowercase letters. Set variable. 


//Prompt user about password character length (at least 8 characters and no more than 128 characters). Set variable. 
var passwordLength = prompt ("How long will your password be? (Between 8-128")

//Create a conditional to verify user has chosen at least one type of character.


// Create an array of special characters, numbers, capital letters, and lowercase letters.

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0,1,2,3,4,5,6,7,8,9"
var specialCharacters = "!,@,#,$,%,?"

//Create an empty array to hold user password preferences. 


//Create multiple if statements that checks if the user said yes or no to confirms. Based on response, push specific characters into empty array. 

}

var specialCharactersQuestion = confirm("Would you like special characters in you password?")
var myFinalArrayofCharacters = ''
var specialCharacters = "!,@,#,$,%,?"

if (specialCharactersQuestion === true){
  //push special characters into empty array
  myFinalArrayofCharacters = myFinalArrayofCharacters+specialCharacters
} 





//Create a variable to hold final results. 

var finalPassword;

//I need a for loop to loop over my final array. Loop should run based on results of password length prompt. Choose randomly from out final array that holds all the characters that the user selected. Save to our final password.

//var randomNumber Math.floor(Math.random() * length of final array)
//inside the for loop (finalPassword = finalPassword + finalArray [randomNumber] )
for(var i = 0; i < passwordLength; i++){
 const element = array[i];



//Return the finalPassword from this function outside of the for loop at the end of this function.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

