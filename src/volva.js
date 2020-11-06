const isArray = require('./arrays.js')
const isBoolean = require('./booleans.js')
const isFloat = require('./floats.js')
const isFunction = require('./functions.js')
const isInteger = require('./integers.js')
const isNumber = require('./numbers.js')
const isObject = require('./objects.js')
const isString = require('./strings.js')

const getType = require('./types.js')

module.exports = {
  isArray,
  isBoolean,
  isFloat,
  isFunction,
  isInteger,
  isNumber,
  isObject,
  isString,
  getType,
}
