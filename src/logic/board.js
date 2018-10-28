class Board {
    constructor(){
        this.board = ['','','','','','','','',''];
    }
    //returns the board.
    getBoard() {
        return this.board;
    }
    
    //sets the board.
    setBoard(newBoard) {
        this.board = newBoard;
        var counter = 0;
        for (var i = 0; i < 9; i++) {
            if (this.board[i] != '')
                counter++;
        }
        return counter;
    }
    setIndex(index, character){
        if(index < 0 || index > 8)
            throw "Index out of range";
        this.board[index] = character;
    }
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