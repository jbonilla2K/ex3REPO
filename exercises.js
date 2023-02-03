//quote randomizer

import { randomQuote } from "./modules/randQuote.js";
randomQuote();

//3.1 flattening
import { flattening } from "./modules/flattening.js";

flattening();

//3.2 loop
import { loopTest } from "./modules/looping.js";

loopTest(
  3, //input value
  (n) => n > 0, // test function - test if n is greater than 0
  (n) => n - 1, //updates function - updates the value of n
  console.log //body function - prints the results
);

//3.3 & 3.4 everyLoop & someLoop
import { everyLoop, someLoop } from "./modules/every&some.js";

console.log(everyLoop([1, 3, 5], (n) => n < 10));
console.log(everyLoop([2, 4, 16], (n) => n < 10));
console.log(everyLoop([], (n) => n < 10));

console.log(someLoop([1, 3, 5], (n) => n < 10));
console.log(someLoop([2, 4, 16], (n) => n < 10));
console.log(someLoop([], (n) => n < 10));
