'use strict';

const getLeapYears = (n, m) => {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  const leapYears = [];

  while (min <= max) {
    if (!(min % 400) || !(min % 4) && min % 100) {
      leapYears.push(min);
    }
    min++;
  }

  return leapYears;

}

console.log(getLeapYears(1900, 2020));