var Board = require('./board');

//if the index is not legal it returns false.
//if the index is already full it returns false
//if the move is legal the move is inserted and turnnumber is incremented
class Tic {
	constructor(){
		this.turnNumber = 0;
		this.xTurn = true; //keep track of who's turn it is. If it's X turn true else false
		this.board = new Board();
	}
	insert(index) {
		//check if both the area clicked is a playable area and make sure it is empty
		if(index < 0 || index > 8 || this.board.getIndex(index) != '') {
			return false;
		} //insert X or O into the table
		if(this.xTurn){
			this.xTurn = !this.xTurn;
			this.board.setIndex(index, 'x');
		}
		else{
			this.xTurn = !this.xTurn;
			this.board.setIndex(index, 'o');
		}
		//make sure to keep track of the turn numbers so that we know if the game
		//ends in a draw
		this.turnNumber++;
		return true;
	}
	//start a game in the middle
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
			//check for three in a row vertically 
			if (this.board.getIndex(i) != '' && this.board.getIndex(i) == this.board.getIndex(i + 3) && this.board.getIndex(i) == this.board.getIndex(i + 6))
				return this.board.getIndex(i);
			//check for three in a row horizontally
			if (this.board.getIndex(i * 3) != '' && this.board.getIndex(i * 3) == this.board.getIndex(i * 3 + 1) && this.board.getIndex(i * 3) == this.board.getIndex(i * 3 + 2))
				return this.board.getIndex(i * 3);
		}
		//check for diagonal win
		if (this.board.getIndex(0) != '' && this.board.getIndex(0) == this.board.getIndex(4) && this.board.getIndex(0) == this.board.getIndex(8))
			return this.board.getIndex(0);
		if (this.board.getIndex(2) != '' && this.board.getIndex(2) == this.board.getIndex(4) && this.board.getIndex(2) == this.board.getIndex(6))
			return this.board.getIndex(2);
		//if the board is full and there is no winner return draw
		if (this.turnNumber >= 9) 
				return 'd';
		return 'c';
	}
	
	getisXTurn(){
		return this.xTurn;
	}
	//reset the game
	newGame(){ 
		this.turnNumber = 0;
		this.xTurn = true;
		this.board = new Board();
	}
}

module.exports = Tic;
