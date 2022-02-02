const capitalize = require('./capitalize');


//capitalize 
test('capitalizes first character in "matt"', () => {
	expect(capitalize('matt')).toBe('hello Matt');
});
