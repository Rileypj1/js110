/*
//Double Char (Parts 1 & 2)
function isConsonant(char) {
  let vowels = 'aeiou';
  return vowels.includes(char) === false;
}
function doubleConsonants(str) {
  let double = '';
  let counter = 0;
  while (str && counter < str.length) {
    if (isConsonant(str[counter])) {
      double += (str[counter] + str[counter]);
    } else {
      double += str[counter];
    }
    counter += 1;
  }
  console.log(double);
}

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
*/
/*
//Reverse Number
function reverseNumber(integer) {
  let reversed = 0;

  for (let i = 10; integer > 0;) {
    let remainder = integer % 10;
    reversed *= i;
    integer = Math.floor(integer / 10);
    reversed += remainder;
  }
  console.log(reversed);
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
*/
/*
// Counting Up
function sequence(int) {
  let result = []
  let i = 1
  do {
    result.push(i)
    i += 1;
  } while (i <= int)
  console.log(result);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
*/
/*
// Name Swapping
function swapName(name) {
  console.log(name.split(' ').reverse().join(', '));
}
swapName('Joe Roberts');    // "Roberts, Joe"
*/
/*
//Sequence Count
function sequence(count, startingNum) {
  let result = [];
  let i = 1;
  while (result.length < count) {
    result.push(startingNum * i)
    i += 1;
  }
  console.log(result);
}
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
*/
/*
// Reverse It (part 1 & 2)

// function reverseSentence(str) {
//   console.log(str.split(' ').reverse().join(' '));
// }
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

function reverseWords(str) {
  let final = str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else return word;
  });
  console.log(final);
}
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/

// Matching Parentheses
// 1. find instances of all '(' and ')' in the input string 
// 2. push the index values of '(' to an array called Left
// 3. push the index values of ')' to a separate array called Right
// 4. if the length of Left doesn't equal right, return false
// 5. Else, iterate over the Left array. For each index value
//   - there should be a greater index value in the Right array
//   - if this is condition is met for every index value, return true, else false

function isBalanced(str) {
  let left = [];
  let right = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      left.push(i);
    } else if (str[i] === ')') {
      right.push(i);
    }
  }

  if (left.length !== right.length) return false;
  return left.every((paren, idx) => left[idx] < right[idx]);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);