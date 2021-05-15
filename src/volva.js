const isArray = require('./arrays')
const isBoolean = require('./booleans')
const isFloat = require('./floats')
const isFunction = require('./functions')
const isInteger = require('./integers')
const isMap = require('./maps')
const isNumber = require('./numbers')
const isObject = require('./objects')
const isSet = require('./sets')
const isString = require('./strings')

const getType = require('./types')

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
