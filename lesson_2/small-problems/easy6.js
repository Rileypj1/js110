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
