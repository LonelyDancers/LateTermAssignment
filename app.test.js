// src/api.test.js

const request = require("supertest");
const app = require("./app");

describe("GET undefined endpoint", () => {
    it("should return a 404 error for undefined URL", async () => {
        const res = await request(app).get("/UndefinedURL");
        expect(res.status).toBe(404);
    });
});