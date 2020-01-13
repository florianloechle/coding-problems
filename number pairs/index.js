/**
 * @format
 * @param {Array} list
 * @param {Number} k
 */

function numberPairExists(list, k) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  const length = list.length;
  for (let i = 0; i <= length; i++) {
    const value = list[i];
    for (let j = 0; j <= length; j++) {
      if (j !== i && value + list[j] === k) {
        return true;
      }
    }
  }
  return false;
}

/**
 *
 * @param {Array} list
 * @param {Number} k
 */
function numberPairExistsWithSet(list, k) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  const numbers = new Set(list);
  for (let i = 0; i <= list.length; i++) {
    const rest = k - list[i];
    if (numbers.has(rest)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  numberPairExists,
  numberPairExistsWithSet,
};
