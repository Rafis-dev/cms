'use strict';

{
  const salary = prompt("Какой Ваш доход?", '15000');
  let tax = 0;
  let taxRate = 0;


  if (salary > 0) {

    if (salary <= 15000) {
      taxRate = 0.13;
      tax = salary * taxRate;
    }

    if (salary <= 50000) {
      taxRate = 0.2;
      tax = (15000 * 0.13) + (salary - 15000) * taxRate;
    } else {
      taxRate = 0.3;
      tax = (15000 * 0.13) + (50000 * 0.2) + (salary - 50000) * taxRate;
    }
  }
  console.log(`Налог на Ваш доход составляет ${tax} рублей`);
}