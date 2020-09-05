const isNumber = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'number'
}

module.exports = isNumber
