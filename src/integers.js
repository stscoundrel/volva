const { isLegacyEnvironment, legacyIsInteger } = require('./legacy/integers')

const isInteger = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  if (isLegacyEnvironment()) {
    return legacyIsInteger(input)
  }

  return Number.isInteger(input)
}

module.exports = isInteger
