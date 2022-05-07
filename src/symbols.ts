export const isSymbol = (input: unknown): input is symbol => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'symbol';
};

export default isSymbol;
