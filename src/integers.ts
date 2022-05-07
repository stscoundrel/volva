import { isLegacyEnvironment, legacyIsInteger } from './legacy/integers';

export const isInteger = (input: unknown): input is number => {
  if (input === undefined) throw new Error('Missing argument');

  if (isLegacyEnvironment()) {
    return legacyIsInteger(input);
  }

  return Number.isInteger(input);
};

export default isInteger;
