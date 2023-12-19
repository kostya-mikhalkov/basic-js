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
 options = options || {};
 str = String(str);

   const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

//  let res = '';
//  for(let i = 0; i < repeatTimes; i++) {
//   res += str;
//   while(additionRepeatTimes){
//     res += addition;
//     if(additionRepeatTimes > 1) {
//       res += additionSeparator;
//     }
//     additionRepeatTimes--;
//   }
//   if(i < repeatTimes - 1) {
//     res += separator;
//   }
//   additionRepeatTimes = options.additionRepeatTimes;
//  }
// return res;

  const repeatTwo = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  const repeatOne = str + repeatTwo;
  const result = (repeatOne + separator).repeat(repeatTimes - 1) + repeatOne;
  return result;
}

module.exports = {
  repeater
};
