const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(SAMPLE_ACTIVITY) {
  console.log(typeof(SAMPLE_ACTIVITY));
    if (SAMPLE_ACTIVITY > 15 || SAMPLE_ACTIVITY <= 0 || typeof(SAMPLE_ACTIVITY) !== 'string'  || isNaN(+SAMPLE_ACTIVITY)) {
      return false;
    };
    SAMPLE_ACTIVITY = parseFloat(SAMPLE_ACTIVITY);
    let time = Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)/(0,693/HALF_LIFE_PERIOD);
    return Math.ceil(time * 1000);
  };
