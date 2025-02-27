/*
//Madlibs Revisited
// input: sentence(s) that are the template to your madlib
// output: completed madlib with filled in set of nouns, adverbs, adjectives
// Rules: random arrays of nouns, adv, adj are built into the program
// Examples: 
// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

// madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.
// Data Structure/ Algo:
// 1. create a dictionary Object, where the key is the part of speech and the value is a list of possible values 
// 2. split the input template up into a list word by word 
// 3. iterate over this list 
//   - if the word is a real word and not an placeholder, return word 
//   - if placeholder, get a random word from the appropriate property in the dictionary object
//   - replace placeholder with word 
// 4. return the final completed madlib

function madlibs(template) {
  const partsOfSpeech = {
    nouns: ['dog', 'shark', 'painting', 'head', 'coffee', 'perfume'],
    adjectives: ['noisy', 'sleepy', 'angry', 'impatient', 'grumpy'],
    adverbs: ['excitedly', 'hastily', 'slowly','confusingly'],
    verbs: ['runs', 'writes', 'cooks', 'swims', 'jumps']
  }

  let arr = template.split(' ').map((word) => {
    if (word[0] !== '%') {
      return word;
    } else {
      let newWord = word.split('').filter(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')).join('') + 's'
      let random = Math.floor(Math.random() * partsOfSpeech[newWord].length);
      return partsOfSpeech[newWord][random];
    }
  })

  return arr.join(' ')
}
let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";
console.log(madlibs(template1));
*/
/*
//transpose MxN matrix

// algo:
// create an empty array 
// iterate over input outer array 
// for each nested array: 
//   - the first row should correspond to the first column in the final array 
//   - repeat until finished

function transpose(matrix) {
  let finalMatrix = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    finalMatrix.push([]);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      finalMatrix[j][i] = matrix[i][j];
    }
  }
  console.log(finalMatrix);
  return finalMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
*/
/*
//Rotating Matrix

// algo: 
// - get the number of rows for the new rotated Array
//   - create an empty array with x nested arrays where x is the length of the outer array 

function rotate90(matrix) {
  let rotated = [];

  for (let i = 0; i < matrix[matrix.length-1].length; i += 1) {
    rotated.push([]);
  }
  for (let i = 0; i < matrix.length; i += 1) {
    let current = matrix[i];
    let col = matrix.length - (i + 1);
    for (let j = 0; j < current.length; j += 1) {
      rotated[j][col] = current[j];
    }
  }
  return rotated; 
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
*/

// Merge Sorted Lists
// Input: two sorted arrays
// Output: a single array that contains all els from both input arrays
// Rules: the new single array must also be in sorted order 
//   : solution can't require you to sort the new array
//   : must build the new array one element at a time 

// test cases:
// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

// algo:
// - create a new array 
// - get the length of the longer of the two arrays
// - iterate with the length of the longer array 
//   - add a nested conditional iteration that ends after the shorter array ends 
//     - for each element in the smaller array, loop through the longer array to find out where its index should be
//     - insert this element from the shorter array into the index found in the previous step for the new empty array 
/*
function merge(left, right) {
  // let longer = firstSorted.length >= secondSorted.length ? firstSorted : secondSorted;
  // let shorter = firstSorted.length < secondSorted.length ?  firstSorted : secondSorted;
  let leftIdx = 0;
  let rightIdx = 0;
  let final = [];

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      final.push(left[leftIdx]);
      leftIdx += 1;
    } else if (right[rightIdx] < left[leftIdx]) {
      final.push(right[rightIdx]);
      rightIdx += 1;
    } else {
      final.push(left[leftIdx],right[rightIdx]);
      leftIdx += 1;
      rightIdx += 1;
    }
  }
  final = final.concat(left.slice(leftIdx), right.slice(rightIdx))
  return final
}

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  let first = arr.slice(0,half);
  let second = arr.slice(half);
  first = mergeSort(first)
  second = mergeSort(second)
  

  // return final;
  return merge(first, second)
  // console.log(final)
}

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1])); // [0, 1, 2, 5, 6, 7, 8, 9]))

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
*/

// binary search
// Input: Array, search item --> which will be an element in the Array;
// Output: the index of the search item in the array 
// Rules: can assume the array is already sorted 
//   : if item is not found, return -1

// Test Case: 
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7

// Algo:
// - make a copy of the input array 
// - find the index value that is the half-way point of the array 
// - if the middle value is less than the search item, only look at the elements after the middle value 
// - do the same thing but reversed if the middle value is more than the search item 
// - repeat steps 2-4 until the search item is found. 
// - if no value is found, return -1
/*
function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
*/
/* 1000 Lights
light switches that you're turning off and on with each round
input: # of light switches which will correspond to the # of rounds you turn off and on the lights
output: array of the light switches (based on their position in the hallway aka index) that are on after rounds complete
Rules: 
  - the first round all switches are off
  - each round you flip the switch for the lights whose index is a multiple of the round (round 2: flip lights 2, 4, 6)
Data Structures/ Algo:
- set an empty variable hallway
- set an array that is length 1 - input variable, all with zeros as values
- set a variable for round
- for current round: get all multiples of the # of the current round all the way up just before the # exceeds the input arg
  - create a helper function for this
- after rounds are complete, get indices of all 1s in the hallway and them in an array

function getMultiples(num, threshold){
  let multiples = [];
  for (let i = 1; (num * i) <= threshold; i += 1) {
    if (i === 1) multiples.push(i)
    let product = num * i
    multiples.push(product);

    if (Math.floor(threshold / 2) === num) {
      multiples.push(threshold);
      break;
    }

  }
  return multiples
}

function lightsOn(switches) {
  let hallway = [];
  hallway.length = switches;
  hallway = hallway.fill(0, 0);

  for (let i = 1; i <= switches; i += 1) {
    let flippedSwitches = getMultiples(i, switches);
    flippedSwitches.forEach((light) => {
        hallway[light - 1] = hallway[light - 1] === 0 ? 1 : 0
    });
  }
  hallway = hallway.map((bool, idx) => {
    if (bool) {
      return idx + 1
    }
  }).filter((on) => on);
  console.log(hallway)
}

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/
/* Diamonds
Input: an odd integer n
Output: a diamond that is n long and n wide at the center
Rules:
- each new row will have one more diamond than the previous until you reach n width
- after reaching the max width, each row will get one diamond smaller until you reach 1

Examples below

Data Structures:
integer as input, but will be working with strings to produce output

Algo:
set a variable currentRow to 1
set an array diamond of empty strings that are length input n
start an iteration that will have input n # of loops
log currentRow # of diamonds
have to get the halfway point based on input n
each iteration should have # of diamonds that are multiples of two of iteration


function diamond(grid) {
  let currentRow = 1;
  for (let i = 1; i <= grid; i += 2) {
      let remainingSpaces = (grid - i) / 2
      console.log(' '.repeat(remainingSpaces) + '*'.repeat(i) + ' '.repeat(remainingSpaces))
  }
  for (let i = (grid - 2); i > 0; i -= 2) {
    let remainingSpaces = (grid - i) / 2
    console.log(' '.repeat(remainingSpaces) + '*'.repeat(i) + ' '.repeat(remainingSpaces))
  }
}
diamond(1);
*/
/* Now I Know My ABCs
input: word
output: boolean declaring whether the word is able to be spelled using the blocks
Rules: given a set of blocks that have two letters each:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
determine if the input can be spelled:
  1. Using only 1 letter per block
  2. Using a block once only to spell the word

Examples:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Data Structure/ Algo:
Input is a string
Blocks are dictionaries/objects?

write a helper function that checks if a block has been used more than once
write a helper function that checks if a letter in a block has already been used
iterate through the input word:
  with each letter, run the helper functions, keeping track in separate variables-- each helper function will be an object tracking each rule
  case doesn't matter when checking the helper function

function isBlockWord(word) {
  const keys = ['B', 'X', 'D', 'C', 'N', 'G', 'R', 'F', 'J', 'H', 'V', 'L', 'Z']
  const vals = ['O', 'K', 'Q', 'P', 'A', 'T', 'E', 'S', 'W', 'U', 'I', 'Y', 'M']

  const distinctBlockRule  = {}
  const distinctLetterPerBlockRule = {}
  let wordArray = word.split('')
  
  for (let i = 0; i < wordArray.length; i += 1) {
    let currentBlock = keys.indexOf(wordArray[i].toUpperCase()) !== -1 ? keys.indexOf(wordArray[i].toUpperCase()): vals.indexOf(wordArray[i].toUpperCase())
    if (distinctBlockRule.hasOwnProperty(currentBlock)) {
      return false;
    } else {
      distinctBlockRule[currentBlock] = wordArray[i]
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));      // true
*/
/* Seeing Stars
input: odd # that represents the n x n dimensions of the star
output: star
Rules: 
- minimum input value is 7
- the middle row of the star is the widest and has n stars * across
- every row before and after middle has 3 * and are spaced incrementally further apart the further the row is from the center

examples:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

Data Structure and Algo: strings and arrays
 we will iterate n times, and the current iteration will represent one row of stars

Initialize row variable to be the input n length with empty strings
start a loop that is n iterations:

*/

function star(num) {
  let row = []
  row.length = num
  row = row.fill(' ', 0)
  let count = num;
  const half = Math.floor(num / 2)

  for (let i = 0; i < num; i += 1) {
    if (i === half) {
      row = row.fill('*',0);
      console.log(row.join(''))
    } else {
      row[half] = '*'
      row[i] = '*'
      row[(row.length - 1) - i] = '*'
      console.log(row.join(''))
    }

    row = row.fill(' ', 0)
  }
}

star(9)
