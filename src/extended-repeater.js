const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionRepeatTimes = options.additionRepeatTimes 
    ? options.additionRepeatTimes 
    : options.addition 
      ? 1
      : 0;
  let result = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    str += options.addition + additionSeparator; 
  }
  if (options.additionRepeatTimes > 0) str = str.slice(0, -additionSeparator.length);
  for (let i = 0; i < repeatTimes; i++) {
    result += str + separator; 
  }
  return result.slice(0, -separator.length);
}

module.exports = {
  repeater
};
