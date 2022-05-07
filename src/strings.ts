export const isString = (input: unknown): input is string => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'string';
};

export default isString;
