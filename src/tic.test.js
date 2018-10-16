const main = require("./tic");

it("should return hello world", () => {
	expect(main()).toBe("Hello, World!");
});

