'use strict';

{
  const salary = prompt("Какой Ваш доход?", '15000');
  let tax = 0;
  const salaryRemain = salary - 15000;
  const salaryRemain2 = salary - 50000;

  if (salary > 0 && salary <= 15000) {
    tax = salary * 0.13;
    console.log(`Налог на Ваш доход составляет ${tax} рублей`);
  }

  if (salary > 15000 && salary <= 50000) {
    tax = (15000 * 0.13) + (salaryRemain * 0.2);
    console.log(`Налог на Ваш доход составляет ${tax} рублей`);
  }

  if (salary > 50000) {
    tax = (15000 * 0.13) + (50000 * 0.2) + (salaryRemain2 * 0.3);
    console.log(`Налог на Ваш доход составляет ${tax} рублей`);
  }

}