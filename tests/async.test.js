const asyncCode = require('../code/async');

test("asyncCode test with returned promise",() =>{
	return asyncCode().then(data =>{
		expect(data).toBe("hello")
	})
})
test("asyncCode test with aysnc/await", async ()=>{
	const data = await asyncCode();
	expect(data).toBe("hello");
})
test("asyncCode test with async/await using -resolves-", async () =>{
	await expect(asyncCode()).resolves.toBe("hello");
})
/*
test("asyncCode test with async/await using -rejects-", async () =>{
	await expect(asyncCode()).rejects.toBe("error");
})
*/