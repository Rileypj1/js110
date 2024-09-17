
//Cute Angles
// Problem:
//   Input: floating number representing an angle
//   Output: string that outputs the angle in degrees, minutes, and seconds
//   Rules:
//     Explicit: 
//       - 60 minutes in a degree
//       - 60 seconds in a minute
// Examples:
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
/*
// Data Structure: string, number (floating);
// Algorithm:
//   - check if the input number is 0 or is an integer
//     - if so, the output of our function will immediately be that number as the degree, and then two 0s for minutes and seconds
//   - if the input is a decimal
//     - write a helper function, getDecimal, that gets the value of just the decimal part of the floating number
//     - write a helper function, getMinutesOrSeconds
//   - concatenate the results from all helper functions into one final string

function dms(degrees) {
  let dmsNotation = 0;
  if (Number.isInteger(degrees)) {
    dmsNotation = degrees + '°00\'00"';
    console.log(dmsNotation);
    return dmsNotation;
  }
  let minutes = (degrees - Math.floor(degrees)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;
  dmsNotation = Math.floor(degrees) + '°' + Math.floor(minutes) + '\'' + Math.floor(seconds) + '"';
  console.log(dmsNotation);
  return dmsNotation;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/
/*
//Combining Arrays
function union (first, second) {
  let unioned = first;
  second.forEach(el => {
    if (!unioned.includes(el)){
      unioned.push(el);
    }
  })
  console.log(unioned);
  return(unioned);
}
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
*/
/*
// Halvsies
function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  let outer = []
  let first_half = arr.slice(0, half);
  outer.push(first_half);
  if (arr.length === first_half) {
    outer.push([]);
  } else {
    outer.push(arr.slice(half));
  }
  console.log(outer);
  return(outer);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
*/
/*
//Find the Duplicate
function findDup(arr) {
  let countTracker = {}
  for (let i = 0; i < arr.length; i += 1) {
    if (countTracker.hasOwnProperty(arr[i])) {
      console.log(arr[i]);
      return arr[i];
    } else {
      countTracker[arr[i]] = 1;
    }
  }
}
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
*/
/*
//Combine Two Lists
function interleave(first, second) {
  let finalArr = first.slice();
  let finalIdx = 1;
  for (let i = 0; i < second.length; i += 1) {
    finalArr.splice(finalIdx,0, second[i]);
    finalIdx += 2;
  }
  console.log(finalArr);
  return finalArr;
}
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
*/
