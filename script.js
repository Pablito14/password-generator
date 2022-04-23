function generatePassword(){

  var password;
  var lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var specialChars = ["!","@","#","$","%","^","&","*","(",")"];
  var allowedChars = [];
  var passwordLength = getPwdL();
  getCriteria();
  
  return password;
}

// helper function to get a valid length
function getPwdL(){
  
  var pswL = prompt("How long would you like this password to be? It must be between 8-128 characters.");
  // if their password length is less than or equal to 7 OR greater than or equal to 129 it is invalid
  if(pswL <= 7 || pswL >= 129) {
    alert("This will continue forever until you put in a value between 8-128. I suggest you cooperate 🔪💀")
    getPwdL();
  } else {
    return pswL;
  }
  
}

// helper function to get a valid criteria
function getCriteria(){
  
  var useLowerC = confirm("Do you want lowercase characters in your password?");
  var useUpperC = confirm("Do you want uppercase characters in your password?");
  var useNumbers = confirm("Do you want numbers in your password?");
  var useSpecialC = confirm("Do you want special characters in your password?");
  
  // if they answer everything as false, ask the questions again
  if(useLowerC === false && useUpperC === false && useNumbers === false && useSpecialC === false) {
    alert("This will continue forever until you select a valid criteria, all we need is for one of these questions to be ok. I suggest you cooperate 🔪💀")
    getCriteria();

  // if they answered with one criteria, then we can use it in the generator
  } else {
    
    // lowercase activation 
    if(useLowerC){
       lowerCases.forEach(element => {
         allowedChars.push(element)
       });
     }

    // uppercase activation 
    if(useUpperC){
      UpperCases.forEach(element => {
        allowedChars.push(element)
      });
    }

    // numbers activation 
    if(useNumbers){
      numbers.forEach(element => {
        allowedChars.push(element)
      });
    }

    // special characters activation 
    if(useSpecialC){
      specialChars.forEach(element => {
        allowedChars.push(element)
      });
    }

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
