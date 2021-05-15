const Sort = require('../src/Sort').default

describe('selection sort', () => {
  it('best case', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Sort.selection(array)
    expect(array).toEqual(array)
  })

  it('worst case', () => {
    const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    Sort.selection(array)
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should sort', () => {
    const array = [5, 7, 2, 1, 4, 9, 7, 5, 3, 2]
    Sort.selection(array)
    expect(array).toEqual([1, 2, 2, 3, 4, 5, 5, 7, 7, 9])
  })
})
