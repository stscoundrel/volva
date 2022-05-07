/**
 * Check if browser supports Array.isArray
 */
export const isLegacyEnvironment = () => {
  if (typeof Array.isArray === 'undefined') {
    return true;
  }

  return false;
};

/**
 * For browsers & Node versions
 * that do not support Array.isArray
 */
export const legacyIsArray = (input: unknown): input is Array<unknown> => Object.prototype.toString.call(input) === '[object Array]';

export default {
  isLegacyEnvironment,
  legacyIsArray,
};
