'use strict';

const calculate = (totalSum, productQuantity, promo) => {
  let sum = totalSum;
  let discount = 0;

  if (productQuantity > 10) {
    discount += sum * 0.03;
  }

  if (sum > 30000) {
    discount += (sum - 30000) * 0.15;
  }

  if (promo === 'METHED') {
    discount += sum * 0.1;
  }

  if (promo === 'G3H2Z1' && sum - discount > 2000) {
    discount += 500;
  }

  return sum -= discount;
}

console.log(calculate(100000, 20, 'METHED'));