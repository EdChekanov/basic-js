const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  for (let i = matrix.length - 2; i >= 0; i--) {
    matrix[i] = matrix[i].map((item, idx) => {
      if (item) {
        return item + matrix[i + 1][idx];
      } else {
        return item;
      }
    });
  }
  let result = matrix[0].reduce((a, b) => a + b, 0);

  return result;
}

module.exports = {
  getMatrixElementsSum,
};
