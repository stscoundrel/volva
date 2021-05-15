const { isString } = require('../index');

describe('Strings (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isString()
    }).toThrow('Missing argument')
  })
})

describe('Strings should return true', () => {
  test('Returns true on empty string', () => {
    const input = ''
    const result = isString(input)

    expect(result).toBe(true)
  })

  test('Returns true on string', () => {
    const input = 'Today is a good day to die'
    const result = isString(input)

    expect(result).toBe(true)
  })
})

describe('Strings should return false', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value true', () => {
    const input = true
    const result = isString(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value false', () => {
    const input = false
    const result = isString(input)

    expect(result).toBe(false)
  })
})
