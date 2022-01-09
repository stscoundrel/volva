const isArray = require('./arrays')
const isBigInt = require('./bigints')
const isFloat = require('./floats')
const isInteger = require('./integers')
const isMap = require('./maps')
const isObject = require('./objects')
const isFunction = require('./functions')
const isSet = require('./sets')
const isSymbol = require('./symbols')

const {
  ARRAY, BIGINT, BOOLEAN, FLOAT, FUNCTION, INTEGER,
  MAP, NUMBER, NAN, NULL, OBJECT, SET, STRING, SYMBOL,
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

    return NAN
  }

  // Arrays.
  if (isArray(input)) {
    return ARRAY
  }

  // Objects.
  if (isObject(input)) {
    return OBJECT
  }

  // Null
  if (input === null) {
    return NULL
  }

  // Function
  if (isFunction(input)) {
    return FUNCTION
  }

  // Map
  if (isMap(input)) {
    return MAP
  }

  // Set
  if (isSet(input)) {
    return SET
  }

  // Bigint
  if (isBigInt(input)) {
    return BIGINT
  }

  // Symbol
  if (isSymbol(input)) {
    return SYMBOL
  }

  return type
}

module.exports = getType
