const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = Array.from(s1);
  s2 = Array.from(s2);

  const obj1 = {};
  const obj2 = {};

  for (let key of s1) {
    if (!obj1[key]) {
      obj1[key] = 1;
    } else {
      obj1[key]++;
    }
  }

  for (let key of s2) {
    if (!obj2[key]) {
      obj2[key] = 1;
    } else {
      obj2[key]++;
    }
  }

  s1 = new Set(s1);
  const arr = Array.from(s1);
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if(s2.includes(arr[i])){
      count += Math.min(obj1[arr[i]], obj2[s2[i]]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
