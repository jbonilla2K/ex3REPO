function everyLoop(array, test) {
  return array.every(test);
}

function someLoop(array, test) {
  return array.some(test);
}
console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyLoop([], (n) => n < 10));
// → true

console.log(someLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(someLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(someLoop([], (n) => n < 10));
// → true
