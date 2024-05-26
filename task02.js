'use strict';

const generateArray2 = (arrLength, n, m) => {
  const min = Math.min(n, m);
  const max = Math.max(n, m);

  return new Array(arrLength)
    .fill()
    .map(() => Math.round(Math.random() * (max - min)) + min);
}

console.log(generateArray2(15, 50, 70));