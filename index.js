function isPalindrome(word) {
  // Write your algorithm here
  return word==word.split('').reverse().join('')
}



//I need to take a string and make sure it is the same
//whether you read it front to back or the opposite
/* 
  Add your pseudocode here
  1. take a string and create a new string thats the
  reverse version of it.
  compare the two: if the match, it is Truw, if not, its is Falsa
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
