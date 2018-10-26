// src/api.test.js

const request = require("supertest");
const app = require("../../app");

describe("GET /tic endpoint", () => {
    it("should return a 200 OK status code", async () => {
        const res = await request(app).get("/api/tic");
        expect(res.status).toBe(200);
    });
});