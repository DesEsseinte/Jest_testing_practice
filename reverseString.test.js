const reverseString = require('./reverseString');


// reverse string
test('reverses matt and prints ttam', () => {
	expect(reverseString('matt')).toBe('ttam');
})