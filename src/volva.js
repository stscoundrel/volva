const isArray = require('./arrays')
const isBigInt = require('./bigints')
const isBoolean = require('./booleans')
const isFloat = require('./floats')
const isFunction = require('./functions')
const isInteger = require('./integers')
const isMap = require('./maps')
const isNumber = require('./numbers')
const isObject = require('./objects')
const isSet = require('./sets')
const isString = require('./strings')
const isSymbol = require('./symbols')

const getType = require('./types')

module.exports = {
  isArray,
  isBigInt,
  isBoolean,
  isFloat,
  isFunction,
  isInteger,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  isSymbol,
  getType,
}
