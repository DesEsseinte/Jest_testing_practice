const instance = require('../code/factory');

const matt = instance.matt
const victoria = instance.victoria

//matt obj
test("myFactory gets age", () => {
	expect(matt.getAge()).toBe(41)
});
test("myFactory sets age", () =>{
	matt.setAge(42)
	expect(matt.getAge()).toBe(42)
});
test("myFactory sends message with no arguments passed in.", () =>{
	expect(matt.sendMessage()).toBe("Hello Matt.")
});
test("myFactory sends bespoke message with argument passed in.", () =>{
	expect(matt.sendMessage("I love you.")).toBe("Hello Matt. I love you.")
});

//victoria obj
test("myFactory gets age", () => {
	expect(victoria.getAge()).toBe(46)
});
test("myFactory sets age", () =>{
	victoria.setAge(47)
	expect(victoria.getAge()).toBe(47)
});
test("myFactory sends message with no arguments passed in.", () =>{
	expect(victoria.sendMessage()).toBe("Hello Victoria.")
});
test("myFactory sends bespoke message with argument passed in.", () =>{
	expect(victoria.sendMessage("I love you.")).toBe("Hello Victoria. I love you.")
});
