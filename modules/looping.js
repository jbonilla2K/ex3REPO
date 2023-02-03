export function loopTest(value, test, update, body) {
  if (test(value)) {
    let num = value;
    body(num);
    for (let i = 1; i < value; i++) {
      num = update(num);
      body(num);
    }
  }
}
