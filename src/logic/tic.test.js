const Tic = require("./tic");

it("should return false for less than zero", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(-1);
		return result;
	}
	expect(testInsert()).toBe(false);
});

it("should return true for valid input", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(3);
		return result;

	}
	expect(testInsert()).toBe(true);
});

it("should return false for invalid input", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(9);
		return result;
	}
	expect(testInsert()).toBe(false);
});

it("should return false for inserting on full cell", () => {
	function testInsertMany(){
		tic = new Tic;
		tic.insert(7);
		var boolResult = tic.insert(7);
		return boolResult;
	}
	expect(testInsertMany()).toBe(false);
});


it("should return X which was inserted", () => {
	function testXchar(){
		tic = new Tic;
		tic.insert(3);
		return tic.getCurrentBoard().getIndex(3);
	}
	expect(testXchar()).toBe('x');
});

it("Should return the same board that was inserted", () => {
	function testGetBoard(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.getCurrentBoard().getBoard();
	}
	expect(testGetBoard(['','','x','','','','','',''])).toEqual(['','','x','','','','','','']);
});

it("Should return x when x wins with row 1", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','x','o','o','x','x','o','o'])).toEqual('x');
});

it("Should return o when o wins with row 2", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','o','o','x','x',''])).toEqual('o');
});

it("Should return x when x wins with row 3", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','','','o','o','x','x','x'])).toEqual('x');
});

it("Should return o when o wins with column 1", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['o','x','','o','x','x','o','',''])).toEqual('o');
});

it("Should return x when o wins with column 2", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','o','o','x','','o','x',''])).toEqual('x');
});

it("Should return o when o wins with column 3", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','x','o','x','x','o','','','o'])).toEqual('o');
});

it("Should return x when x wins with \\ diagonal", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','','','','x','o','','o','x'])).toEqual('x');
});

it("Should return o when o wins with / diagonal", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','','o','x','o','','o','x','x'])).toEqual('o');
});

it("Should return d when the game is a draw", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','x','o','o','o','x','x'])).toEqual('d');
});

it("Should return c when the game should continue", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','','','','',''])).toEqual('c');
});

it("Should return an empty board", () => {
	function testNewGame(){
		tic = new Tic;
		tic.insert(1,true);
		tic.insert(2, false)
		tic.newGame();
		return tic.getTurnNumber();
	}
	expect(testNewGame()).toEqual(0);
});

