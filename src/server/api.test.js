// src/api.test.js

const request = require("supertest");
const app = require("../../app");

describe("GET /api/getboard endpoint", () => {
    it("getboard should return a 200 OK status code", async () => {
        const res = await request(app).get("/api/tic/getboard");
        expect(res.status).toBe(200);
    });
});

describe("GET api/tic/gameover endpoint", () => {
    it("gameover should return a 200 OK status code", async () => {
        const res = await request(app).get("/api/tic/gameover");
        expect(res.status).toBe(200);
    });
});

describe("Check if /api/tic/gameover contains GameOver in body", () => {
    it("gameover should return a 200 OK status code", async () => {
        const res = await request(app).get("/api/tic/gameover");
        expect(res.body).toHaveProperty('GameStatus');
    });
});
