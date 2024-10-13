/*
//Rotation Part 1

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;

  let newArr = arr.slice();
  if (arr.length === 0) {
    return newArr;
  } else {
    let first = newArr.shift();
    newArr[newArr.length] = first;
  }
  console.log(newArr);
  return newArr;
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
*/
/*
//Rotation Part 2
// Input: a positive number > 0 AND the index of the digit that will be moved to the end of the number
// Output: transformed number
// Rules: Implicit: nonnegative number > 0;

// Test Cases: rotateRightmostDigits(735291, 2);      // 735219

// Data Structure/ Algorithm:
// working with numbers, and considering using strings and arrays in the transformation
// 1. convert input number to a String, and then convert to an array
// 2. select the digit/character based on the count argument using the length property
// 3. mutate the array to move the selected character to the end. 
// 4. shift all other characters down
// 5. convert to number and return that value
function rotateRightmostDigits(num, count) {
  let numArray = String(num).split('')
  let digit = numArray.splice(numArray.length - count, 1);
  numArray[numArray.length] = digit;
  let finalNum = Number(numArray.join(''));
  console.log(finalNum);
  return finalNum;
}
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
*/

//Rotation Part 3
// Input: Number
// Ouput: max rotation of that Number. Move every digit to the left until all digits have been rotated in the Number. Return the final rotated Number.
// Rules: leading zeros get removed: maxRotation(105) => 15
// Test Cases: 
// maxRotation(735291) => 321579
// maxRotation(3) => 3
// maxRotation(35) => 53

// Data Structure/ Algorithm:
// 1. Perform steps outlined in Rotation Part 2.
// 2. Step 1 ^ should be performed for every index in numArray;
// 3. set a final num variable that is the digit produced in every iteration. 
// 4. multiply 10 * the current index, add tha value + the current digit to final Num 

/*
function maxRotation(num) {
  let numArray = String(num).split('');
  let finalNum = 0;
  let i = 0;
  while (numArray.length > 0) {
    if (numArray.length === 1) {
      finalNum += Number(numArray[0]);
      break;
    }
    let digit = numArray.splice(1, 1);
    let rotatedDigit = numArray.splice(0,1)[0];
    numArray[numArray.length] = rotatedDigit;
    finalNum +=  Number(digit);
    finalNum *= 10; 
  }
  console.log(finalNum);
  return finalNum;

}
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/
/*
//Stack Machine Interpretation
// writing a function that operates as a mini stack and register programming language
// Input: selection from a predetermined list of commands to run 
// Output: integer that is the output of the operation that was the input to the function
// Rules: set of commands that need to have implementation code: n, PUSH, ADD,
// SUB, MULT, DIV, REMAINDER, POP, PRINT
// : As a stack programming language, the operation always takes the most recent value from a stack (last pushed element in the array)
// : it then operates this value with the register value
// : stack is initialized to [] and register to 0;
// : register is not a part of the stack. consider it the current value that is being operated on and returned

function minilang(command) {

  let stack = [];
  let register = 0;
  const operations = {
    n: (num) => register = Number(num),
    PUSH: () => stack.push(register),
    ADD: () => register += stack.pop(),
    SUB: () => register -= stack.pop(),
    MULT: () => register *= stack.pop(),
    DIV: () => register = Math.floor(register / stack.pop()),
    REMAINDER: () => register = register % stack.pop(),
    POP: () => register = stack.pop(),
    PRINT: () => console.log(register)
  }

  let commandArr = command.split(' ');
  commandArr.forEach(comm => {
    if (Number(comm)) {
      operations['n'](comm);
    } else {
      operations[comm]();
    }
});
}
// minilang('PRINT');
// minilang('5 PUSH 3 MULT PRINT');
// minilang('PRINT');
// 0

// minilang('5 PUSH 3 MULT PRINT');
// 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

// minilang('5 PUSH POP PRINT');
// 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
*/

// word to digit 
// Input: string/sentence 
// Ouput: same string that has the literal digit for every occurence of a number word (e.g., "One, Two, Three...")
// Implicit Rules: there is a space between consectutive numbers in the output (e.g., '5 5 5' NOT '555');

// Test Cases: wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."
// Data Structures: input and output are strings but I will consider transforming to an array for iteration in my algo
// Algo:
// 1. create an object numberDict with the keys being the number word and values being the corresponding digit 
// 2. set a new array strArray that is the input argument converted to an array 
// 3. iterate over strArray
//   - for each Element, check if there is a match in the numberDict object. 
//   - if yes, return the digit value of the Element, if not return the same value as the element 
// 4. join the result of this iteration to convert this transformed array to a new string, converted; 
// 5. return the converted string
function isFinalCharPunct(str) {
  return str[str.length-1] < 'a';
}
function wordToDigit(sentence) {
  const numberDict = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  let strArray = sentence.split(' ');
  let transformedArr = strArray.map(word => {
    let slicedWord = word;
    if (isFinalCharPunct(slicedWord)) {
      slicedWord = slicedWord.slice(0, slicedWord.length-1);
    }
    if (numberDict.hasOwnProperty(slicedWord)) {
      if (isFinalCharPunct(slicedWord)) {
        return numberDict[slicedWord] + word[word.length-1];
      } else {
        return word;
      }
      
    } else {
      return word;
    }
  });
  let final = transformedArr.join(' ');
  console.log(final);
  return final;
}
wordToDigit('Please call me at five five five one two three four. Thanks.');