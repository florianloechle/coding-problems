/** @format */

const { productOfNumbers } = require('./index');

describe('Product of numbers', () => {
  it('correctly computes to product of all numbers in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [120, 60, 40, 30, 24];
    expect(productOfNumbers(input)).toEqual(expectedOutput);
    expect(productOfNumbers([3, 2, 1])).toEqual([2, 3, 6]);
    expect(productOfNumbers([3, 0, 1])).toEqual([0, 3, 0]);
  });
});
