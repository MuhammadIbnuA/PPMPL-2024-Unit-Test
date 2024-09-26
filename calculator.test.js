// calculator.test.js
const Calculator = require('./calculator');
const calculator = new Calculator();

describe('Calculator Tests', () => {
  // Test cases for addition
  test.each([
    // Format: [a, b, expected]
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
  ])('add(%i, %i) should return %i', (a, b, expected) => {
    expect(calculator.add(a, b)).toBe(expected);
  });

  // Test cases for subtraction
  test.each([
    // Format: [a, b, expected]
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
  ])('subtract(%i, %i) should return %i', (a, b, expected) => {
    expect(calculator.subtract(a, b)).toBe(expected);
  });

  // Test cases for multiplication
  test.each([
    // Format: [a, b, expected]
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
  ])('multiply(%i, %i) should return %i', (a, b, expected) => {
    expect(calculator.multiply(a, b)).toBe(expected);
  });

  // Test cases for division
  test.each([
    // Format: [a, b, expected]
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
    [/*isi a*/, /*isi b*/, /*isi expected*/],
  ])('divide(%i, %i) should return %i', (a, b, expected) => {
    expect(calculator.divide(a, b)).toBe(expected);
  });

  // Test division by zero
  test('divide(10, 0) should throw an error', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
  });
});
