// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",function(){writePassword()})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create an array of special characters, numbers, capital letters, and lowercase letters.

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Create a generatePassword function.
function generatePassword() {
  newPassword = "";
  passwordCharSet = "";

  // Confirm user for special characters, numbers, capital, lowercase letters, and password lengths. Set variables. 
  passwordLength = prompt("Enter password length. Select between 8-128 characters.");
  if (Number(passwordLength < 8) || Number(passwordLength > 128) || isNaN(passwordLength)) {
     alert("No. That isn't a number between 8 and 128! Try again.");
  }
  else {
    specialCharactersInput = confirm("Would you like to include special characters?");

    numbersInput = confirm("Would you like to include numbers?");

    upperCaseInput = confirm("Would you like to include uppercase letters?");

    lowerCaseInput = confirm("Would you like to include lowercase characters?");

    //Create multiple if statements that checks if the user said yes or no to confirms. Based on response, include specific characters into empty array. 
    //Create an empty array to hold user password preferences. 


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
  
    //Create a conditional to verify user has chosen at least one type of character.

    if (passwordCharSet === "") {
      alert("No preferences selected. Try again.");
    }


    //Create a variable to hold final results

    var randomNumber = Math.floor(Math.random() * passwordCharSet.length)

    var randomUpper = Math.floor(Math.random() * passwordCharSet.length)

    var randomLower = Math.floor(Math.random() * passwordCharSet.length)

    var randomCharacter = Math.floor(Math.random() * passwordCharSet.length)

    var password = "";

    //I need a for loop to loop over my final array. Loop should run based on results of password length prompt.
    //Choose randomly from our final array that holds all the characters that the user selected. Save to our final password.
    console.log(passwordCharSet)
    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]; 
      password=password.concat(randomCharacter);
      console.log("randomCharacter",randomCharacter);
    }

    console.log("password",password)
    return password; 
   

    
  }
}