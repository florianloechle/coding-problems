/**
 * @format
 * @param {Array} numbers - Example [1,2,3,4,5]
 * @returns {Array} - [120,60,40,30,24]
 */

function productOfNumbers(numbers) {
  let counter = 0;
  return Array.from({ length: numbers.length }, () => {
    const product = numbers.reduce((pro, number, index) => {
      if (index === counter) {
        return pro;
      }
      return number * pro;
    });
    counter++;
    return product;
  });
}

module.exports = {
  productOfNumbers,
};
