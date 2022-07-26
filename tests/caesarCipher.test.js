const caesarCipher = require ('../code/caesarCipher')


test("caesarCipher returns input shifted up by one letter", () =>{
	expect(caesarCipher("matt")).toBe("nbuu")
});
test("caesarCipher handles various inputs made up of letters", () =>{
	expect(caesarCipher("abc")).toBe("bcd")
});
test("caesarCipher throws error if input is empty", () =>{
	expect( ()=> caesarCipher("")).toThrow(Error)
}); 
test("caesarCipher accepts words with 'z'", () =>{
	expect(caesarCipher("zebra")).toBe("afcsb")
});
test("caesarCipher accepts numbers", () =>{
	expect(caesarCipher("hello1")).toBe("ifmmp2")
});
test("caesarCipher accepts number 9", () =>{
	expect(caesarCipher("hello9")).toBe("ifmmp0")
});
test("caesarCipher accepts words alternating numbers and letters", () =>{
	expect(caesarCipher("09ma22tt")).toBe("10nb33uu")
});
test("caesarCipher accepts words with capital letters", () =>{
	expect(caesarCipher("MATT")).toBe("NBUU")
});
test("caesarCipher works with capital 'Z'", () =>{
	expect(caesarCipher("Zebra")).toBe("Afcsb")
});