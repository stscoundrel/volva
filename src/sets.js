const isSet = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return input instanceof Set
}

module.exports = isSet
