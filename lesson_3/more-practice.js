// Implement a function, capitalize, that capitalizes all words in a sentences. However, only capitalize if the word is followed by a word starting with a vowel (for Ruby don’t use capitalize). -- Peter

/*
Understand the Problem:
Input: string/ text/ sentence
Output: same sentence with noted capitalized words
Rules: return the same sentence but capitalize words where the following word starts with a vowel

Algo:
- create a string "vowels", containing all vowels;
- split the input sentence up into a list, where each element is a separate word
- iterate over this new sentence array
  - check if the current iteration is on the last element
    - if so, add the element to the array and break the loop
  - for each element check the next element in the array
  - look at the initial character in the next element of the array and see if there's a match in the vowels varaible
- create the sentence in string form from this final array
*/
/*
function capitalize(sentence) {
  let vowels = 'aeiou';
  let sentenceArr = sentence.split(' ');
  let finalArr = [];
  for (let i = 0; i < sentenceArr.length; i += 1) {
    let current = sentenceArr[i];

    if (i === sentenceArr.length - 1) {
      finalArr.push(current);
      break;
    }

    let next = sentenceArr[i + 1];

    if (vowels.includes(next[0])) {
      let capitalizedWord = current.slice(0,1).toUpperCase() + current.slice(1);
      finalArr.push(capitalizedWord);
    } else {
      finalArr.push(current);
    }
  }
  return finalArr.join(' ');
}

// Test cases
console.log(capitalize("hello apple world")); // "Hello apple world"
console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
console.log(capitalize("under the oak tree")); // "under The oak tree"
console.log(capitalize("a quick brown fox")); // "a quick brown fox"
*/
/*
// Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s".
function snakeCase(word) {
  let wordArr = word.split('');
  wordArr = wordArr.map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  });
  return wordArr.join('');
}

function transformByS(sentence) {
  let sentenceArr = sentence.split(' ');
  sentenceArr = sentenceArr.map((word, idx) => {
    if ((!sentenceArr[idx - 1]) && (sentenceArr[idx + 1][0] === 's')) {
      return snakeCase(word);
    } else if ((sentenceArr[idx - 1] && sentenceArr[idx + 1]) && ((sentenceArr[idx - 1][0] === 's') || (sentenceArr[idx + 1][0] === 's'))) {
      return snakeCase(word);
    } else if ((!sentenceArr[idx + 1]) && (sentenceArr[idx - 1][0] === 's')) {
      return snakeCase(word);
    } else {
      return word;
    }
  });
  return sentenceArr.join(' ')
}

console.log(transformByS("This starts the interesting sentence test")) // ThIs starts ThE InTeReStInG sentence TeSt
console.log(transformByS("Snake simple scissors")); // 'sNaKe sImPle sCiSsOrS'
console.log(transformByS("apples are sweet")); // 'apples aRe sweet'
console.log(transformByS("Snake simple scissors")); // 'sNaKe sImPle sCiSsOrS'
console.log(transformByS("simple sentence starters")); // 'sImPle sEnTeNcE sTaRtErS'
*/

//practice
// let first = ['hey', 'it\'s', 'me'];
// let second = [1, 2, 3];
// let concatted = first.concat(second);
// // console.log(concatted.every(el => (typeof el === 'number') || (typeof el === 'string')));


// const target = { a: 1, b: [1, 2] };
// const source = { b: 4, c: 5 };
// const final = Object.assign({}, target);
// final['new'] = 77;
// final['b'][2] = 3;
// console.log(final);
// console.log(target);
// console.log(source);

// let arr = [];
// arr['hi'] = 3;

// // Is arr empty?
// console.log(arr.length); //      
// console.log(Object.keys(arr).length); // 

// let testArr = [[1, 3], [2]];
// function shape(arr) {
//   let shapes = [];
//   let dimension = arr.slice();

//   while (dimension.length > 0) {
//     shapes.push(dimension.length);

//     dimension = dimension[0] || null
//   }
//   return shapes;
// }

// shapeTest = (m) => {
//   const shapes = [];
//   let dimension = m;
//   while (dimension && Array.isArray(dimension)) {
//     shapes.push(dimension.length);
//     dimension = (dimension.length && [...dimension][0]) || null;
//   }
//   return shapes;
// };

// console.log(shape(testArr));
// console.log(shapeTest(testArr))
// console.log([...testArr[0]])

const obj = { a: 1, b: 2, c: 3 };
let testArr = [[1, 3], [2], 4, 'hi'];

const test = (arr) => console.log(arr[0])

// let newObj = {};
// Object.keys(obj).filter(prop => obj[prop] < 3).forEach((prop) => {
//   newObj[prop] = obj[prop];
// })
let newObj = Object.keys(obj).reduce((acc, key) => {
  if (obj[key] > 2) {
    acc[key] = obj[key]
  }
  return acc;
}, {})

console.log(newObj)