'use strict';


const generateArray = (arrLength) => {
  let newArray = new Array(arrLength).fill();

  const resultArray = newArray.map(() => Math.round(Math.random() * 100));

  return resultArray;

}

console.log(generateArray(15));