const { isObject } = require('../index.js');

describe('Objects (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isObject()
    }).toThrow('Missing argument')
  })
})

describe('Objects (arguments)', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isObject(input)

    expect(result).toBe(false)
  })

  test('Returns false on double', () => {
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

  test('Returns true on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isObject(input)

    expect(result).toBe(true)
  })
})
