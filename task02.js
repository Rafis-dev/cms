'use strict';


const getString = (str) => {
  const firstChar = str[0];
  const restOfStr = str.slice(1);

  return firstChar.toUpperCase() + restOfStr.toLowerCase();
}

console.log(getString('привет Мир'));


