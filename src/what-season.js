const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(x) {
  if (x == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(x) !== "[object Date]") {
    throw new Error;
  }
  month = x.getMonth() + 1;
  // return x.toISOString();
  if (month == null || isNaN(month)) {
    throw new Error;
  }
  if (month < 3 || month == 12) {
    return 'winter';
  } else if (month > 2 && month < 6) {
    return 'spring';
  } else if (month > 5 && month < 9) {
    return 'summer';
  } else {
    return 'fall';
  }
  };
