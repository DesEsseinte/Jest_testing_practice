const cipher 	= 	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


function caesarCipher (word){
	if(word.length===0){
		throw new Error("You must enter a word.")
	}
	let encryptedWord ="";

	for(let i=0; i<=word.length-1; i++){
		for(let index=0; index <=cipher.length-1; index++){
			if(word[i]===cipher[index]){
				if(word[i]==="z"){
					encryptedWord += "a"
				}else if(word[i]==="Z"){
					encryptedWord += "A"
				}else if(word[i]==="9"){
					encryptedWord += "0"
				}else{

					encryptedWord += cipher[index+1];

				}			
			}
		}
	}

	return encryptedWord;
}

module.exports = caesarCipher;
