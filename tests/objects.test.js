const { isObject } = require('../index.js');

describe('Objects (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isObject()
    }).toThrow('Missing argument')
  })
})

describe('Objects should return true', () => {
  test('Returns true on object with keys & values', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isObject(input)

    expect(result).toBe(true)
  })

  test('Returns true on empty object', () => {
    const input = {}
    const result = isObject(input)

    expect(result).toBe(true)
  })
})

describe('Objects should return false', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value true', () => {
    const input = true
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value false', () => {
    const input = false
    const result = isObject(input)

    expect(result).toBe(false)
  })
})
