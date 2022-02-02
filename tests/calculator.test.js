const calculator = require('../code/calculator');


test('calculator adds two numbers', () => {
	expect(calculator.add(2,3)).toBe(5);
});
test('calculator subtracts two numbers', () => {
	expect(calculator.subtract(10,2)).toBe(8);
});
test('calculator multiplies two numbers', () => {
	expect(calculator.multiply(10,2)).toBe(20);
});
test('calculator divides two numbers', () => {
	expect(calculator.divide(10,2)).toBe(5);
});