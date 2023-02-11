const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const workArr = domains.map((item) => item.split('.'));
  const result = {};
  workArr.forEach((item) => {
    for (let i = item.length - 1; i >= 0; i--) {
      let key = '.' + item[i];
      result[key] = result[key] ? ++result[key] : 1;
      if (item[i - 1]) item[i - 1] = item[i] + '.' + item[i - 1];
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
