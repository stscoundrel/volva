const isArray = require('./arrays.js')
const isBoolean = require('./booleans.js')
const isFloat = require('./floats.js')
const isFunction = require('./functions.js')
const isInteger = require('./integers.js')
const isMap = require('./maps.js')
const isNumber = require('./numbers.js')
const isObject = require('./objects.js')
const isSet = require('./sets.js')
const isString = require('./strings.js')

const getType = require('./types.js')

module.exports = {
  isArray,
  isBoolean,
  isFloat,
  isFunction,
  isInteger,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  getType,
}
