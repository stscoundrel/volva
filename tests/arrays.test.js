const { isArray } = require('../index')

describe('Arrays (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isArray()
    }).toThrow('Missing argument')
  })
})

describe('Arrays (modern browsers)', () => {
  describe('Arrays (should return true)', () => {
    test('Returns true on empty array', () => {
      const input = []
      const result = isArray(input)

      expect(result).toBe(true)
    })

    test('Returns true on populated array', () => {
      const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
      const result = isArray(input)

      expect(result).toBe(true)
    })
  })

  describe('Arrays (should return false)', () => {
    test('Returns false on integer', () => {
      const input = 5
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on float', () => {
      const input = 30.7
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on string', () => {
      const input = 'Today is a good day to die'
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on object', () => {
      const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on null', () => {
      const input = null
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on bool value true', () => {
      const input = true
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on bool value false', () => {
      const input = false
      const result = isArray(input)

      expect(result).toBe(false)
    })
  })
})

describe('Arrays (legacy browsers)', () => {
  describe('Should return true', () => {
    test('Returns true on empty array', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = []
      const result = isArray(input)

      expect(result).toBe(true)
    })

    test('Returns true on populated array', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = ['Revenger', 'Shadow Captain', 'Bone Silence']
      const result = isArray(input)

      expect(result).toBe(true)
    })
  })

  describe('Should return false', () => {
    test('Returns false on integer', () => {
      // Simulate missing features
      Array.isArray = undefined

      const input = 5
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on float', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = 30.7
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on string', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = 'Today is a good day to die'
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on object', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = { title: 'Bone Silence', author: 'Alastair Reynolds' }
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on null', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = null
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on bool value true', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = true
      const result = isArray(input)

      expect(result).toBe(false)
    })

    test('Returns false on bool value false', () => {
      // Simulate missing features
      Array.isArray = undefined
      const input = false
      const result = isArray(input)

      expect(result).toBe(false)
    })
  })
})
