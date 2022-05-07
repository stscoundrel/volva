export const isNumber = (input: unknown): input is number => {
  if (input === undefined) throw new Error('Missing argument');

  if (Number.isNaN(input)) {
    return false;
  }

  return typeof input === 'number';
};

export default isNumber;
