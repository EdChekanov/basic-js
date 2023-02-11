const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...(n + '')];
  let result = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const copy = [...arr];
    copy.splice(i, 1);
    const n = +copy.join('');
    result = n > result ? n : result;
  }
  return result;
}

module.exports = {
  deleteDigit,
};
