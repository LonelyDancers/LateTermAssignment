const Tic = require("./tic");

//making sure the insert function doesn't allow negatives
it("should return false for less than zero", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(-1);
		return result;
	}
	expect(testInsert()).toBe(false);
});
//makes sure the insert function works normally for correct input
it("should return true for valid input", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(3);
		return result;

	}
	expect(testInsert()).toBe(true);
});
//makes sure the index cannot be outside the board
it("should return false for invalid input", () => {
	function testInsert(){
		tic = new Tic;
		var result = tic.insert(9);
		return result;
	}
	expect(testInsert()).toBe(false);
});
//make sure a cell that has already been used cannot be overwritten
it("should return false for inserting on full cell", () => {
	function testInsertMany(){
		tic = new Tic;
		tic.insert(7);
		var boolResult = tic.insert(7);
		return boolResult;
	}
	expect(testInsertMany()).toBe(false);
});

//make sure the correct symbol is inserted into the right cell
it("should return X which was inserted", () => {
	function testXchar(){
		tic = new Tic;
		tic.insert(3);
		return tic.getCurrentBoard().getIndex(3);
	}
	expect(testXchar()).toBe('x');
});
//make sure the board is correctly stored in the memory
it("Should return the same board that was inserted", () => {
	function testGetBoard(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.getCurrentBoard().getBoard();
	}
	expect(testGetBoard(['','','x','','','','','',''])).toEqual(['','','x','','','','','','']);
});


//returns for as the turn number since 4 moves have been made. Checks that the turnnumber is updated
it("Should return 4 as the turn number", () => {
	function testTurnNumber(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.getTurnNumber();
	}
	expect(testTurnNumber(['','o','x','','','x','o','',''])).toEqual(4);
});

//returns false since it is Os turn. Checks that the isXTurn is updating.  
it("Should false since it is Os turn after 3 moves", () => {
	function testWhosTurn(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.getisXTurn();
	}
	expect(testWhosTurn(['','o','x','','','x','','',''])).toEqual(false);
});

//make sure that the gameOver function works correctly.
//make sure it selects the right winner.
//testing row 1
it("Should return x when x wins with row 1", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','x','o','o','x','x','o','o'])).toEqual('x');
});
//make sure gameOver also works for 'o' and testing row 2
it("Should return o when o wins with row 2", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','o','o','x','x',''])).toEqual('o');
});
//testing row 3
it("Should return x when x wins with row 3", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','','','o','o','x','x','x'])).toEqual('x');
});
/// testimg column 1
it("Should return o when o wins with column 1", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['o','x','','o','x','x','o','',''])).toEqual('o');
});
//testing column 2
it("Should return x when o wins with column 2", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','x','o','o','x','','o','x',''])).toEqual('x');
});
//testing column 3
it("Should return o when o wins with column 3", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','x','o','x','x','o','','','o'])).toEqual('o');
});
//testing diagonal
it("Should return x when x wins with \\ diagonal", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','','','','x','o','','o','x'])).toEqual('x');
});
//testing the other diagonal
it("Should return o when o wins with / diagonal", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['','','o','x','o','','o','x','x'])).toEqual('o');
});
//testing that the gameOver function can recognize a draw
it("Should return d when the game is a draw", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','x','o','o','o','x','x'])).toEqual('d');
});
//testing that the gameOver function returns the correct value after checking
it("Should return c when the game should continue", () => {
	function testGameOver(theBoard){
		tic = new Tic;
		tic.setBoard(theBoard);
		return tic.gameOver();
	}
	expect(testGameOver(['x','o','x','o','','','','',''])).toEqual('c');
});
//testing the newGame function
it("Should return turn 0 for a new game", () => {
	function testNewGame(){
		tic = new Tic;
		tic.insert(1,true);
		tic.insert(2, false)
		tic.newGame();
		return tic.getTurnNumber();
	}
	expect(testNewGame()).toEqual(0);
});

