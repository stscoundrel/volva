const isArray = require('./arrays.js')
const isFloat = require('./floats.js')
const isInteger = require('./integers.js')
const isObject = require('./objects.js')

const {
  ARRAY, BOOLEAN, FLOAT, INTEGER, NUMBER, OBJECT, STRING,
} = require('./constants/types')

/**
 * Provides exact type of variable.
 * 'typeof' doesnt tell apart type of number etc.
 */
const getType = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  const type = typeof input

  /**
   * Strings & bools require no extra checks.
   */
  if (type === STRING) {
    return STRING
  }

  if (type === BOOLEAN) {
    return BOOLEAN
  }

  /**
   * Numerals, arrays & objects can be
   * misinterpreted via typeof.
   *
   * Return more specific types.
   */

  if (type === NUMBER) {
    if (isInteger(input)) {
      return INTEGER
    }

    if (isFloat(input)) {
      return FLOAT
    }

    return NUMBER
  }

  // Objects.
  if (isObject(input)) {
    return OBJECT
  }

  // Arrays.
  if (isArray(input)) {
    return ARRAY
  }
}

module.exports = getType
