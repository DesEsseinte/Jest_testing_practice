const calculator = require('../code/calculator');


test('calculator adds two numbers', () => {
	expect(calculator.add(2,3)).toBe(5);
});
test('calculator adds negative numbers accurately', () => {
	expect(calculator.add(-1,-1)).toBe(-2);
});
test('calculator adds a neg number and pos number accurately', () =>{
	expect(calculator.add(5,-2)).toBe(3);
});
test('calculator subtracts two numbers', () => {
	expect(calculator.subtract(10,2)).toBe(8);
});
test('calculator subtracts neg numbers', () =>{
	expect(calculator.subtract(-2,-2)).toBe(0);
});
test('calculator multiplies two numbers', () => {
	expect(calculator.multiply(10,2)).toBe(20);
});
test('calculator divides two numbers', () => {
	expect(calculator.divide(10,2)).toBe(5);
});