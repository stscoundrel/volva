const { isInteger } = require('../index.js');

describe('Integers (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isInteger()
    }).toThrow('Missing argument')
  })
})

describe('Integers (should return true)', () => {
  test('Returns true on integer', () => {
    const input = 5
    const result = isInteger(input)

    expect(result).toBe(true)
  })
})

describe('Integers (should return false)', () => {
  test('Returns false on double', () => {
    const input = 30.7
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty string', () => {
    const input = ''
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isInteger(input)

    expect(result).toBe(false)
  })
})

describe('Integers (should return true) / Legacy browsers', () => {
  test('Returns true on integer / legacy browsers', () => {
    Number.isInteger = undefined
    const input = 5
    const result = isInteger(input)

    expect(result).toBe(true)
  })
})

describe('Integers (should return false) / Legacy browsers', () => {
  test('Returns false on double', () => {
    Number.isInteger = undefined
    const input = 30.7
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    Number.isInteger = undefined
    const input = null
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    Number.isInteger = undefined
    const input = []
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    Number.isInteger = undefined
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on object', () => {
    Number.isInteger = undefined
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty string', () => {
    Number.isInteger = undefined
    const input = ''
    const result = isInteger(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    Number.isInteger = undefined
    const input = 'Today is a good day to die'
    const result = isInteger(input)

    expect(result).toBe(false)
  })
})
