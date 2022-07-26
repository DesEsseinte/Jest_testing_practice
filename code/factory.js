
function myFactory (firstName,years){
	let name = firstName;
	let age = years;


	const getAge =() =>{
		return age;
	}

	const setAge =(updatedAge) =>{
		age = updatedAge
	
	}

	const sendMessage =(message=null) => {
		let msg = message;
		if(!msg){
			return `Hello ${name}.`
		}else{
			return `Hello ${name}. ${msg}`
		}
	}



	return {getAge, setAge, sendMessage}
}

const matt = myFactory('Matt', 41);
const victoria = myFactory('Victoria', 46)

module.exports =  {matt:matt,victoria:victoria};