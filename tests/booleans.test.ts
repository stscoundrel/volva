import { isBoolean } from '../src';

describe('Booleans (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isBoolean();
    }).toThrow('Missing argument');
  });
});

describe('Booleans (should return true)', () => {
  test('Returns true on bool value true', () => {
    const input = true;
    const result = isBoolean(input);

    expect(result).toBeTruthy();
  });

  test('Returns true on bool value false', () => {
    const input = false;
    const result = isBoolean(input);

    expect(result).toBeTruthy();
  });
});

describe('Booleans (should return false)', () => {
  test('Returns false on zero', () => {
    const input = 0;
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on integer', () => {
    const input = 89;
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on float', () => {
    const input = 19.89;
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string form number', () => {
    const input = '1917';
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string that looks like bool', () => {
    const input = 'true';
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty string', () => {
    const input = '';
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string', () => {
    const input = 'Today is a good day to die';
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    const input = null;
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty array', () => {
    const input = [];
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' };
    const result = isBoolean(input);

    expect(result).toBeFalsy();
  });
});
