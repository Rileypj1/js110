// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join('')); // => 'a,b,c,d,e,f'

// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
// obj['apple'] = 'Fruit'
// obj.carrot = 'Vegetable'
// obj['pear'] = 'Fruit';

// function selectFruit(produce) {
//   let fruit = {};
//   for (i in produce) {
//     if (produce[i] === 'Fruit'){
//       fruit[i] = produce[i];
//     }
//   }
//   return fruit;
// }

// function multiply(numbers, multiplier) {
//   let newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let currentNum = numbers[i]
//     newNumbers.push(currentNum * multiplier);
//   }
//   console.log(newNumbers);
// }
// let myNumbers = [1, 4, 3, 7, 2, 6];
// multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let flintstonesObj = {};
// let keys = Object.keys(flintstones);
// keys.forEach(i => flintstonesObj[flintstones[i]] = i);
// console.log(flintstonesObj);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// let values = Object.values(ages);
// let totalAge = values.reduce((acc, i) => acc + i);
// console.log(totalAge);

// let vals = Object.values(ages)

// console.log(vals.reduce((acc, curr, i) => curr < acc ? curr : acc)
// );

// let statement = "The Flintstones Rock";
// let frequencyOfLetter = {}
// statement.split('').forEach(el => {
//   if (el.trim()) {
//     frequencyOfLetter[el] = 0;
//     frequencyOfLetter[el] += 1
//   }
// });
//   // if(el) return frequencyOfLetter[el] += 1
// console.log(frequencyOfLetter['Z']);