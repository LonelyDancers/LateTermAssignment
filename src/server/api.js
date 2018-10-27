// src/api.js

const express = require("express");
const app = express.Router();
const tic = require("../logic/tic");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/tic/getboard", (req, res) =>  {
	res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({ theBoard: tic.getBoard() }, null, 3));
	//res.status(200).json((JSON.stringify({ a: tic.getBoard() }, null, 3)));
});

app.post("/tic/insert", function(req, res) {
	var index = req.body.theIndex;
	var whosTurn = req.body.whosTurn;
	var valid = tic.insert(index, whosTurn);
	res.send(JSON.stringify({ "valid": valid }, null, 3));
});

app.get("/tic/gameover", (req, res) =>  {
	res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({ GameStatus: tic.gameOver() }, null, 3));
	//res.status(200).json((JSON.stringify({ a: tic.getBoard() }, null, 3)));
});

module.exports = app;