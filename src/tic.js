var board=['','','','','','','','',''];
var	xTurn = true;
var turnNumber = 1;

function insert(index, isXTurn) {
	if(index < 0 || index > 8 || board[index] != ''){
		return false;
	}
	if(isXTurn){
		board[index] = 'x';
	}
	else{
		board[index] = 'o';
	}
	return true;
}

function main() {


	return "Hello, World!";
}

module.exports.insert = insert;
module.exports.main = main;
module.exports.board = board;
