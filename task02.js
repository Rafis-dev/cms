'use strict';


const getString = (str) => {
  str = str.trim();
  const restOfStr = str.slice(1).toLowerCase();

  return str[0].toUpperCase() + restOfStr;
}

console.log(getString('привет Мир'));


