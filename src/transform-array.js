const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let workArr = [];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 1]) {
          workArr.push(undefined);
          workArr.push(undefined);
          i++;
        }
        break;
      case '--discard-prev':
        if (arr[i - 1] && workArr[i - 1]) {
          workArr.pop();
          workArr.push(undefined);
          workArr.push(undefined);
        }
        break;
      case '--double-next':
        if (arr[i + 1]) {
          workArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] && workArr[i - 1]) {
          workArr.push(arr[i - 1]);
        }
        break;
      default:
        workArr.push(arr[i]);
    }
  }
  workArr.forEach(item => {
    if (item) resultArr.push(item);
  });
  return resultArr;
}

module.exports = {
  transform
};
