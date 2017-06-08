
const R = require('ramda');
const pad = '00000000000000000000000000000000';
const padBin = (binary) => pad.substring(0, pad.length - binary.length) + binary;
const convertToBinary = (dec) => (dec >>> 0).toString(2);
const negateBinary = (ch) => ch === '0' ? '1' : '0';
const flippedParseInt = (radix, binary) => parseInt(binary, radix);
const curriedParseInt = R.curry(flippedParseInt);

const dec2BinNegated = (number) => {
  // if (number > 100) return;
  const negatedBin =  R.pipe(
    convertToBinary,
    padBin,
    R.map(negateBinary),
    R.join(''),
    curriedParseInt(2)
  )(number);
  return negatedBin;
};

module.exports = dec2BinNegated;
