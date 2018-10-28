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
    it("gameover should return contain gameover", async () => {
        const res = await request(app).get("/api/tic/gameover");
        expect(res.body).toHaveProperty('gameStatus');
    });
});

describe("Check if /api/tic/turnnumber contains turnnumber in body", () => {
    it("turnnumber should be returned", async () => {
        const res = await request(app).get("/api/tic/turnnumber");
        expect(res.body).toHaveProperty('turn');
    });
});


describe("/api checks if it returns status 200 with OPTIONS", () => {
    it("200 should be returned if an options request is made", async () => {
        const res = await request(app).options("/api");
        expect(res.status).toBe(200);
    });
});

describe("/api checks if it returns status 405 on GET (user should use OPTIONS instead)", () => {
    it("get request returns 405 on /api", async () => {
        const res = await request(app).get("/api");
        expect(res.status).toBe(405);
    });
});

describe("/api/tic checks if it returns status 200 with OPTIONS", () => {
    it("200 should be returned if an options request is made", async () => {
        const res = await request(app).options("/api/tic");
        expect(res.status).toBe(200);
    });
});

describe("/api checks if it returns status 405 on GET (user should use OPTIONS instead)", () => {
    it("get request returns 405 on /api/tic", async () => {
        const res = await request(app).get("/api/tic");
        expect(res.status).toBe(405);
    });
});
