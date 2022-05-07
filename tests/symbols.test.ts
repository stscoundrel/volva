import { isSymbol } from '../src';

describe('Symbols (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isSymbol();
    }).toThrow('Missing argument');
  });
});

describe('Symbols should return true', () => {
  test('Returns true on symbols', () => {
    const input1 = Symbol('');
    const input2 = Symbol('foo');
    const result1 = isSymbol(input1);
    const result2 = isSymbol(input2);

    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});

describe('Symbols should return false', () => {
  test('Returns false on object-wrapped symbol', () => {
    const input = Object(Symbol('bar'));
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on integer', () => {
    const input = 5;
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on float', () => {
    const input = 30.7;
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string', () => {
    const input = 'Today is a good day to die';
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    const input = null;
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty array', () => {
    const input = [];
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bools', () => {
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol(true)).toBeFalsy();
  });

  test('Returns false on map', () => {
    const input = new Map();
    const result = isSymbol(input);

    expect(result).toBeFalsy();
  });
});
