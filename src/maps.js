const isMap = (input) => {
  if (input === undefined) throw new Error('Missing argument')

  return input instanceof Map
}

module.exports = isMap
