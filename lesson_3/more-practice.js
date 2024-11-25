let statement = "The Flintstones Rock";

let obj = {};
statement.split('').forEach(char => {
  if (obj.hasOwnProperty(char)) {
    obj[char] += 1;
  } else if (char.trim()) {
    obj[char] = 1;
  }
});
console.log(obj);