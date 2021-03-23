const CustomError = require("../extensions/custom-error");

module.exports = function transform(x) {
  if (!Array.isArray(x)) {
    throw new Error;
  };
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '--double-next') {
      result.push(x[i + 1]);
    } else if (x[i] === '--double-prev') {
      if (result[result.length - 1] == x[i - 1]) {
      result.push(x[i - 1]); }
      if (Number.isNaN(x[i - 1])) {
      result.push(NaN);  
    }
    }  else if (x[i] === '--discard-next') {
      i ++;
    } else if (x[i] === '--discard-prev') {
      if (result[result.length - 1] == x[i - 1] && x[i - 2] !== '--discard-next') {
      result.pop();
      }
      if (Number.isNaN(x[i - 1])) {
      result.pop(NaN);  
    }
    } else {
      result.push(x[i]);
    }
  }
  if (result[0] === undefined) {
    result = result.slice(1);
  };
  if (result[result.length - 1] === undefined) {
    result = result.slice(0, -1);
  };
  return result;
};
