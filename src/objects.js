const isArray = require('./arrays.js')
const isMap = require('./maps.js')
const isSet = require('./sets.js')

const isObject = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'object' && input !== null && !isArray(input) && !isMap(input) && !isSet(input)
}

module.exports = isObject
