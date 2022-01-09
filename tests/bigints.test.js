const { isBigInt } = require('../index');

describe('BigInts (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isBigInt()
    }).toThrow('Missing argument')
  })
})

describe('BigInts (should return true)', () => {
  test('Returns true on BigInts', () => {
    const input1 = BigInt(9007199254740991)
    const input2 = BigInt('9007199254740991')
    const input3 = BigInt('0x1fffffffffffff')
    const input4 = BigInt('0o377777777777777777')
    const input5 = BigInt('0b11111111111111111111111111111111111111111111111111111')

    const result1 = isBigInt(input1)
    const result2 = isBigInt(input2)
    const result3 = isBigInt(input3)
    const result4 = isBigInt(input4)
    const result5 = isBigInt(input5)

    expect(result1).toBeTruthy()
    expect(result2).toBeTruthy()
    expect(result3).toBeTruthy()
    expect(result4).toBeTruthy()
    expect(result5).toBeTruthy()
  })

  test('Returns true on negative bigints', () => {
    const input1 = BigInt(-9007199254740991)
    const input2 = BigInt('-9007199254740991')

    const result1 = isBigInt(input1)
    const result2 = isBigInt(input2)

    expect(result1).toBeTruthy()
    expect(result2).toBeTruthy()
  })
})

describe('BigInts (should return false)', () => {
  test('Returns false on standard numbers', () => {
    const input1 = 1917
    const input2 = -1917
    const input3 = 9007199254740991

    const result1 = isBigInt(input1)
    const result2 = isBigInt(input2)
    const result3 = isBigInt(input3)

    expect(result1).toBeFalsy()
    expect(result2).toBeFalsy()
    expect(result3).toBeFalsy()
  })

  test('Returns false on string form integer', () => {
    const input = '1917'
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on null', () => {
    const input = null
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on empty string', () => {
    const input = ''
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value true', () => {
    const input = true
    const result = isBigInt(input)

    expect(result).toBe(false)
  })

  test('Returns false on bool value false', () => {
    const input = false
    const result = isBigInt(input)

    expect(result).toBe(false)
  })
})
