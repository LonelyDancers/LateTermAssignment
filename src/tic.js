var board=['','','','','','','','',''];
var	xTurn = true;
var turnNumber = 1;

//if the index is not legal it returns false.
//if the index is already full it returns false
//if the move is legal the move is inserted and turnnumber is incremented
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
	turnNumber++;
	return true;
}

//returns the board.
function getBoard(){
	return board;
}

//sets the board.
function setBoard(newBoard){
	board = newBoard;
}

module.exports.insert = insert;
module.exports.board = board;
module.exports.getBoard = getBoard;
module.exports.setBoard = setBoard;
