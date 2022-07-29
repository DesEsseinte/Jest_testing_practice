const asyncCode = () =>{

	const myPromise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("hello")
		},2000)
	});
	
	return myPromise

}





module.exports = asyncCode;