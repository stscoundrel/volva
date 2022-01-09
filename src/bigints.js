const isBigInt = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return typeof input === 'bigint'
}

module.exports = isBigInt
