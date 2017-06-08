const assert = require('chai').assert;
const expect = require('chai').expect;
const flipBinary = require('../src/flipBinaryInteger');
const flipNative = require('../src/nativeFlipper');

describe('Convert numbers successfully', () => {
  it('should convert 2147483647 to 2147483648', () => {
    expect(flipBinary(2147483647)).to.be.equal(2147483648);
  });
  it('should convert 1 to 4294967294', () => {
    expect(flipBinary(1)).to.be.equal(4294967294);
  });
  it('should convert 0 to 4294967295', () => {
    expect(flipBinary(0)).to.be.equal(4294967295);
  });

  it ('teste', () => {
    console.log(flipNative(3));
  })
});
