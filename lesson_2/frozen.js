let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
obj; // => { a: 'foo' }

obj.c = 'ccc';
obj; // => { a: 'foo' }

arr[3] = 'x';
arr; // => [ 'a', 'b', 'c' ]

// arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
let copy = arr.slice();
copy[0] = 'z';
copy[3] = 'd';

console.log(copy);
console.log(arr);