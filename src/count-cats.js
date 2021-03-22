const CustomError = require("../extensions/custom-error");

module.exports = function countCats(x) {
  let count = 0;
  let i = x.length - 1;
  while (i >= 0) {
    let n = x[i].length - 1;
    while (n >= 0) {
      if (x[i][n] == '^^') {
        count += 1;
      }
      n--;
    }
    i--;
  }
  return count;
};
