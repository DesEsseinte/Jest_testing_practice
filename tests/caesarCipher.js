const caesarCipher = require ('../code/caesarCipher')


test("caesarCipher returns input shifted up by one letter", () =>{
	expect(caesarCipher("matt")).toBe("nbuu")
});
test("caesarCipher returns error if input is empty", () =>{
	expect(caesarCipher("")).toBe(new Error)
}); 