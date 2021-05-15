const isArray = require('./arrays')
const isMap = require('./maps')
const isSet = require('./sets')

const isObject = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'object' && input !== null && !isArray(input) && !isMap(input) && !isSet(input)
}

module.exports = isObject
