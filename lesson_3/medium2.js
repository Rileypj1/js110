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