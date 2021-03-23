const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(x) {
  let arr = [];
  if (x == null || x == undefined) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == 'string') {
    arr.push(x[i].trim()[0].toUpperCase());
    }
  }
  arr.sort();
  let result = arr.join('');
  return result;
};
