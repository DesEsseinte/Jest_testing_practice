//Capitalise first character in string

function capitalize(string) {
	string = string.replace(string[0],string[0].toUpperCase());
	return 'hello '+string;
}
module.exports = capitalize;