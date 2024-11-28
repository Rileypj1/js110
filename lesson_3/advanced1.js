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

