var Board = require('./board');

//if the index is not legal it returns false.
//if the index is already full it returns false
//if the move is legal the move is inserted and turnnumber is incremented
class Tic {
	constructor(){
		this.turnNumber = 0;
		this.xTurn = true;
		this.board = new Board();
	}
	insert(index) {
		if(index < 0 || index > 8 || this.board.getIndex(index) != '') {
			return false;
		}
		if(this.xTurn){
			this.xTurn = !this.xTurn;
			this.board.setIndex(index, 'x');
		}
		else{
			this.xTurn = !this.xTurn;
			this.board.setIndex(index, 'o');
		}
		this.turnNumber++;
		return true;
	}
	setBoard(newBoard){
		this.turnNumber = this.board.setBoard(newBoard);
		this.xTurn = true;
		if(this.turnNumber % 2 == 1)
		this.xTurn = false;
	}
	getCurrentBoard() {
		return this.board;
	}
	getTurnNumber() {
		return this.turnNumber;
	}
	gameOver() {
		for (var i = 0; i < 3; i++) {
			if (this.board.getIndex(i) != '' && this.board.getIndex(i) == this.board.getIndex(i + 3) && this.board.getIndex(i) == this.board.getIndex(i + 6))
				return this.board.getIndex(i);
			if (this.board.getIndex(i * 3) != '' && this.board.getIndex(i * 3) == this.board.getIndex(i * 3 + 1) && this.board.getIndex(i * 3) == this.board.getIndex(i * 3 + 2))
				return this.board.getIndex(i * 3);
		}
		if (this.board.getIndex(0) != '' && this.board.getIndex(0) == this.board.getIndex(4) && this.board.getIndex(0) == this.board.getIndex(8))
			return this.board.getIndex(0);
		if (this.board.getIndex(2) != '' && this.board.getIndex(2) == this.board.getIndex(4) && this.board.getIndex(2) == this.board.getIndex(6))
			return this.board.getIndex(2);
		if (this.turnNumber >= 9)
				return 'd';
		return 'c';
	}
	getisXTurn(){
		return this.xTurn;
	}
	newGame(){
		this.turnNumber = 0;
		this.xTurn = true;
		this.board = new Board();
	}
}

module.exports = Tic;
