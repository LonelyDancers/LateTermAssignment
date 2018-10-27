const tic = require("./tic");

it("should return false for less than zero", () => {
	expect(tic.insert(-1, true)).toBe(false);
});

it("should return true for valid input", () => {
	expect(tic.insert(3, true)).toBe(true);
});

it("should return false for invalid input", () => {
	expect(tic.insert(9, true)).toBe(false);
});

it("should return false for inserting on full cell", () => {
	function testInsertMany(){
		tic.insert(7, false);
		var boolResult = tic.insert(7, true);
		return boolResult;
	}
	expect(testInsertMany()).toBe(false);
});


it("should return X which was inserted", () => {
	function testXchar(){
		tic.insert(8, true);
		return tic.board.getIndex(8);
	}
	expect(testXchar()).toBe('x');
});

it("Should return the same board that was inserted", () => {
	function testGetBoard(theBoard){
		tic.setBoard(theBoard);
		return tic.board.getBoard();
	}
	expect(testGetBoard(['','','x','','','','','',''])).toEqual(['','','x','','','','','','']);
});

it("Should return x when x wins with row 1", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','x','o','o','x','x','o','o'])).toEqual('x');
});

it("Should return o when o wins with row 2", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','o','o','x','x',''])).toEqual('o');
});

it("Should return x when x wins with row 3", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','','','o','o','x','x','x'])).toEqual('x');
});

it("Should return o when o wins with column 1", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['o','x','','o','x','x','o','',''])).toEqual('o');
});

it("Should return x when o wins with column 2", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','o','o','x','','o','x',''])).toEqual('x');
});

it("Should return o when o wins with column 3", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','x','o','x','x','o','','','o'])).toEqual('o');
});

it("Should return x when x wins with \\ diagonal", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','','','','x','o','','o','x'])).toEqual('x');
});

it("Should return o when o wins with / diagonal", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','','o','x','o','','o','x','x'])).toEqual('o');
});

it("Should return d when the game is a draw", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','x','o','o','o','x','x'])).toEqual('d');
});

it("Should return c when the game should continue", () => {
	function testGameOver(theBoard){
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','','','','',''])).toEqual('c');
});

it("Should return an empty board", () => {
	function testNewGame(){
		tic.insert(1,true);
		tic.insert(2, false)
		tic.newGame();
		return tic.board.getBoard();
	}
	expect(testNewGame()).toEqual(['','','','','','','','','']);
});

