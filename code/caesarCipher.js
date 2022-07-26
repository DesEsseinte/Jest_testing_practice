const cipher 	= 	"abcdefghijklmnopqrstuvwxyz"


function caesarCipher (word){
	if(word.length===0){
		throw new Error("You must enter a word.")
	}
	let encryptedWord ="";

	for(let i=0; i<=word.length-1; i++){
		for(let index=0; index <=cipher.length-1; index++){
			if(word[i]===cipher[index]){
								
				encryptedWord += cipher[index+1];
			}
		}
	}
	return encryptedWord;
}

module.exports = caesarCipher;
