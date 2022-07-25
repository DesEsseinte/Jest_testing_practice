const checkUserAge = require('../code/checkUserAge');


test('checkUserAge returns message with name and age of user', () =>{
	expect(checkUserAge('Matt')).toBe('Matt is 41 years old.');
});
test("checkUserAge returns 'year' not 'years' if age is 1", () =>{
	expect(checkUserAge('Bumble')).toBe('Bumble is 1 year old.')
});
test('CheckUserAge returns -user not found- message correctly', () =>{
	expect(checkUserAge('Henry')).toBe('User not found.')
})