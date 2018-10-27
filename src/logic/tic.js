var Board = require('./board');
var board = new Board();
var	xTurn = true;
var turnNumber = 0;

//if the index is not legal it returns false.
//if the index is already full it returns false
//if the move is legal the move is inserted and turnnumber is incremented
function insert(index, isXTurn) {
	if(index < 0 || index > 8 || board.getIndex(index) != '') {
		return false;
	}
	if(isXTurn){
		board.setIndex(index, 'x');
	}
	else{
		board.setIndex(index, 'o');
	}
	turnNumber++;
	return true;
}
function setBoard(newBoard){
	turnNumber = board.setBoard(newBoard);
}
function gameOver() {
	for (var i = 0; i < 3; i++) {
		if (board.getIndex(i) != '' && board.getIndex(i) == board.getIndex(i + 3) && board.getIndex(i) == board.getIndex(i + 6))
			return board.getIndex(i);
		if (board.getIndex(i * 3) != '' && board.getIndex(i * 3) == board.getIndex(i * 3 + 1) && board.getIndex(i * 3) == board.getIndex(i * 3 + 2))
			return board.getIndex(i * 3);
	}
	if (board.getIndex(0) != '' && board.getIndex(0) == board.getIndex(4) && board.getIndex(0) == board.getIndex(8))
		return board.getIndex(0);
	if (board.getIndex(2) != '' && board.getIndex(2) == board.getIndex(4) && board.getIndex(2) == board.getIndex(6))
		return board.getIndex(2);
	if (turnNumber >= 9)
			return 'd';
	return 'c';
}
function newGame(){
	turnNumber = 0;
	board = board.resetBoard();
}


module.exports.insert = insert;
module.exports.board = board;
module.exports.gameOver = gameOver;
module.exports.setBoard = setBoard;
module.exports.newGame = newGame;
