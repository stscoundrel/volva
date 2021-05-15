const { isFunction } = require('../index');

describe('Functions (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isFunction()
    }).toThrow('Missing argument')
  })
})

describe('Functions should return true', () => {
  test('Returns true on anonymous function', () => {
    const input = () => {}
    const result = isFunction(input)

    expect(result).toBe(true)
  })

  test('Returns true on object method', () => {
    const input = Number.isInteger
    const result = isFunction(input)

    expect(result).toBe(true)
  })
})

describe('Functions should return false', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isFunction(input)

    expect(result).toBe(false)
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isFunction(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isFunction(input)

    expect(result).toBe(false)
  })

  test('Returns false arrays', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isFunction(input)

    expect(result).toBe(false)

    const input2 = []
    const result2 = isFunction(input2)

    expect(result2).toBe(false)
  })

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isFunction(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool values', () => {
    expect(isFunction(true)).toBe(false)
    expect(isFunction(false)).toBe(false)
  })

  test('Returns false on NaN', () => {
    expect(isFunction(NaN)).toBe(false)
  })
})
