const isNumber = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  if (Number.isNaN(input)) {
    return false
  }

  return typeof input === 'number'
}

module.exports = isNumber
