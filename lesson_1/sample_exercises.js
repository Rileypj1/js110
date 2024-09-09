// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join('')); // => 'a,b,c,d,e,f'

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj['apple'] = 'Fruit'
obj.carrot = 'Vegetable'
obj['pear'] = 'Fruit';

function selectFruit(produce) {
  let fruit = {};
  for (i in produce) {
    if (produce[i] === 'Fruit'){
      fruit[i] = produce[i];
    }
  }
  return fruit;
}

function multiply(numbers, multiplier) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i]
    newNumbers.push(currentNum * multiplier);
  }
  console.log(newNumbers);
}
let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
