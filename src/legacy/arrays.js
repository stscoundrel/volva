/**
 * Check if browser supports Array.isArray
 */
const isLegacyEnvironment = () => {
  if (typeof Array.isArray === 'undefined') {
    return true
  }

  return false
}

/**
 * For browsers & Node versions
 * that do not support Array.isArray
 */
const legacyIsArray = (input) => Object.prototype.toString.call(input) === '[object Array]'

module.exports = {
  isLegacyEnvironment,
  legacyIsArray,
}
