const { isMap } = require('../index');

describe('Maps (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isMap()
    }).toThrow('Missing argument')
  })
})

describe('Maps should return true', () => {
  test('Returns true on map', () => {
    const input = new Map()
    const result = isMap(input)

    expect(result).toBeTruthy()
  })
})

describe('Maps should return false', () => {
  test('Returns false on integer', () => {
    const input = 5
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on float', () => {
    const input = 30.7
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on string', () => {
    const input = 'Today is a good day to die'
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on null', () => {
    const input = null
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on empty array', () => {
    const input = []
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
    const result = isMap(input)

    expect(result).toBeFalsy()
  })

  test('Returns false on bools', () => {
    expect(isMap(false)).toBeFalsy()
    expect(isMap(true)).toBeFalsy()
  })
})
