	async function hostDinner(){
		try{
		  const dinner = await bakeSouffle();
		  return (`${dinner} is served!`);
		}
		catch(error){
		  return (error);
		}
	  }




function bakeSouffle () {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let success = randomSuccess();
			if(success){
				resolve ("Bean souffle")
			}else{
				reject ("Dinner is ruined.")

			}
		},1000)
	})
}






const randomSuccess = ()=>{
	let number = Math.random();
	if (number >.5){
		return true
	}else{
		return false
	}
}

module.exports = {hostDinner:hostDinner, bakeSouffle:bakeSouffle };