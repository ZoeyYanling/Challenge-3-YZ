// Assignment code here
function generatePassword(){
var length = prompt("Please enter the password length (8-128 characters):");
if (length < 8 || length > 128 ) {
  alert("Password length must be between 8 and 128 characters!");
  return;
}

var includeNumbers = confirm("Does the password contain numbers?");
var includeUppercase = confirm("Does the password contain uppercase letters?");
var includeLowercase = confirm("Does the password contain lowercase letters?");
var includeSpecialChars = confirm("Does the password contain special characters?");

var characters = "";
if (includeNumbers) {
  characters += "0123456789";
}
if (includeUppercase) {
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (includeLowercase) {
  characters += "abcdefghijklmnopqrstuvwxyz";
}
if (includeSpecialChars) {
  characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
}

var password = "";
for (var i = 0; i < length; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
