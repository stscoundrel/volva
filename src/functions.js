const isFunction = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'function'
}

module.exports = isFunction
