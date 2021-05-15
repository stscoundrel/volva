const { isSet } = require('../index.js');

describe('Sets (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isSet()
    }).toThrow('Missing argument')
  })
})

describe('Sets should return true', () => {
  test('Returns true on map', () => {
    const input = new Set()
    const result = isSet(input)

    expect(result).toBe(true)
  })
})

describe('Sets should return false', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isSet(input)

    expect(result).toBe(false)
  })

  test('Returns false on bools', () => {
    expect(isSet(false)).toBe(false)
    expect(isSet(true)).toBe(false)
  })

  test('Returns false on map', () => {
    const input = new Map()
    const result = isSet(input)

    expect(result).toBe(false)
  })
})
