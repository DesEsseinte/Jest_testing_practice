const asyncCode = () =>{

	const myPromise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("hello");
			reject("error");
		},2000)
	});
	
	return myPromise

}





module.exports = asyncCode;