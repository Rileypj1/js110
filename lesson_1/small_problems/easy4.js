//Searching 101
/*
function searchNumbers() {
  let rlSync = require('readline-sync');
  let numbers = [];
  let counter = 1;
  while (numbers.length < 5) {
    let numberInput = Number(rlSync.question(`Enter the ${counter}${getNumberEnding(counter)} number: `));
    numbers.push(numberInput);
    counter += 1;
  }
  let lastNum = Number(rlSync.question('Enter the last number: '));
  if (numbers.includes(lastNum)) {
    console.log(`The number ${lastNum} appears in ${numbers.join()}`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${numbers.join()}`);
  }
}
function getNumberEnding(num) {
  switch (num) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
searchNumbers();
*/
/*
//Palindromic Strings (Part 1)
// Problem:
// Input: string
// Output: boolean
// Rules: If the string is a palindrome, the function should return true otherwise false
// Implicit reqs: all characters matter and case matters
// A palindrome is the same forwards as backwards
// example: racecar
// Data Structures: input is string; will look to use arrays with each element being a character from the string
// Algorithm:
// - create an array that is the input string split up by character 
// - reverse the order of the array 
// - create a new string variable that is the array transformed back to a string 
// - check if new string variable is equal to the input string and return the boolean result
function isPalindrome(str) {
  let charArray = str.split('');
  let reversedStr = charArray.reverse().join('');
  console.log(str === reversedStr);
}
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

//Palindromic Strings (Part 2)
function isRealPalindrome(str) {
  let cleanedStr = str.replaceAll(/\W/g, '').toLowerCase();
  isPalindrome(cleanedStr);
}
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
*/

//Running Totals
// Problem:
//   - Input: array of numbers 
//   - Output: array of numbers that is running total of elements from input array
// Rules: same number of elements in output as there were in input array; single element array will just output the single element 
function runningTotal(arr) {
  let runningTotalArray = []
  arr.reduce((acc, currentVal) => {
    let newVal = acc + currentVal
    runningTotalArray.push(newVal);
    return newVal;
  }, 0)
  
  return runningTotalArray;
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
