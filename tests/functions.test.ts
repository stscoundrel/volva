import { isFunction } from '../src';

describe('Functions (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isFunction();
    }).toThrow('Missing argument');
  });
});

describe('Functions should return true', () => {
  test('Returns true on anonymous function', () => {
    const input = () => 'test output';
    const result = isFunction(input);

    expect(result).toBeTruthy();
  });

  test('Returns true on object method', () => {
    const input = Number.isInteger;
    const result = isFunction(input);

    expect(result).toBeTruthy();
  });
});

describe('Functions should return false', () => {
  test('Returns false on integer', () => {
    const input = 5;
    const result = isFunction(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on float', () => {
    const input = 30.7;
    const result = isFunction(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    const input = null;
    const result = isFunction(input);

    expect(result).toBeFalsy();
  });

  test('Returns false arrays', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isFunction(input);

    expect(result).toBeFalsy();

    const input2 = [];
    const result2 = isFunction(input2);

    expect(result2).toBeFalsy();
  });

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' };
    const result = isFunction(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool values', () => {
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(false)).toBeFalsy();
  });

  test('Returns false on NaN', () => {
    expect(isFunction(NaN)).toBeFalsy();
  });
});
