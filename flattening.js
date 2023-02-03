export function flattening() {
  let array = [[1, 2, 3], [4, 5], [6]];

  const reduceArray = array.reduce((preValue, curValue) => {
    preValue.concat(curValue);
  });
  console.log(reduceArray);
}
