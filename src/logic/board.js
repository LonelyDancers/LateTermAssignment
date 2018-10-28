class Board {
    constructor(){
        this.board = ['','','','','','','','',''];
    }
    //returns the board.
    getBoard() {
        return this.board;
    }
    
    //sets the board to start in the middle of a game & returns the turn number
    setBoard(newBoard) {
        this.board = newBoard;
        var counter = 0;
        for (var i = 0; i < 9; i++) {
            if (this.board[i] != '')
                counter++;
        }
        return counter;
    }
    //check if the index is in the correct range and then 
    //save the move in the correct index
    setIndex(index, character){
        if(index < 0 || index > 8)
            throw "Index out of range";
        this.board[index] = character;
    }
    //get and return what is stored in the given index
    getIndex(index){
        if(index < 0 || index > 8)
            throw "Index out of range";
        return this.board[index];
    }
    resetBoard(){
        this.board = ['','','','','','','','',''];
    }
}

module.exports = Board;