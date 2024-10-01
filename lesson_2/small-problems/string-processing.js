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
