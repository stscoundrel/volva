export const isMap = (input: unknown): input is Map<unknown, unknown> => {
  if (input === undefined) throw new Error('Missing argument');

  return input instanceof Map;
};

export default isMap;
