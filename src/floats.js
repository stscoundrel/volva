const isNumber = require('./numbers.js')

const isFloat = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  if (!isNumber(input)) {
    return false
  }

  return input % 1 !== 0
}

module.exports = isFloat
