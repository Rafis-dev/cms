'use strict';

const usdRub = 73;
const usdEuro = 1 / 1.2;

const getRubles = euro => euro / usdEuro * usdRub;

console.log(getRubles(100));
