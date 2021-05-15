const { isLegacyEnvironment, legacyIsArray } = require('./legacy/arrays')

const isArray = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  if (isLegacyEnvironment()) {
    return legacyIsArray(input)
  }

  return Array.isArray(input)
}

module.exports = isArray
