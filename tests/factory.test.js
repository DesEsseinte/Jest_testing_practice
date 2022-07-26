const instance = require('../code/factory');


test("myFactory gets age", () => {
	expect(instance.getAge()).toBe(41)
});
test("myFactory sets age", () =>{
	instance.setAge(42)
	expect(instance.getAge()).toBe(42)
});
test("myFactory sends message with no arguments passed in.", () =>{
	expect(instance.sendMessage()).toBe("Hello Matt.")
});
test("myFactory sends bespoke message with argument passed in.", () =>{
	expect(instance.sendMessage("I love you.")).toBe("Hello Matt. I love you.")
});