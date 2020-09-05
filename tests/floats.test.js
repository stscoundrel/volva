const { isFloat } = require('../index.js');

describe('Floats (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isFloat()
    }).toThrow('Missing argument')
  })
})

describe('Floats (should return true)', () => {
  test('Returns true on float', () => {
    const input = 30.789
    const result = isFloat(input)

    const input2 = 0.4643745584584458
    const result2 = isFloat(input2)

    expect(result).toBe(true)
    expect(result2).toBe(true)
  })

  test('Returns true on negative float', () => {
    const input = -6.12
    const result = isFloat(input)

    expect(result).toBe(true)
  })
})

describe('Floats (should return false)', () => {
  test('Returns false on zero', () => {
    const input = 0
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on integer', () => {
    const input = 89
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on string form number', () => {
    const input = '1917'
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty string', () => {
    const input = ''
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value true', () => {
    const input = true
    const result = isFloat(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value false', () => {
    const input = false
    const result = isFloat(input)

    expect(result).toBe(false)
  })
})
