const pad = '00000000000000000000000000000000';
const padBin = (binary) => pad.substring(0, pad.length - binary.length) + binary;
const convertToBinary = (dec) => (dec >>> 0).toString(2);
const negateBinary = (ch) => ch === '0' ? '1' : '0';
const parseBinToInt = (bin) => parseInt(bin, 2);
const teste = (number) => {
  if (number > 100) return;

  const binary = padBin(convertToBinary(number));
  const negatedBinary = binary.split("").map(negateBinary).join('');
  return parseInt(negatedBinary, 2);
};

module.exports = teste;
