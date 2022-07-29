const hostDinnerOBJ = require('../code/hostDinner');

const hostDinner = hostDinnerOBJ.hostDinner;
const bakeSouffle = hostDinnerOBJ.bakeSouffle;


//**********************TESTS        */
test("hostDinner returns correctly",() =>{
	return hostDinner().then(data =>{
		expect(data).toBe("Bean souffle is served!")
	})
})
test("hostDinner rejects correctly", () =>{
	//expect.assertions(1) ???
	return hostDinner().catch(e =>{
		expect(e).toMatch('error');
	})
})

test("bakeSouffle resolves correct message.", async() =>{
	await expect(bakeSouffle()).resolves.toBe("Bean souffle")
})
test("bakeSouffle rejects to correct message.", async() =>{
	await expect(bakeSouffle()).rejects.toBe("Dinner is ruined.")
})