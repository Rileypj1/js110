/*
// Sum of digits
function sum(int) {
  console.log(String(int).split('').reduce((acc, int) => Number(int) + acc, 0));
}
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
*/
/*
// Alphabetical Numbers
function alphabeticNumberSort(arr) {
  const alphaNumDict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }
  let copy = arr.slice().sort((a,b) => {
    return alphaNumDict[a] < alphaNumDict[b] ? a = -1: 1;
  })

  console.log(copy);
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/
/*
//Multiply all Pairs
function multiplyAllPairs(first, second) {
  let final = [];

  first.forEach((num1) => {
    second.forEach((num2) => final.push(num1 * num2));
  })
  console.log(final.sort((a,b) => a - b));
}
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
*/
/*
// Leading Substrings
function leadingSubstrings(str) {
  let final = []
  str.split('').forEach((char, idx) => {
    if (idx === 0) {
      final.push(char);
    } else if (idx === (str.length-1)) {
      final.push(str);
    } else {
      final.push(str.slice(0, idx+1));
    }
  });
  return final;
}
// // leadingSubstrings('abc');      // ["a", "ab", "abc"]
// // leadingSubstrings('a');        // ["a"]
// // leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


//All Substrings

function substrings(str) {
  let final = []
  for (let i = 0; i < str.length; i +=1) {

    final = final.concat(leadingSubstrings(str.slice(i)))
  }
  return final;
}

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


// //Palindromic Strings
function isMatchingChar(substr) {
  if (substr.length === 1) return false;
  let half = Math.floor(substr.length/2);
  let idx = 0;
  let result = true;
  while(idx < half) {
    let currentChar = substr[idx];
    let oppositeChar = substr[substr.length - (idx + 1)]
    // console.log(substr.length - (idx + 1))
    // console.log(currentChar === oppositeChar);
    if (currentChar !== oppositeChar){
      result = false;
      break;
    };
    idx += 1;
  }
  return result;
}
function palindromes(str) {
  let combos = substrings(str);
  combos = combos.filter(isMatchingChar)
  return combos;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]  

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/
/*
//Sum of Sums
function sumOfSums(arr) {
  let sum = 0
   arr.forEach((num,idx) => {
    let iterIdx = 0;
    while (iterIdx <= idx) {
      sum = sum + arr[iterIdx];
      iterIdx += 1;
    }

});
console.log(sum);
}
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
*/
/*
// Grocery List
function buyFruit(groceries) {
  let flattenedArr = []
  groceries.forEach(fruit => {
    let quantity = fruit[1];
    let nameOfFruit = fruit[0];
    for (let i = 1; i <= quantity; i+=1) {
      flattenedArr.push(nameOfFruit);
    }
  })
  console.log(flattenedArr);
  return flattenedArr;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/
/*
//Inventory Item Transactions
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, array) {
  console.log(array.filter(nested => nested['id'] === itemID));
}
transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/
/*
//Inventory Item Availability
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(itemID, array) {
  let givenItem = array.filter(nested => nested['id'] === itemID);
  let moneyIn = 0;
  let moneyOut = 0;
  givenItem.forEach(txn => {
    if(txn['movement'] === 'in') {
      moneyIn += txn['quantity'];
    } else if (txn['movement'] === 'out') {
      moneyOut += txn['quantity'];
    }
  });
  console.log( (moneyIn - moneyOut) > 0);
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
*/