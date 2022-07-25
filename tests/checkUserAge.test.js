const checkUserAge = require('../code/checkUserAge');


test("checkUserAge sends message with user's age - Matt", () =>{
	expect(checkUserAge('Matt')).toBe('Matt is 41 years old.');
});
test("checkUserAge sends message with user's age - Victoria", () =>{
	expect(checkUserAge('Victoria')).toBe('Victoria is 46 years old.');
});

test('checkUserAge works with names of two+ words -Pink Teddy', () =>{
	expect(checkUserAge('Pink Teddy')).toBe('Pink Teddy is 45 years old.');
});

test('CheckUserAge returns -user not found- message correctly', () =>{
	expect(checkUserAge('Henry')).toBe('User not found.')
});
test('CheckUserAge returns specify name for empty string.', () =>{
	expect(checkUserAge('')).toBe('specify a name.')
});

test("CheckUserAge can handle lower and uppercase searches- A",() =>{
	expect(checkUserAge("matt")).toBe('Matt is 41 years old.');
});
test("CheckUserAge can handle lower and uppercase searches- B",() =>{
	expect(checkUserAge("MaTt")).toBe('Matt is 41 years old.');
});