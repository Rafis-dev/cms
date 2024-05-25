'use strict';

const generateArray2 = (arrLength, n, m) => {
  let newArray = new Array(arrLength).fill();

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  const resultArray = newArray.map(() =>
    Math.round(Math.random() * (max - min)) + min);

  return resultArray;

}

console.log(generateArray2(15, 50, 70));