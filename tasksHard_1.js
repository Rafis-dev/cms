'use strict';

{
  const salary = prompt("Какой Ваш доход?", '15000');

  switch (true) {
    case salary > 0 && salary <= 15000:
      console.log(`Налог на Ваш доход составляет ${salary * 0.13} рублей`);
      break;
    case salary > 15000 && salary <= 50000:
      console.log(`Налог на Ваш доход составляет ${salary * 0.2} рублей`);
      break;
    case salary > 50000:
      console.log(`Налог на Ваш доход составляет ${salary * 0.3} рублей`);
      break;
    default:
      console.log(`Налог на Ваш доход составляет 0 рублей`);
  }

}


