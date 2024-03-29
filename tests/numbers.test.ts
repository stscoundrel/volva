import { isNumber } from '../src';

describe('Numbers (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isNumber();
    }).toThrow('Missing argument');
  });
});

describe('Numbers (should return true)', () => {
  test('Returns true on integer', () => {
    const input = 5;
    const result = isNumber(input);

    expect(result).toBeTruthy();
  });

  test('Returns true on float', () => {
    const input = 30.7;
    const result = isNumber(input);

    expect(result).toBeTruthy();
  });
});

describe('Numbers (should return false)', () => {
  test('Returns false on string form number', () => {
    const input = '1917';
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    const input = null;
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty array', () => {
    const input = [];
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' };
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty string', () => {
    const input = '';
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string', () => {
    const input = 'Today is a good day to die';
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value true', () => {
    const input = true;
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value false', () => {
    const input = false;
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on NaN', () => {
    const input = NaN;
    const result = isNumber(input);

    expect(result).toBeFalsy();
  });
});
