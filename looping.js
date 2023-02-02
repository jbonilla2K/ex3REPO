function loop(value, test, update, body) {
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
