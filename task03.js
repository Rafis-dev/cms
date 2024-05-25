'use strict';

const generateArray3 = (arrLength, n, m, type) => {

  let newArray = new Array(arrLength).fill();

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let randomNumber = () => Math.round(Math.random() * (max - min)) + min;

  let resultArray = newArray.map(randomNumber);

  if (type === 'even') {
    resultArray = resultArray.filter(item => !(item % 2));
  } else if (type === 'odd') {
    resultArray = resultArray.filter(item => item % 2);
  }

  while (resultArray.length < arrLength) {
    let num = randomNumber();
    if ((type === 'even' && !(num % 2)) || (type === 'odd' && num % 2)) {
      resultArray.push(num);
    }
  }

  return resultArray;

}

console.log(generateArray3(15, 50, 70, 'even'));