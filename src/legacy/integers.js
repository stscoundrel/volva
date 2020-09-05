/**
 * Check if browser supports Array.isArray
 */
const isLegacyEnvironment = () => {
  if (typeof Number.isInteger === 'undefined') {
    return true
  }

  return false
}

/**
 * For browsers & Node versions
 * that do not support Array.isArray
 */
const legacyIsInteger = (input) => typeof input === 'number' && Number.isFinite(input) && Math.floor(input) === input

module.exports = {
  isLegacyEnvironment,
  legacyIsInteger,
}
