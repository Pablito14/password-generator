function generatePassword(){

  var password;
  
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

  console.log("Lowercases: ", useLowerC);
  console.log("Uppercases: ", useUpperC);
  console.log("Numbers: ", useNumbers);
  console.log("Special characters: ", useSpecialC);
  
  // if they answer everything as false, ask the questions again
  if(useLowerC === false && useUpperC === false && useNumbers === false && useSpecialC === false) {
    alert("This will continue forever until you select a valid criteria, all we need is for one of these questions to be ok. I suggest you cooperate 🔪💀")
    getCriteria();

  // if they answered with one criteria, then we can use it in the generator
  } else {

    var allowedChars = [];
    
    // lowercase activation 
    if(useLowerC){
      var lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       lowerCases.forEach(element => {
         allowedChars.push(element)
       });
     }

    // uppercase activation 
    if(useUpperC){
      var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      UpperCases.forEach(element => {
        allowedChars.push(element)
      });
    }

    // numbers activation 
    if(useNumbers){
      var numbers = [0,1,2,3,4,5,6,7,8,9];
      numbers.forEach(element => {
        allowedChars.push(element)
      });
    }

    // special characters activation 
    if(useSpecialC){
      var specialChars = ["!","@","#","$","%","^","&","*","(",")"];
      specialChars.forEach(element => {
        allowedChars.push(element)
      });
    }

  }
  console.log(allowedChars);
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
