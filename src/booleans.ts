export const isBoolean = (input: unknown): input is boolean => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'boolean';
};

export default isBoolean;
