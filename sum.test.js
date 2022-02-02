const sum = require('./sum');

test('adds 2 plus 2 to equal 4', () => {
	expect(sum(2, 2)).toBe(4);
});
