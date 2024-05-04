'use strict';

{
  const salary = prompt("Какой Ваш доход?", '15000');

  if (salary <= 15000) {
    console.log(`Налог на Ваш доход составляет ${salary * 0.13} рублей`);
  } else if (salary <= 50000) {
    console.log(`Налог на Ваш доход составляет ${(salary - 15000) * 0.2} рублей`);
  } else {
    console.log(`Налог на Ваш доход составляет ${(salary - 50000) * 0.3} рублей`);
  }
}