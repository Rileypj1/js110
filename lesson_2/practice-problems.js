// let arr = ['10', '11', '7', '8'];
// console.log(arr.sort((a, b) => Number(b) - Number(a)));

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// console.log(books.sort((a, b) => Number(a['published']) - Number(b['published'])));

/*
//get 'g' in every example
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0
])
*/
/*
//change value from 3 to 4 in every example
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4
console.log(arr2)

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log(obj2);
*/
/*
// get total age of male members of family
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let totalAge = 0;
Object.keys(munsters).filter(key => munsters[key]['gender'] === 'male').forEach(member => {
  totalAge += munsters[member]['age'];
});
console.log(totalAge);
*/
/*
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
Object.keys(munsters).forEach(name => {
  console.log(`${name} is a ${munsters[name]['age']}-year-old ${munsters[name]['gender']}`);
})
*/
/*
// output all vowels in arrays. must use forEach
let vowels = 'aeiou';
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
Object.values(obj).forEach(nestedArray => {
  nestedArray.forEach(word => {
    let chars = word.split('');
    chars.forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    })
  })
}
);
*/
/*
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
arr.forEach((array) => {
  if (typeof(array[0]) === 'string') {
    array.sort().reverse();
  } else array.sort((a, b) => b - a);
})
console.log(arr);
*/
/*
// increment each number 1
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let increment = arr.map(object => {
  let copy = Object.assign({}, object);
  Object.keys(copy).map(key => copy[key] += 1);
  return copy;
})
console.log(arr);
console.log(increment);
*/
/*
//deep copy of object
const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

const copy = {}
Object.keys(truthiness).forEach(key => {
  let val = truthiness[key].slice()
  copy[key] = val;
})
copy['false'] = false;
console.log({truthiness});
console.log({copy});
*/
/*
//filter to keep only numbers with multiples of 3 but keep same array structure
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
console.log(arr.map(nested => {
  let filteredArr = nested.filter(num => num % 3 === 0);
  return filteredArr;
}));
*/
/*
// sort array based on the total number of odd numbers each nested array contains
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
console.log(arr.sort((a, b) => {
  let oddA = a.filter(el => el % 2 > 0).reduce((acc, val) => acc + val, 0);
  let oddB = b.filter(el => el % 2 > 0).reduce((acc, val) => acc + val, 0);
  return oddA - oddB;
}));
*/
/*
//return the colors of the fruits and sizes of the vegetables
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
console.log(Object.keys(obj).map(produceItem => {
  if(obj[produceItem]['type'] === 'fruit') {
    return obj[produceItem]['colors'].map(color => color.slice(0,1).toUpperCase() + color.slice(1));
  } else return obj[produceItem]['size'].toUpperCase();
}));
*/
/*
// return same array of objects but only keep objects where all numbers are even
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
console.log(arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
}));
*/
/*
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};
arr.forEach(nested => {
  obj[nested[0]] = nested[1];
})
console.log(obj);
// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
*/
/*
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
let deepCopy = {}
Object.keys(munsters).forEach(key => {
  let deep = JSON.parse(JSON.stringify(munsters[key]));
  deepCopy[key] = deep;
})
deepCopy.lily = 33;
console.log(munsters);
console.log(deepCopy);
*/
/*
function generateUUID() {
  let letters = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
  let uuid = '';
  while (uuid.length < 36) {
    let idx = Math.floor(Math.random() * letters.length);
    uuid += letters[idx];
    if (uuid.length === 8 || uuid.length === 13 || uuid.length === 18 || uuid === 23 ) {
      uuid += '-';
    }
  }
  console.log(uuid);
  return uuid;
}
generateUUID();
*/
