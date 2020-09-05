const isBoolean = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'boolean'
}

module.exports = isBoolean
