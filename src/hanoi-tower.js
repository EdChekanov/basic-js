const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(x, y) {
  const turns = (2 ** x) - 1;
  const seconds = Math.floor((3600 / y) * turns);
  let result = {turns, seconds};
  return result;
};
