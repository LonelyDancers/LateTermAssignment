const tic = require("./tic");


it("should return hello world", () => {
	expect(tic.main()).toBe("Hello, World!");
});

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
		var boolResult = tic.insert(7, false);
		boolResult = tic.insert(7, true);
		return boolResult;
	}
	expect(testInsertMany()).toBe(false);
});

it("should return false for inserting on full cell", () => {
	function testOchar(){
		tic.insert(7, false);
		var theboard = tic.board[7];
		return theboard;
	}
	expect(testOchar()).toBe('o');
});

it("should return false for inserting on full cell", () => {
	function testxchar(){
		tic.insert(8, true);
		var board = tic.board[8];
		return board;
	}
	expect(testxchar()).toBe('x');
});
