const reverseString = require('../code/reverseString');


// reverse string
test('reverses matt and prints ttam', () => {
	expect(reverseString('matt')).toBe('ttam');
});
test("reverses multi-word strings with whitespace.", () =>{
	expect(reverseString('hello matt')).toBe('ttam olleh')
});