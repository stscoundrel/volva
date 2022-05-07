import isArray from './arrays';
import isMap from './maps';
import isSet from './sets';

export const isObject = (input: unknown): input is Record<string, unknown> => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'object' && input !== null && !isArray(input) && !isMap(input) && !isSet(input);
};

export default isObject;
