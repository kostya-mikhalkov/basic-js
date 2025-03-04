const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  if(n >= 0 && n < 10) {
    return n;
  }
  let arr = String(n).split('');
  let res = arr.reduce((acc, item) => {
    acc += +item;
    return acc;
  },0);
  return getSumOfDigits(res);
}

module.exports = {
  getSumOfDigits
};
