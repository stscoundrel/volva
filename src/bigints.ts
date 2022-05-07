export const isBigInt = (input: unknown): input is BigInt => {
  if (input === undefined) throw new Error('Missing argument');

  return typeof input === 'bigint';
};

export default isBigInt;
