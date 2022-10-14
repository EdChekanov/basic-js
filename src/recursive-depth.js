const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let changed = false;
    let flatArr = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach(subItem => {
          flatArr.push(subItem);
        });
        changed = true;
      } else {
        flatArr.push(item);
      }
    })
    return !changed ? result : result + this.calculateDepth(flatArr);
  }
}

module.exports = {
  DepthCalculator
};
