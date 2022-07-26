const caesarCipher = require ('../code/caesarCipher')


test("caesarCipher returns input shifted up by one letter", () =>{
	expect(caesarCipher("matt")).toBe("nbuu")
});
test("caesarCipher returns input shifted up by one letter", () =>{
	expect(caesarCipher("abc")).toBe("bcd")
});
test("caesarCipher throws error if input is empty", () =>{
	expect( ()=> caesarCipher("")).toThrow(Error)
}); 

test("caesarCipher can accept a word with 'z'", () =>{
	expect(caesarCipher("zebra")).toBe("afcsb")
});
test("caesarCipher can accept numbers", () =>{
	expect(caesarCipher("hello1")).toBe("ifmmp2")
});
test("caesarCipher can accept number 9", () =>{
	expect(caesarCipher("hello9")).toBe("ifmmp0")
});