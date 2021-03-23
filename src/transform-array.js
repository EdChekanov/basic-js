const CustomError = require("../extensions/custom-error");

module.exports = function transform(x) {
  if (!Array.isArray(x)) {
    throw new Error;
  };
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '--double-next') {
      if (x[i + 1] === undefined) {
        
      } else { 
      result.push(x[i + 1]);
      }
    } else if (x[i] === '--double-prev') {
      if (x[i - 1] === undefined) {
        
      } else if (result[result.length - 1] == x[i - 1]) {
      result.push(x[i - 1]);
      }
    } else if (x[i] === '--discard-next') {
      if (x[i + 1] === undefined) {
        
      } else { 
      i += 2;
      }
    } else if (x[i] === '--discard-prev') {
      if (x[i - 1] === undefined) {
        
      } else if (result[result.length - 1] == x[i - 1]) {
      result.pop();
      }
    } else {
      result.push(x[i]);
    }
  }
  return result;
};