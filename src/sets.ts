export const isSet = (input: unknown): input is Set<unknown> => {
  if (input === undefined) throw new Error('Missing argument');

  return input instanceof Set;
};

export default isSet;
