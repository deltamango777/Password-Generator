// Assignment Code
const generateBtn = document.querySelector("#generate");

// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Write password to the #password input
function generatePassword() {
  const passwordLength = prompt("Please enter a password length between between 8 and 128 characters:");
  const parsedPasswordLength = parseInt(passwordLength);

  if (isNaN(parsedPasswordLength) || parsedPasswordLength < 8 || parsedPasswordLength > 128) {
    alert("Invalid password length. Please enter a valid number between 8 and 128.");
    return "";
  }

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecialChars = confirm("Include special characters?");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
