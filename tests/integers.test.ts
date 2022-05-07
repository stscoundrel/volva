import { isInteger } from '../src';

describe('Integers (general)', () => {
  test('Throws error on missing argument', () => {
    expect(() => {
      isInteger();
    }).toThrow('Missing argument');
  });
});

describe('Integers (should return true)', () => {
  test('Returns true on positive integer', () => {
    const input = 5;
    const result = isInteger(input);

    expect(result).toBeTruthy();
  });

  test('Returns true on negative integer', () => {
    const input = -2;
    const result = isInteger(input);

    expect(result).toBeTruthy();
  });
});

describe('Integers (should return false)', () => {
  test('Returns false on string form integer', () => {
    const input = '1917';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on float', () => {
    const input = 30.7;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    const input = null;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty array', () => {
    const input = [];
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on populated array', () => {
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on object', () => {
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' };
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty string', () => {
    const input = '';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string', () => {
    const input = 'Today is a good day to die';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value true', () => {
    const input = true;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value false', () => {
    const input = false;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });
});

describe('Integers (should return true) / Legacy browsers', () => {
  test('Returns true on integer / legacy browsers', () => {
    Number.isInteger = undefined;
    const input = 5;
    const result = isInteger(input);

    expect(result).toBeTruthy();
  });
});

describe('Integers (should return false) / Legacy browsers', () => {
  test('Returns false on string form integer', () => {
    Number.isInteger = undefined;
    const input = '1917';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on float', () => {
    Number.isInteger = undefined;
    const input = 30.7;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on null', () => {
    Number.isInteger = undefined;
    const input = null;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty array', () => {
    Number.isInteger = undefined;
    const input = [];
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on populated array', () => {
    Number.isInteger = undefined;
    const input = ['Revenger', 'Shadow Captain', 'Bone Silence'];
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on object', () => {
    Number.isInteger = undefined;
    const input = { title: 'Bone Silence', author: 'Alastair Reynolds' };
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on empty string', () => {
    Number.isInteger = undefined;
    const input = '';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on string', () => {
    Number.isInteger = undefined;
    const input = 'Today is a good day to die';
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value true', () => {
    Number.isInteger = undefined;
    const input = true;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });

  test('Returns false on bool value false', () => {
    Number.isInteger = undefined;
    const input = false;
    const result = isInteger(input);

    expect(result).toBeFalsy();
  });
});
