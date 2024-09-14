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
/*
//Running Totals
// Problem:
//   - Input: array of numbers 
//   - Output: array of numbers that is running total of elements from input array
// Rules: same number of elements in output as there were in input array; single element array will just output the single element 
// function runningTotal(arr) {
//   let runningTotalArray = []
//   arr.reduce((acc, currentVal) => {
//     let newVal = acc + currentVal
//     runningTotalArray.push(newVal);
//     return newVal;
//   }, 0)
  
//   return runningTotalArray;
// }
// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []
*/
/*
//Letter Counter (Part 1)
// Problem: 
//   - Input: string with space-separated words
//   - Output: object literal that has length of words as keys and the number of words with that length in the input string as the value
// Rules: 
//   - Empty string will return an empty object
//   - punctation counts as a character in a word
// Example:
//   "What's" -> length will be 6 (this is for Part 1 only)
// Algorithm:
//   - create an empty object letterCounter
//   - convert the input string to an array, where the words separated by spaces are each an element
//   - loop over the array
//     - get the length of the current element in the array
//     - Check if this length already exists in the letterCounter object
//       - add this length as a key to the object letterCounter if it doesn't exist already and set its value to 1
//       - if it already exists, increment its value by 1
//   - return letterCounter

function wordSizes(str) {
  let letterCounter = {};
  if (str) {
    let arrayOfStr = str.split(' ');
    arrayOfStr.forEach((el) => {
      el = removeNonLetters(el);
      let len = el.length;
      if (letterCounter.hasOwnProperty(len)) {
        letterCounter[len] += 1;
      } else {
        letterCounter[len] = 1;
      }
    })
  }
  console.log(letterCounter);
}
function removeNonLetters(str) {
  return str.replace(/[^a-zA-Z/]/g, '')
}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
*/
/*
//Letter Swap
// Problem:
//   - Input: string that may be space separated words or a single word
//   - Output: new string that has the first and last letter of every word in input string switched
// Example:
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// Algorithm:
//   - create a new empty string variable, swappedStr
//   - convert the input string to an array where each element is a word from the string 
//   - iterate over the array
//      - for every element return a new string that swaps the first and last letter
function swap(str) {
    let arrayOfWords = str.split(' ');
    let swappedArray = arrayOfWords.map(el => el.length > 1 ? el[el.length-1] + el.slice(1,el.length-1) + el[0] : el)
    console.log(swappedArray.join(' '));
  }

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/
/*
// Convert a String to a Number
function stringToSignedInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let convertedNum = 0;
  let strArray = str.split('');
  if (str[0] === '-' || str[0] === '+') {
    strArray.shift();
  } 
  strArray.reduce((acc, currentVal) => {
    convertedNum = DIGITS[currentVal] + (acc * 10);
    return convertedNum;
  },0)
  if (str[0] === '-') {
    convertedNum *= -1;
  }

  return convertedNum;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
*/
/*
// Convert a Number to a String
// Problem:
//   - Input: number
//   - Output: same number converted to a string
//   - Rules: can't use any built-in function to convert 
// Examples: 
// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"

// Algo:
//   - create a reference object where the keys are numbers 0-9, and the values are the strings of those keys 0-9
//   - create a new variable that is a copy of the input number
//   - create a new variable that is an empty string
//   - iterate over the copy of the number
//     - get the remainder by 10 of the number and save this result to the new number variable
//     - get the string version of this number by looking it up in our reference object
//     - concatenate this string value 
//     - set number equal to  number divded by 10 (rounded down)
//     - complete iterations until the number is 0
//   - return the concatenated string

function integerToString(num) {
  const numToStrings =  {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }
  let numToString = '';
  if (num === 0) {
    numToString = numToStrings[num];
    console.log(numToString);
    return numToString;
  }
  while (num > 0) {
    let remainder = num % 10;
    let strRemainder = numToStrings[remainder];
    numToString = strRemainder + numToString;
    num = Math.floor(num / 10);
  }
  console.log(numToString);
}
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
*/