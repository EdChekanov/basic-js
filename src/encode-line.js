const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [...str];
  arr = arr.map((item, idx) => {
    let count = 1;
    while (item === arr[idx + 1]) {
      count++;
      arr.splice(idx, 1);
    }
    return [count, item];
  });
  arr = arr.map((item) => {
    if (item[0] > 1) return item[0] + item[1];
    return item[1];
  });
  return arr.join('');
}

module.exports = {
  encodeLine,
};
