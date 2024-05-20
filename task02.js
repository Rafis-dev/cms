'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let total = 0;

  for (let num of arr) {
    total += num;
  }

  return Math.floor(total / arr.length);
}

console.log(getAverageValue(allCashbox));