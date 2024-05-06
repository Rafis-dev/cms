'use strict';

const euroUsd = 1.2;
const usdRub = 73;

const getRubles = (euro) => {
  return euro * euroUsd * usdRub;
}

console.log(getRubles(100));
