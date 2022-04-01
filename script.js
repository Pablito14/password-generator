function generatePassword(){
  // prompt gets a string even though we entered a number so we use parseInt to try and get the type converted
  getInputs();
  
  var password;
  return password;
}

function getInputs(){
  var criteria = [];
  var length = getNum();
  var lowers = confirm("Do you want Lower case letters included?");
  var capitals = confirm("Do you want capital letters included?");
  var numbers = confirm("Do you want numbers included?");
  var specials = confirm("Do you want special characters included?");
  var passCriteria = validCriteria(lowers, capitals, numbers, specials);
  
}

function getNum(){
  var input = prompt("How long do you want the password to be? \n8 is the minimum, and 128 is the maximum!", "Type the length here!");

  // checking that they put in a nummber 
  input = parseInt(input);

  // Props to https://www.webdevelopersnotes.com/the-javascript-prompt-getting-user-input for getting the idea of using isNan()
  // when the data type they enter is NaN
  if(isNaN(input)){
    console.log("That is Not a Number!\nPlease try entering a number!")
    getNum();

    // when the data type they enter is a number
  } else if ('number'){
    console.log("That is a Number!")
    return input;

    // when the data type they enter was just insane
  } else {
    console.log("Uh oh, We shouldnt be here 🤯!")
    getNum();
  }
  
}

function validCriteria(lowers, capitals, numbers, specials){
if(lowers === false && capitals === false && numbers === false && specials === false){
  alert("You need to say yes to at least one criteria!\nPlease answer the criteria questions again, and say yes to at least one of them!")
  getInputs();
  console.log("These four should be false: " + lowers, capitals, numbers, specials)
} else {
  console.log("At least one of these is true: " + lowers, capitals, numbers, specials)
}

}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
