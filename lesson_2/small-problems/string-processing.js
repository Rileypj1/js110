/*
// Uppercase Check
function isUppercase(str) {
  console.log(str === str.toUpperCase());
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
*/

/*
// Delete Vowels
function removeVowels(arr) {
  let vowels = 'aeiou';

  console.log(arr.map(string => {
    let noVowels = ''
    for (let i = 0; i < string.length; i += 1) {
      if (!vowels.includes(string[i].toLowerCase())) {
        noVowels += string[i];
      }
    }
    return noVowels;
  }));
}
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
*/
/*
// Lettercase Counter
function letterCaseCount(str) {
  let stringDictionary = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  for (let i = 0; i < str.length; i += 1) {
    let currentChar = str[i];
    if (currentChar >= 'a' && currentChar <= 'z') {
      stringDictionary['lowercase'] += 1;
    } else if (currentChar >= 'A' && currentChar <= 'Z') {
      stringDictionary['uppercase'] += 1;
    } else {
      stringDictionary['neither'] += 1;
    }
  }
  console.log(stringDictionary);
}
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
*/

/*
// Capitalize Words

function wordCap(str) {
  let strArray = str.split(' ').map(word => {
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  })
  console.log(strArray.join(' '));
}
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
*/
/*
// Swap Case
function swapCase(str) {
  let strArray = str.split(' ').map(word => {
    let swapped = '';
    for (let i = 0; i < word.length; i += 1) {
      let char = word[i];
      if (char >= 'a' && char <= 'z') {
        swapped += char.toUpperCase();
      } else if (char >= 'A' && char <= 'Z') {
        swapped += char.toLowerCase();
      } else {
        swapped += char;
      }
    }
    return swapped;
  })
  console.log(strArray.join(' '));
  return strArray.join(' ');
}
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
*/
/*
// Staggered Caps Part 1 & 2
function staggeredCase(str) {
  let strArray = str.split().map((word) => {
    let staggeredWord = ''
    let counter = 0
    for (let i = 0; i < word.length; i += 1) {
      let char = word[i];

      let evenOrOddIdx = (counter % 2 === 0) ? 'even' : 'odd';
      if (char >= 'a' && char <= 'z') {
        char = evenOrOddIdx === 'even' ? char.toUpperCase() : char
        staggeredWord += char;
      } else if (char >= 'A' && char <= 'Z') {
        char = evenOrOddIdx === 'odd' ? char.toLowerCase() : char
        staggeredWord += char;
      } else {
        staggeredWord += char;
      }

      if (char === ' ' || Number.parseInt(char)){
        continue;
      } else {
        counter += 1;
      }
    }
    return staggeredWord;
  })
  return strArray.join(' ');
}
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/
/*
// How Long Are You?
function wordLengths(str = '') {
  if (str.length === 0) {
    return [];
  }
  let lengthArray = str.split(' ').map(word => {
    return word + ' ' + word.length;
  });
  console.log(lengthArray);
  return lengthArray;
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
*/

// Search Word (Part 1)
function searchWord(word, str) {
  let highlightedText = str.split(' ').map(currentWord => {
    if (currentWord.toLowerCase() === word.toLowerCase()) {
      return "**" + currentWord.toUpperCase() + '**';
    } else {
      return currentWord;
    }
  }).join(' ');
  console.log(highlightedText);
  return highlightedText;
}
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);