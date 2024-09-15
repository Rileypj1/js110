
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
