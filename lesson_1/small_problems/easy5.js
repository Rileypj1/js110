
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
/*
//Multiplicative Average
function multiplicativeAverage(arr) {
  let multiplicative = arr.reduce((acc, val) => acc * val, 1);
  let avg = Number(multiplicative / arr.length).toFixed(3);
  console.log(String(avg));
}
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
*/
/*
//Multiply lists
function multiplyList(first, second) {
  let multiplesList = [];
  first.forEach((el, idx) => {
    let product = el * second[idx];
    multiplesList.push(product);
  })
  console.log(multiplesList);
}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
*/
/*
//List of Digits
function digitList(num) {
  let digits = [];
  while (num > 0) {
    let current = num % 10
    digits.push(current);
    num = Math.floor(num / 10);
  }
  console.log(digits.reverse());
}
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/
/*
//How Many?
function countOccurrences(arr) {
  let tracker = {};
  vehicles.forEach(el => {
    if (tracker.hasOwnProperty(el)) {
      tracker[el] += 1;
    } else {
      tracker[el] = 1;
    }
  })
  Object.entries(tracker).forEach(nested =>
    console.log(nested[0] + ' => ' + nested[1])
  )
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
*/
/*
//Array Average
function average(arr) {
  let avg = Math.floor((arr.reduce((acc, val) => acc + val)) / arr.length);
  console.log(avg);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
*/
/*
//After Midnight (Part 1)
// Problem
//   Input: integer representing the number of minutes
//   Output: time of day in 24 hour time (hh:mm) as a string
//   Rules: if the input integer is negative the time given in minutes is before midnight. If positive, time is after midnight
//    - therefore function needs to be able to work with negative and positive ints
//   Implicit rules: 60 minutes in an hour, 24 hours in a day

// Examples:
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// Algorithm:
//   - set config variables called minutes set to 60, hours set to 24, and minutesInADay set to minutes * hours;
//   - get the remainder of the input int divided by minutesInADay
//   - subract minutesInADay - remainder. 
//   - divide this result by minutes variable and round down.
//   - also get the remainder of the subtraction result divided by minutes. 
//   - the final hour and minutes result will be the sum of the previous two results
//   - if the remainder is 

function timeOfDay(integer) {
  let finalTime = '00:00';
  const MINUTES = 60;
  const HOURS = 24;
  const MINUTES_IN_A_DAY = MINUTES * HOURS;
  if (!integer) return finalTime;


  let minutesRemaining = MINUTES_IN_A_DAY - (Math.abs(integer) % MINUTES_IN_A_DAY);
  let finalHours = Math.floor(minutesRemaining / MINUTES);
  let finalMinutes = String(minutesRemaining % MINUTES);
  finalHours = String(finalHours).length === 1 ? '0' + String(finalHours): String(finalHours);
  finalMinutes = String(finalMinutes).length === 1 ? '0' + String(finalMinutes): String(finalMinutes);
  // console.log(finalHours + ':' + finalMinutes);
  return finalTime = finalHours + ':' + finalMinutes;

}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/
