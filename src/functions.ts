// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (input: unknown): input is Function => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'function';
};

export default isFunction;
