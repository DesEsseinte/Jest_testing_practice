const checkUserAge = require('../code/checkUserAge');


test('checkUserAge returns message with name and age of user', () =>{
	expect(checkUserAge('Matt')).toBe('Matt is 41 years old.');
});