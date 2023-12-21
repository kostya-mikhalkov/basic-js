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
  let obj = {};
  for(let i = 0; i < domains.length; i++) {
    let subDomain = domains[i].split('.').reverse();
    let currentDns = '';

    for(let j = 0; j < subDomain.length; j++) {
      currentDns += `.${subDomain[j]}`;
      if(!obj[currentDns]) {
        obj[currentDns] = 1;
      }else{
        obj[currentDns]++;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
