const { numberPairExists, numberPairExistsWithSet } = require('./index');

describe('Number Pairs', () => {
  it('handles empty lists', () => {
    expect(numberPairExists([],10)).toBe(false)
    expect(numberPairExistsWithSet([],10)).toBe(false)
  })
  it('returns true if a pair of numbers exists', () => {
    const list = [10,15,3,7];
    const k = 17;
    expect(numberPairExists(list,k)).toBe(true)
    expect(numberPairExistsWithSet(list,k)).toBe(true)
  })
  it('returns false if no matching pair exists', () => {
    const list = [10,15,3,7];
    const k = 16;
    expect(numberPairExists(list,k)).toBe(false)
    expect(numberPairExistsWithSet(list,k)).toBe(false)
  })
})