
	const myArray = [
		{name: "matt", age: 41, message: "Matt is 41 years old."},
		{name: "victoria", age: 46, message: "Victoria is 46 years old."},
		{name: "pink teddy", age: 45, message: "Pink Teddy is 45 years old."},
		{name: "bumble", age:1, message: "Bumble is 1 year old."}
	]

function checkUserAge (name){
	let message = null;
	
	if(name.length>0){
		name = name.toLowerCase();
	}else{
		
		return "specify a name."
	}


	for(let i=myArray.length-1; i>=0;i--){
		if (myArray[i].name === name){
			message = myArray[i].message
		}
	}

	if(!message){
		message = "User not found."
	}

	return message;
	
}

module.exports = checkUserAge;