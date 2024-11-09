/*
// Lettercase Percentage Ratio
// Understand the Problem:
// input: string 
// output: object
// Explicit rule: the output has to have the following properties:
// 1. % of chars in the input that are lowercase
// 2. % of chars in input that are uppercase
// 3. % that are neither
// % are in decimal format 
// Implicit rules: whitespaces count as option 3 in explicit rules

// Examples: 
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Data Structures: strings and arrays

// Algo: 
// 1. create an object percentages that has the keys given in examples
// 2. create an array strArray that is the input string converted to an array, - each char is an Element
// 3. create stringLength variable that is length of strArray
// 3. look at each element in strArray --
//   - identify lowercase letters by seeing if the char falls within the lowercase range
//   - do the same for uppercase
//   - if the first two conditions above are not met, assume it's neither
//   - for every match add 1 to the matching key in the percentages object
// 4. repeat step 3 for all elements 
// 5. for each key in the percentages object, divide the current property value with the length. round to 2 decimal points

function letterPercentages(str) {
  let percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  let strArray = str.split('');
  let strLength = strArray.length;

  strArray.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      percentages['lowercase'] += 1.00;
    } else if (char >= 'A' && char <= 'Z') {
      percentages['uppercase'] += 1.00;
    } else {
      percentages['neither'] += 1.00;
    }
  });

  Object.keys(percentages).forEach(key => {
    let percent = ((percentages[key] / strLength) * 100).toFixed(2)

    percentages[key] = String(percent)
  });
  console.log(percentages);
  return percentages;
}
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
*/

// Triangle Sides
// Input: 3 numbers (may be float) that represent 3 sides of a triangle
// Ouput: a string representing the triangles classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'

// Rules: 
// -invalid triangle: lengths of two shortest sides are shorter than the longest
//                  : no ZERO lengths for a side 
// - equilateral: all three sides are equal 
// - isosceles: two sides are equal, and 3rd is diff
// - scalene: all three sides are diff lengths 

// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"
/*
function checkInvalid(sidesArr) {
  for (let i = 0; i < sidesArr.length; i += 1) {
    if (sidesArr[i] === 0) return 1;
    let filteredSides = sidesArr.filter((num, idx) => idx !== i).reduce((acc, val) => acc + val);
    if (filteredSides < sidesArr[i]) return 1;
  }
}

function checkEquilateral(sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) return 1;
}

function checkIsosceles(sides) {
  if ((sides[0] === sides[1] && sides[0] !== sides[2])) {
    return 1;
  } else if (sides[1] === sides[2] && sides[1] !== sides[0]){
    return 1;
  }
}

function checkScalene(sides) {
  if (sides[0] !== sides[1] && sides[0] !== sides[2]) {
    return 1;
  } else if (sides[1] !== sides[2] && sides[1] !== sides[0]) return 1;
}

function triangle(first, second, third) {
  let tri = [first, second, third];
  switch (1) {
    case checkInvalid(tri):
      console.log('invalid');
      break;
    case checkEquilateral(tri):
      console.log('equilateral');
      break;
    case checkIsosceles(tri):
      console.log('isosceles');
      break;
    case checkScalene(tri):
      console.log('scalene');
      break;
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
*/
/*
// Unlucky Days 

// Algo:
// Iterate over all the months of the given year.

// For each month, get the day that falls on the 13th.
// - retrieve the month 
// Count the 13ths that fall on a Friday.
// Return the count.

// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

function fridayThe13ths(year) {
  let thirteens = 0;
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'
    ,'September','October','November','December'
  ];
  months.forEach(month => {
    let thirteenthDay = new Date(`${month} 13, ${year}`);
    if (thirteenthDay.getDay() === 5) thirteens += 1;
  });

  console.log(thirteens);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
*/
/*
// Next Featured Number Higher than a Given Value
// Input: number
// Output: next featured number 
// Explicit Rules for a featured number: 
//   - has to be multiple of 7
//   - cannot repeat digits (e.g., 133)
//   - has to be an odd number 
//   - largest possible featured number is 9876543201

// Test cases:
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."

// Algo:
// 1. write a helper function for each explicit rule 
//   - write a function multiplesOf7
//   - write a function doesRepeatDigits and see if the number repeats digits 
//   - write a function isOdd and check if number is odd 
// 2. given the input number of the main function "featured", multiply by 7
// 3. check the product from step 2 to see if it meets all conditions written in step 1
//   - if true, return the product 
//   - if not, multiply the product by 7
//   - repeate until featured number is found OR until the number is > 9876543201

function doesRepeatDigits(num) {
  let numArray = String(num).split('')
  let bool = false;

  for (let i = 0; i < numArray.length; i += 1) {
    let currentNum = numArray[i];
    if (numArray.indexOf(currentNum, i + 1) > 0) {
      bool = true;
      break;
    }
  }
  return bool;
}
function isEven(num) {
  return num % 2 === 0;
}

function featured(num) {
  const threshold = 9876543201;
  let result;
  let noResultMessage = "There is no possible number that fulfills those requirements.";
  for (let i = num + 1; i <= threshold; i += 1) {
    if ((i % 7 > 0 || doesRepeatDigits(i) || isEven(i))) {
      continue;
    } else {
      result = i
      break;
    }
  }
  if (!result) {
    return noResultMessage;
  } else {
    return result;
  }
}
// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
console.log(featured(9876543186));       // 9876543201
*/
