// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",function(){writePassword()})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creates an array of special characters, numbers, capital letters, and lowercase letters.

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Creates a generatePassword function.
function generatePassword() {
  newPassword = "";
  passwordCharSet = "";

  // Confirm user for special characters, numbers, capital, lowercase letters, and password lengths. 
  passwordLength = prompt("Enter password length. Select between 8-128 characters.");

  // When user enters invalid password length, the user is prompted to submit a valid entry.
  if (Number(passwordLength < 8) || Number(passwordLength > 128) || isNaN(passwordLength)) {
     alert("No. That isn't a number between 8 and 128! Try again.");
  }
  else {
    specialCharactersInput = confirm("Would you like to include special characters?");

    numbersInput = confirm("Would you like to include numbers?");

    upperCaseInput = confirm("Would you like to include uppercase letters?");

    lowerCaseInput = confirm("Would you like to include lowercase characters?");

    //Creates multiple if statements to verify user responses. Based on responsea, include user preferences into password function. 

    if (specialCharactersInput === true) {

      passwordCharSet = passwordCharSet.concat(specialCharacters);
    }

    if (numbersInput === true) {
      passwordCharSet = passwordCharSet.concat(numbers);
    }

    if (lowerCaseInput === true) {
      passwordCharSet = passwordCharSet.concat(lowerCase);
    }

    if (upperCaseInput === true) {
      passwordCharSet = passwordCharSet.concat(upperCase);
    }
  
    //A conditional to verify user has chosen at least one type of character.

    if (passwordCharSet === "") {
      alert("No preferences selected. Try again.");
    }

    //Variables to hold final results.

    var randomNumber = Math.floor(Math.random() * passwordCharSet.length)

    var randomUpper = Math.floor(Math.random() * passwordCharSet.length)

    var randomLower = Math.floor(Math.random() * passwordCharSet.length)

    var randomCharacter = Math.floor(Math.random() * passwordCharSet.length)

    var password = "";

    //A for loop to loop over final array. Loop runs based on user password length input. Generate Password.
    console.log(passwordCharSet)
    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]; 
      password=password.concat(randomCharacter);
      console.log("randomCharacter",randomCharacter);
    }

    //Randomly generated password appears on screen.
    console.log("password",password)
    return password; 
   

    
  }
}