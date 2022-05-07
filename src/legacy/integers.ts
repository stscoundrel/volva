/**
 * Check if browser supports Array.isArray
 */
export const isLegacyEnvironment = () => {
  if (typeof Number.isInteger === 'undefined') {
    return true;
  }

  return false;
};

/**
 * For browsers & Node versions
 * that do not support Array.isArray
 */
export const legacyIsInteger = (input: unknown): input is number => typeof input === 'number' && Number.isFinite(input) && Math.floor(input) === input;

export default {
  isLegacyEnvironment,
  legacyIsInteger,
};
