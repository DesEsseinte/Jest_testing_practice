const reverseString = require('../code/reverseString');


// reverse string
test('reverses matt and prints ttam', () => {
	expect(reverseString('matt')).toBe('ttam');
})