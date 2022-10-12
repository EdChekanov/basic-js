const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  const sortedArr = members.map((item) => {
    if(typeof item === 'string') return item.trim().toUpperCase();
  }).sort();
  const result = sortedArr.reduce((a,b) => {
    if (typeof b === 'string') return a + b[0];
    return a + '';
  }, '');
  return Boolean(result) 
    ? result 
    : false;
}

module.exports = {
  createDreamTeam
};
