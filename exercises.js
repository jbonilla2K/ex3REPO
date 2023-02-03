//quote randomizer

import { randomQuote } from "./modules/randQuote.js";
randomQuote();

//3.1 flattening

export function flattening() {
  let array = [[1, 2, 3], [4, 5], [6]];

  const reduceArray = array.reduce((preValue, curValue) => {
    return preValue.concat(curValue);
  });
  console.log(reduceArray);
}

flattening();
//3.2 loop
export function loop(value, test, update, body) {
  if (test(value)) {
    let num = value;
    body(num);
    for (let i = 1; i < value; i++) {
      num = update(num);
      body(num);
    }
  }
}

loop(
  3, //input value
  (n) => n > 0, // test function - test if n is greater than 0
  (n) => n - 1, //updates function - updates the value of n
  console.log //body function - prints the results
);

//3.3 everyLoop

export function everyLoop(array, test) {
  return array.every(test);
}

console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyLoop([], (n) => n < 10));
// → true

//3.4 someLoop

export function someLoop(array, test) {
  return array.some(test);
}

console.log(someLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(someLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(someLoop([], (n) => n < 10));
// → true
