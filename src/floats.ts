import isNumber from './numbers';

export const isFloat = (input: unknown): input is number => {
  if (input === undefined) throw new Error('Missing argument');

  if (!isNumber(input)) {
    return false;
  }

  return input % 1 !== 0;
};

export default isFloat;
