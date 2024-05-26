'use strict';


const generateArray = (arrLength) => new Array(arrLength)
  .fill()
  .map(() => Math.round(Math.random() * 100));



console.log(generateArray(15));