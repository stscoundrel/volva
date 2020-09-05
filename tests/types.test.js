const { getType } = require('../index.js');

const {
  ARRAY, BOOLEAN, FLOAT, INTEGER, OBJECT, STRING,
} = require('../src/constants/types')

describe('Type checker (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      getType()
    }).toThrow('Missing argument')
  })
})

describe('Types: identifies types', () => {
  test('Identifies integer', () => {
    const input = 666
    const result = getType(input)

    expect(result).toBe(INTEGER)
  })

  test('Identifies floats', () => {
    const input = 6.66
    const result = getType(input)

    expect(result).toBe(FLOAT)
  })

  test('Identifies objects', () => {
    const input = { 'Golden brown': 'bright as the sun' }
    const result = getType(input)

    expect(result).toBe(OBJECT)
  })

  test('Identifies arrays', () => {
    const input = ['Viking Language 1: Learn Old Norse', 'Viking Language 2: The Old Norse Reader']
    const result = getType(input)

    expect(result).toBe(ARRAY)
  })

  test('Identifies strings', () => {
    const input = 'Ja nähtyänsä kaiken, hän näki enemmän.'
    const result = getType(input)

    expect(result).toBe(STRING)
  })

  test('Identifies booleans', () => {
    const input = true
    const result = getType(input)

    expect(result).toBe(BOOLEAN)
  })
})
