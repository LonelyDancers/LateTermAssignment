const Board = require('./board');

//tests the insert function and makes sure the switch between x and o is correct
it("should return O which was inserted", () => {
	function testOchar(){
        var board = new Board();
		board.setIndex(7, 'o');
		return board.getIndex(7);
	}
	expect(testOchar()).toBe('o');
});
//testing reset board
it("should return an emptyBoard", () => {
	function testResetBoard(){
        var board = new Board();
        board.setIndex(7, 'o');
        board.setIndex(8, 'x');
        board.resetBoard();
		return board.getBoard();
	}
	expect(testResetBoard()).toEqual(['','','','','','','','','']);
});
//testing a high index to make sure the board doens't allow itand throws errorr
it("should return an error followed for out of index insertion", () => {
	function catchNegErrorOnSetIndex() {
        var board = new Board();
        board.setIndex(99, 'x');
	}
	expect(catchNegErrorOnSetIndex).toThrow("Index out of range");
});
//Mking sure the function throws error at negative index
it("should return an error followed for trying to get out of index", () => {
	function catchNegErrorOnGetIndex() {
        var board = new Board();
        board.getIndex(-1);
	}
	expect(catchNegErrorOnGetIndex).toThrow("Index out of range");
});