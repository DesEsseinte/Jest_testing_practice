

function checkUserAge (name){
	let message;
	
	const myArray = [
		{name: "Matt", age: 41},
		{name: "Victoria", age: 46},
		{name: "Pink Teddy", age: 45},
		{name: "Bumble", age:1}
	]

	for(let i=myArray.length-1; i>=0;i--){
		if (myArray[i].name === name){
			message = `${name} is ${myArray[i].age} years old.`
		}
		if(myArray[i].age === 1){
			message = `${name} is ${myArray[i].age} year old.`
		}
	}
	return message;
}

module.exports = checkUserAge;