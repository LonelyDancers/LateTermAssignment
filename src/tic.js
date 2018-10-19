var board=['','','','','','','','',''];
var	xTurn = true;
var turnNumber = 0;

//if the index is not legal it returns false.
//if the index is already full it returns false
//if the move is legal the move is inserted and turnnumber is incremented
function insert(index, isXTurn) {
	if(index < 0 || index > 8 || board[index] != '') {
		return false;
	}
	if(isXTurn){
		board[index] = 'x';
	}
	else{
		board[index] = 'o';
	}
	turnNumber++;
	return true;
}

function gameOver() {
	for (var i = 0; i < 3; i++) {
		if (board[i] != '' && board[i] == board[i + 3] && board[i] == board[i + 6])
			return board[i];
		if (board[i * 3] != '' && board[i * 3] == board[i * 3 + 1] && board[i * 3] == board[i * 3 + 2])
			return board[i * 3];
	}
	if (board[0] != '' && board[0] == board[4] && board[0] == board[8])
		return board[0];
	if (board[2] != '' && board[2] == board[4] && board[2] == board[6])
		return board[2];
	if (turnNumber >= 9)
			return 'd';
	return 'c';
}

//returns the board.
function getBoard() {
	return board;
}

//sets the board.
function setBoard(newBoard) {
	board = newBoard;
	var counter = 0;
	for (var i = 0; i < 9; i++) {
		if (board[i] != '')
			counter++;
	}
	turnNumber = counter;
}

module.exports.insert = insert;
module.exports.board = board;
module.exports.getBoard = getBoard;
module.exports.setBoard = setBoard;
module.exports.gameOver = gameOver;
