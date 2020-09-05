const isString = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'string'
}

module.exports = isString
