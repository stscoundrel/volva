import isArray from './arrays';
import isBigInt from './bigints';
import isFloat from './floats';
import isInteger from './integers';
import isMap from './maps';
import isObject from './objects';
import isFunction from './functions';
import isSet from './sets';
import isSymbol from './symbols';

import {
  ARRAY, BIGINT, BOOLEAN, FLOAT, FUNCTION, INTEGER,
  MAP, NUMBER, NAN, NULL, OBJECT, SET, STRING, SYMBOL,
} from './constants/types';

/**
 * Provides exact type of variable.
 * 'typeof' doesnt tell apart type of number etc.
 */
export const getType = (input: unknown): string => {
  if (input === undefined) throw new Error('Missing argument');

  const type = typeof input;

  /**
   * Strings & bools require no extra checks.
   */
  if (type === STRING) {
    return STRING;
  }

  if (type === BOOLEAN) {
    return BOOLEAN;
  }

  /**
   * Numerals, arrays & objects can be
   * misinterpreted via typeof.
   *
   * Return more specific types.
   */

  if (type === NUMBER) {
    if (isInteger(input)) {
      return INTEGER;
    }

    if (isFloat(input)) {
      return FLOAT;
    }

    return NAN;
  }

  // Arrays.
  if (isArray(input)) {
    return ARRAY;
  }

  // Objects.
  if (isObject(input)) {
    return OBJECT;
  }

  // Null
  if (input === null) {
    return NULL;
  }

  // Function
  if (isFunction(input)) {
    return FUNCTION;
  }

  // Map
  if (isMap(input)) {
    return MAP;
  }

  // Set
  if (isSet(input)) {
    return SET;
  }

  // Bigint
  if (isBigInt(input)) {
    return BIGINT;
  }

  // Symbol
  if (isSymbol(input)) {
    return SYMBOL;
  }

  return type;
};

export default getType;
