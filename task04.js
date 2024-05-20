'use strict';

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  let totalItems = 0;
  let totaPrice = 0;

  for (let item in arr) {
    totalItems += arr[item][0];
    totaPrice += arr[item][1];
  }

  return parseFloat((totaPrice / totalItems).toFixed(2));

}

console.log(getAveragePriceGoods(allCashbox));
