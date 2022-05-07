import { getType } from '../src';

import {
  ARRAY, BOOLEAN, FLOAT, INTEGER, NULL, OBJECT, STRING, FUNCTION,
} from '../src/constants/types';

describe('Type checker (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      getType();
    }).toThrow('Missing argument');
  });
});

describe('Types: identifies types', () => {
  test('Identifies integer', () => {
    const input = 666;
    const result = getType(input);

    expect(result).toBe(INTEGER);
  });

  test('Identifies floats', () => {
    const input = 6.66;
    const result = getType(input);

    expect(result).toBe(FLOAT);
  });

  test('Identifies objects', () => {
    const input = { 'Golden brown': 'bright as the sun' };
    const result = getType(input);

    expect(result).toBe(OBJECT);
  });

  test('Identifies arrays', () => {
    const input = ['Viking Language 1: Learn Old Norse', 'Viking Language 2: The Old Norse Reader'];
    const result = getType(input);

    expect(result).toBe(ARRAY);
  });

  test('Identifies strings', () => {
    const input = 'Ja nähtyänsä kaiken, hän näki enemmän.';
    const result = getType(input);

    expect(result).toBe(STRING);
  });

  test('Identifies booleans', () => {
    const input = true;
    const result = getType(input);

    expect(result).toBe(BOOLEAN);
  });

  test('Identifies null', () => {
    const input = null;
    const result = getType(input);

    expect(result).toBe(NULL);
  });

  test('Identifies function', () => {
    const input = () => 'test output';
    const result = getType(input);

    expect(result).toBe(FUNCTION);
  });

  test('Identifies NaN', () => {
    const input = NaN;
    const result = getType(input);

    expect(result).toBe('NaN');
  });

  test('Identifies Map', () => {
    const input = new Map();
    const result = getType(input);

    expect(result).toBe('Map');
  });

  test('Identifies Set', () => {
    const input = new Set();
    const result = getType(input);

    expect(result).toBe('Set');
  });

  test('Identifies BigInt', () => {
    const input = BigInt(9007199254740991);
    const result = getType(input);

    expect(result).toBe('bigint');
  });

  test('Identifies Symbol', () => {
    const input = Symbol('and-if-the-day-would-only-come');
    const result = getType(input);

    expect(result).toBe('symbol');
  });
});
