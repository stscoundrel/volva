const isArray = require('./arrays.js')

const isObject = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'object' && input !== null && !isArray(input)
}

module.exports = isObject
