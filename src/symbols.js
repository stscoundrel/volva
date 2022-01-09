const isSymbol = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'symbol'
}

module.exports = isSymbol
