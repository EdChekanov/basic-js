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
  const a1 = [...s1];
  const a2 = [...s2];
  let result = 0;
  a1.forEach(item => {
    let idx = a2.indexOf(item);
    if (idx >= 0) {
      result++;
      a2[idx] = null;
    };
  });
  return result;
}

module.exports = {
  getCommonCharacterCount
};
