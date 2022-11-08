let twoPairValues = [
  [1, 5],
  [9, -7],
  [0, 8],
  [6, 3],
  [4, 11],
  [14, 0],
  [8, 1],
  [4, 9],
];

let targetValue = 9;
let result;

let check = (arr, val) => {
  arr.forEach((el, i) => {
    let num = 0;
    el.forEach((x) => {
      num += x;
    });
    if (num == val) {
      result = i;
    }
  });

  if (result != undefined) {
    return `The result is in the index ${result}`;
  } else {
    return "No result found";
  }
}

console.log(check(twoPairValues, targetValue));
