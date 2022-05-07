import { isLegacyEnvironment, legacyIsArray } from './legacy/arrays';

export const isArray = (input: unknown): input is Array<unknown> => {
  if (input === undefined) throw new Error('Missing argument');

  if (isLegacyEnvironment()) {
    return legacyIsArray(input);
  }

  return Array.isArray(input);
};

export default isArray;
